import { ElasticElement, ParagraphElement } from "../../editor/types";
import { serializeInlineText } from "./inline";

const isParagraphElement = (node: ElasticElement): node is ParagraphElement => {
  return node.type === "paragraph";
};

const serializeParagraph = (node: ParagraphElement): string => {
  const paragraphText = node.children
    .map((textNode) => serializeInlineText(textNode, true))
    .join("");
  return `${paragraphText}${paragraphText.length > 0 ? "\n" : ""}`;
};

export { serializeParagraph, isParagraphElement };
