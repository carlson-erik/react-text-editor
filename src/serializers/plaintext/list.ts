import { Node } from "slate";
import { EditorElement, ListElement } from "../../editor/types";

const isListElement = (element: EditorElement): element is ListElement => {
  return element.type === "bulleted-list" || element.type === "ordered-list";
};

const getListItemText = (
  parentElement: EditorElement,
  element: EditorElement,
  listIndex: number,
  depth: number
): string => {
  return parentElement.type === "ordered-list"
    ? `${"\t".repeat(depth)}${listIndex + 1}. ${Node.string(element)}`
    : `${"\t".repeat(depth)}- ${Node.string(element)}`;
};

const getOrderedIndex = (
  nodes: EditorElement[],
  node: EditorElement
): number => {
  let listIndex = 0;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] !== node && !isListElement(nodes[i])) {
      listIndex++;
    } else if (isListElement(nodes[i])) {
      continue;
    } else {
      break;
    }
  }
  return listIndex;
};

export { isListElement, getListItemText, getOrderedIndex };
