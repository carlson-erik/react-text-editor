import { BlockQuoteElement, EditorElement } from "../../editor/types";
import { serializeInlineText } from "./inline";

const isBlockQuoteElement = (
  node: EditorElement
): node is BlockQuoteElement => {
  return node.type === "block-quote";
};

const serializeBlockQuote = (node: BlockQuoteElement): string => {
  const blockQuoteText = node.children
    .map((textNode) => serializeInlineText(textNode))
    .join("");
  return `\n>"${blockQuoteText}"\n`;
};

export { serializeBlockQuote, isBlockQuoteElement };
