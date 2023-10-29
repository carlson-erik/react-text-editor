import { Node } from "slate";
import { ElasticElement, ListElement } from "../../editor/types";

const isBlockQuoteElement = (node: ElasticElement): node is ListElement => {
  return node.type === "block-quote";
};

const serializeBlockQuote = (node: ListElement): string => {
  return `\n>"${Node.string(node)}"\n`;
};

export { serializeBlockQuote, isBlockQuoteElement };
