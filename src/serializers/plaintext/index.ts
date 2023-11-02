import { Node } from "slate";
import { ElasticElement } from "../../editor/types";
import { getListItemText, getOrderedIndex, isListElement } from "./list";

export type PlaintextNode = string | string[];

const serializeToPlaintextNodes = (
  nodes: ElasticElement[],
  depth: number
): PlaintextNode[] => {
  return nodes.map((node: ElasticElement) => {
    switch (node.type) {
      case "block-quote":
        return `\n"${Node.string(node)}"\n`;
      case "ordered-list":
      case "bulleted-list":
        // Convert all children into usable Plaintext
        return node.children
          .map((listItem) => {
            if (isListElement(listItem)) {
              // Recurses into Sublist
              return serializeToPlaintextNodes([listItem], depth + 1);
            } else {
              // Generates text for this List Item
              return getListItemText(
                node,
                listItem,
                getOrderedIndex(node.children, listItem),
                depth + 1
              );
            }
          })
          .join("\n");
      default:
        return Node.string(node);
    }
  });
};

const convertNodesToPlaintext = (nodes: PlaintextNode[]): string => {
  let plainText = "";
  nodes.forEach((node) => {
    if (Array.isArray(node)) {
      plainText += convertNodesToPlaintext(node);
    } else {
      plainText += `${node}\n`;
    }
  });
  return plainText;
};

const exportToPlaintext = (nodes: ElasticElement[]): string => {
  return convertNodesToPlaintext(serializeToPlaintextNodes(nodes, 0));
};

export { exportToPlaintext };
