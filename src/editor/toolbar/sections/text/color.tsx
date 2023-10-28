import { ChangeEvent, ReactNode, useContext, useEffect, useState } from "react";
import { useSlate } from "slate-react";
/* -------- Components -------- */
import ActionButton from "../../components/action-button";
import { SectionContainer } from "../../styled";
import { ThemeContext } from "../../../theme/context";
import Popper from "../../components/popper";
import { SketchPicker } from "react-color";
/* -------- Actions & Types -------- */
import {
  getActiveTextColor,
  getElementNode,
  isTextFormatActive,
  setTextColor,
} from "../../../actions";
/* -------- Icon Components -------- */
import Color from "../../icons/color";
import styled from "styled-components";
import { ThemeConfiguration } from "../../../theme/types";
import { ElasticEditor, ElasticElement } from "../../../types";
import Button from "../../components/button";
import { isLinkActive } from "../../../actions";

const OverlayContainer = styled.div<{ theme: ThemeConfiguration }>`
  background-color: ${(props) => props.theme.toolbar.background.primary};
  border: 1px solid ${(props) => props.theme.toolbar.border};
  border-radius: 2px;
  margin-block: 0;
  padding: 1rem;

  color: ${(props) => props.theme.toolbar.text.primary};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 1rem;
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
      <OverlayContainer data-testid="TextColorOverlay" theme={theme[type]}>
        {children}
      </OverlayContainer>
    </Popper>
  );
};

interface ColorConfigOverlayProps {
  targetRef: HTMLElement;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  currentNode: ElasticElement;
}

const getCurrentColor = (editor: ElasticEditor, primaryTextColor: string) => {
  const activeColor = getActiveTextColor(editor);
  return activeColor === "PRIMARY" ? primaryTextColor : activeColor;
};

const ColorConfigOverlay = (props: ColorConfigOverlayProps) => {
  const { targetRef, isOpen, setIsOpen, currentNode } = props;
  const { theme, type } = useContext(ThemeContext);
  const primaryTextColor = theme[type].editor.text.primary;
  const editor = useSlate();
  const [color, setColor] = useState<string>(
    getCurrentColor(editor, primaryTextColor)
  );
  useEffect(() => {
    /*
     * When a user clicks on a new location, we need to update state
     * to represent current state.
     */
    setColor(getCurrentColor(editor, primaryTextColor));
  }, [currentNode]);

  const onColorChange = (newColor: any) => {
    setColor(newColor.hex);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (color !== primaryTextColor) {
      setTextColor(editor, color);
    }
    setIsOpen(false);
  };

  return (
    <Overlay targetRef={targetRef} isOpen={isOpen} setIsOpen={setIsOpen}>
      <SketchPicker color={color} onChange={onColorChange} />
      <ButtonContainer>
        <Button primary onClick={onSubmit} data-testid="SubmitButton">
          Submit
        </Button>
      </ButtonContainer>
    </Overlay>
  );
};

const TextColorSection = () => {
  const editor = useSlate();
  const { theme, type } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ActionButtonRef, setActionButtonRef] = useState<HTMLElement | null>(
    null
  );
  const primaryTextColor = theme[type].editor.text.primary;
  const elementNode = getElementNode(editor);
  if (!elementNode) return null;
  const isLinkFocused = isLinkActive(editor);
  return (
    <>
      {!isLinkFocused && (
        <SectionContainer theme={theme[type]} noSeparator>
          <ActionButton
            active={isTextFormatActive(editor, "textcolor")}
            onMouseDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setIsOpen(!isOpen);
            }}
            reference={setActionButtonRef}
            data-testid="TextColorButton"
          >
            <Color
              color={
                getActiveTextColor(editor) == "PRIMARY"
                  ? primaryTextColor
                  : getActiveTextColor(editor)
              }
            />
          </ActionButton>
        </SectionContainer>
      )}
      {ActionButtonRef && elementNode && isOpen ? (
        <ColorConfigOverlay
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          targetRef={ActionButtonRef}
          currentNode={elementNode}
        />
      ) : null}
    </>
  );
};

export default TextColorSection;
