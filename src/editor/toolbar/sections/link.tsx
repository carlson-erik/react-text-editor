import { ChangeEvent, ReactNode, useContext, useEffect, useState } from "react";
import { Range } from "slate";
import { useSlate } from "slate-react";
/* -------- Components -------- */
import ActionButton from "../components/action-button";
import Button from "../components/button";
import Popper from "../components/popper";
/* -------- Icon Components -------- */
import Link from "../icons/link";
/* -------- Actions & Types-------- */
import styled from "styled-components";
import Input from "../components/input";
import { EditorElement, LinkInlineElement } from "../../types";
import { insertLink, isLinkActive, updateLink } from "../../actions";
import { getElementNode } from "../../actions";
import isUrl from "is-url";
import { ThemeContext } from "../../theme/context";
import { ThemeConfiguration } from "../../theme/types";

const OverlayContainer = styled.div<{ theme: ThemeConfiguration }>`
  background-color: ${(props) => props.theme.toolbar.background.primary};
  border: 1px solid ${(props) => props.theme.toolbar.border};
  border-radius: 2px;
  margin-block: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

interface OverlayProps {
  targetRef: HTMLElement;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  children: ReactNode;
}

const Overlay = (props: OverlayProps) => {
  const { theme, type } = useContext(ThemeContext);
  const { targetRef, isOpen, setIsOpen, children } = props;
  return (
    <Popper
      targetRef={targetRef}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      clickOutside
      placement="bottom"
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 2],
          },
        },
      ]}
    >
      <OverlayContainer theme={theme[type]} data-testid="LinkOverlay">
        {children}
      </OverlayContainer>
    </Popper>
  );
};

interface LinkConfigOverlayProps {
  targetRef: HTMLElement;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  editingMode: "edit" | "new";
  currentNode: EditorElement;
}

const isLinkElement = (node: EditorElement): node is LinkInlineElement => {
  return (
    node.type === "link" &&
    node?.children.length > 0 &&
    "text" in node.children[0]
  );
};

const getInitialURL = (node: EditorElement): string => {
  return isLinkElement(node) ? node.url : "";
};

const getInitialText = (node: EditorElement): string => {
  return isLinkElement(node) &&
    node?.children.length > 0 &&
    "text" in node.children[0]
    ? node.children[0].text
    : "";
};

const LinkConfigOverlay = (props: LinkConfigOverlayProps) => {
  const { targetRef, isOpen, setIsOpen, currentNode, editingMode } = props;
  const editor = useSlate();
  const [url, setURL] = useState<string>(getInitialURL(currentNode));
  const [linkText, setLinkText] = useState<string>(getInitialText(currentNode));
  useEffect(() => {
    /*
     * When a user clicks on a new location, we need to update state
     * to represent current state.
     */
    setURL(getInitialURL(currentNode));
    setLinkText(getInitialText(currentNode));
  }, [currentNode]);

  const onURLChange = (event: ChangeEvent<HTMLInputElement>) => {
    setURL(event.target.value || "");
  };

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkText(event.target.value || "");
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (url !== "" && isUrl(url)) {
      if (editingMode === "edit") {
        updateLink(editor, url);
      } else {
        const trimmedLabel = linkText.trim();
        insertLink(editor, url, trimmedLabel);
      }
      setIsOpen(false);
    }
  };

  return (
    <Overlay targetRef={targetRef} isOpen={isOpen} setIsOpen={setIsOpen}>
      <Input
        id="url-input"
        data-testid="URLInput"
        type="text"
        label="URL"
        value={url}
        onChange={onURLChange}
      />
      {editingMode === "new" ? (
        <Input
          id="link-test-input"
          data-testid="LinkTextInput"
          type="text"
          label="Link Text"
          value={linkText}
          onChange={onTextChange}
        />
      ) : null}
      <ButtonContainer>
        <Button primary onClick={onSubmit} data-testid="UpdateButton">
          {editingMode === "edit" ? "Update" : "Insert"}
        </Button>
      </ButtonContainer>
    </Overlay>
  );
};

const LinkSection = () => {
  const { theme, type } = useContext(ThemeContext);
  const editor = useSlate();
  const [ActionButtonRef, setActionButtonRef] = useState<HTMLElement | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const elementNode = getElementNode(editor);
  const isEditingTextRange =
    editor.selection && !Range.isCollapsed(editor.selection);
  if (!elementNode || isEditingTextRange) return null;
  const isLinkFocused = isLinkActive(editor);
  return (
    <>
      <ActionButton
        active={isLinkFocused}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsOpen(!isOpen);
        }}
        reference={setActionButtonRef}
        data-testid="LinkButton"
      >
        <Link
          color={
            isLinkFocused
              ? theme[type].toolbar.text.selected
              : theme[type].toolbar.text.primary
          }
        />
      </ActionButton>
      {ActionButtonRef && elementNode ? (
        <LinkConfigOverlay
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          targetRef={ActionButtonRef}
          currentNode={elementNode}
          editingMode={isLinkFocused ? "edit" : "new"}
        />
      ) : null}
    </>
  );
};

export default LinkSection;
