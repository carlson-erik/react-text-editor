import { ElasticElement, InlineElement, ListElement } from "../../editor/types";
import { getOrderedIndex } from "../plaintext/list";
import { serializeInlineText } from "./inline";

const isListElement = (node: ElasticElement): node is ListElement => {
  return ["ordered-list", "bulleted-list"].includes(node.type);
};

export const LIST_PADDING = "   ";

const getListItemText = (
  parentElement: ElasticElement,
  element: ElasticElement,
  listIndex: number,
  depth: number
): string => {
  const itemText = element.children
    .map((textNode) => serializeInlineText(textNode as InlineElement, true))
    .join("");
  return parentElement.type === "ordered-list"
    ? `${LIST_PADDING.repeat(depth)}${listIndex + 1}. ${itemText}`
    : `${LIST_PADDING.repeat(depth)}- ${itemText}`;
};

const serializeList = (node: ListElement, depth: number): string => {
  const { children } = node;
  const markdown = children.map((listItemNode) => {
    if (isListElement(listItemNode)) {
      return serializeList(listItemNode, depth + 1);
    } else {
      return getListItemText(
        node,
        listItemNode,
        getOrderedIndex(node.children, listItemNode),
        depth + 1
      );
    }
  });
  return markdown.join("\n");
};

export { serializeList, isListElement, getListItemText };
