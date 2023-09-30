import { Path, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import {
  CustomEditor,
  ElementType,
  InlineElementType,
  ListElement,
  ListElementType,
  TextElementType,
  TextLeaf,
} from "../types";

const isListElementType = (
  elementType: ElementType
): elementType is ListElementType => {
  return elementType === "ordered-list" || elementType === "bulleted-list";
};

const isTextElementType = (
  elementType: ElementType
): elementType is TextElementType => {
  switch (elementType) {
    case "header-one":
    case "header-two":
    case "header-three":
    case "header-four":
    case "header-five":
    case "header-six":
    case "paragraph":
    case "link":
      return true;
    default:
      return false;
  }
};

const isInlineElementType = (
  elementType: ElementType
): elementType is InlineElementType => {
  return elementType === "link";
};

const collectAllTextLeaves = (listElement: ListElement): TextLeaf[] => {
  const listOfLeaves: TextLeaf[] = [];
  const { children } = listElement;

  for (let index = 0; index < children.length; index++) {
    const element = children[index];
    if (element.type === "ordered-list" || element.type === "bulleted-list") {
      listOfLeaves.push(...collectAllTextLeaves(element));
    } else {
      // list-item things
      listOfLeaves.push(...(element.children as TextLeaf[]));
    }
  }

  return listOfLeaves;
};

const focusPath = (
  editor: CustomEditor,
  focusPath: Path,
  offset?: number
): void => {
  Transforms.select(editor, {
    anchor: {
      path: focusPath,
      offset: offset || 0,
    },
    focus: {
      path: focusPath,
      offset: offset || 0,
    },
  });
};

export {
  isListElementType,
  isInlineElementType,
  isTextElementType,
  collectAllTextLeaves,
  focusPath,
};
