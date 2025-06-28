import { Node } from "slate";
import { EditorElement } from "../../editor/types";
import { isBlockQuoteElement, serializeBlockQuote } from "./blockquote";
import { isHeaderElement, serializeHeader } from "./header";
import { isListElement, serializeList } from "./list";
import { isParagraphElement, serializeParagraph } from "./paragraph";

const exportToMarkdown = (nodes: EditorElement[]): string => {
  return nodes.map(transformNode).join("\n");
};

const transformNode = (node: EditorElement): string => {
  if (isHeaderElement(node)) {
    return serializeHeader(node);
  }
  if (isParagraphElement(node)) {
    return serializeParagraph(node);
  }
  if (isBlockQuoteElement(node)) {
    return serializeBlockQuote(node);
  }
  if (isListElement(node)) {
    return serializeList(node, 0);
  }
  return Node.string(node);
};

export { exportToMarkdown };
