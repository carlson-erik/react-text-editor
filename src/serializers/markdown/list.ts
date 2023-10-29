import { Node } from "slate";
import { ElasticElement, ListElement } from "../../editor/types";
import { getOrderedIndex } from "../plaintext/list";

const isListElement = (node: ElasticElement): node is ListElement => {
  return ["ordered-list", "bulleted-list"].includes(node.type);
};

const getListItemText = (
  parentElement: ElasticElement,
  element: ElasticElement,
  listIndex: number,
  depth: number
): string => {
  return parentElement.type === "ordered-list"
    ? `${"   ".repeat(depth)}${listIndex + 1}. ${Node.string(element)}`
    : `${"   ".repeat(depth)}- ${Node.string(element)}`;
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

export { serializeList, isListElement };
