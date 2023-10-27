import { useContext } from "react";
import { styled } from "styled-components";
import { useSlate } from "slate-react";
/* -------- Components -------- */
import Dropdown, { Option } from "./components/dropdown";
import { SectionContainer } from "./styled";
/* -------- Actions & Types-------- */
import {
  getElementNode,
  getParentElementNode,
  setElementType,
} from "../actions";
import { ElasticEditorEditor, ElementType } from "../types";
/* -------- Theme -------- */
import { ThemeContext } from "../theme/context";
import { ThemeConfiguration } from "../theme/types";
/* -------- Toolbar Sections -------- */
import AlignmentSection from "./sections/alignment";
import ListSection from "./sections/lists";
import LinkSection from "./sections/link";
import TextFormatSection from "./sections/text/format";
/* -------- Icon Components -------- */
import Paragraph from "./icons/paragraph";
import Heading from "./icons/heading";
import List from "./icons/list";
import Link from "./icons/link";
import Quote from "./icons/quote";
import UndoRedoSection from "./sections/undo-redo";

const getTextElements = (
  theme: ThemeConfiguration,
  activeIcon: string
): Option[] => {
  return [
    {
      label: "Block Quote",
      value: "block-quote",
      icon: (
        <Quote
          color={
            activeIcon === "block-quote"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
        />
      ),
    },
    {
      label: "Paragraph",
      value: "paragraph",
      icon: (
        <Paragraph
          color={
            activeIcon === "paragraph"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
        />
      ),
    },
    {
      label: "Heading 1",
      value: "header-one",
      icon: (
        <Heading
          color={
            activeIcon === "header-one"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
          headingSize={1}
        />
      ),
    },
    {
      label: "Heading 2",
      value: "header-two",
      icon: (
        <Heading
          color={
            activeIcon === "header-two"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
          headingSize={2}
        />
      ),
    },
    {
      label: "Heading 3",
      value: "header-three",
      icon: (
        <Heading
          color={
            activeIcon === "header-three"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
          headingSize={3}
        />
      ),
    },
    {
      label: "Heading 4",
      value: "header-four",
      icon: (
        <Heading
          color={
            activeIcon === "header-four"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
          headingSize={4}
        />
      ),
    },
    {
      label: "Heading 5",
      value: "header-five",
      icon: (
        <Heading
          color={
            activeIcon === "header-five"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
          headingSize={5}
        />
      ),
    },
    {
      label: "Heading 6",
      value: "header-six",
      icon: (
        <Heading
          color={
            activeIcon === "header-six"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
          headingSize={6}
        />
      ),
    },
  ];
};

const getAllElements = (
  theme: ThemeConfiguration,
  activeIcon: string
): Option[] => {
  return [
    ...getTextElements(theme, activeIcon),
    {
      label: "Ordered List",
      value: "ordered-list",
      icon: (
        <List
          color={
            activeIcon === "ordered-list"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
          ordered
        />
      ),
    },
    {
      label: "Bulleted List",
      value: "bulleted-list",
      icon: (
        <List
          color={
            activeIcon === "bulleted-list"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
        />
      ),
    },
    {
      label: "Link",
      value: "link",
      icon: (
        <Link
          color={
            activeIcon === "link"
              ? theme.toolbar.text.selected
              : theme.toolbar.text.primary
          }
        />
      ),
    },
  ];
};

// Gets the active element and as long as it exists, we find the current Element
const getCurrentOption = (
  editor: ElasticEditorEditor,
  theme: ThemeConfiguration
): Option | null => {
  let activeElement = getElementNode(editor);
  if (activeElement?.type === "list-item") {
    activeElement = getParentElementNode(editor);
  }
  if (activeElement !== null) {
    return getAllElements(theme, activeElement?.type).filter(
      (option) => option.value === activeElement?.type
    )[0];
  }
  return null;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface ContentControlProps {
  editType: "text" | "element" | "hidden" | "disabled";
  "data-testid"?: string;
}

const ContentControl = (props: ContentControlProps) => {
  const { theme, type } = useContext(ThemeContext);
  const { editType } = props;
  const editor = useSlate();

  if (editType === "hidden") return null;

  const selectedOption: Option | null = getCurrentOption(editor, theme[type]);

  return (
    <Container data-testid={props["data-testid"] || "ContentControl"}>
      <SectionContainer noSeparator theme={theme[type]}>
        <Dropdown
          selectedOption={selectedOption || undefined}
          onChange={(newOption) =>
            setElementType(editor, newOption.value as ElementType)
          }
          options={getTextElements(theme[type], selectedOption?.value || "")}
          disabled={editType === "disabled"}
        />
      </SectionContainer>
      <UndoRedoSection disabled={editType === "disabled"} />
      <AlignmentSection disabled={editType === "disabled"} />
      <ListSection disabled={editType === "disabled"} />
      {editType === "element" && <LinkSection />}
      {editType === "text" && <TextFormatSection />}
    </Container>
  );
};

export default ContentControl;
