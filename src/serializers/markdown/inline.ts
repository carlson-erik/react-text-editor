import { Node } from "slate";
import {
  EditorElement,
  InlineElement,
  LinkInlineElement,
  TextLeaf,
} from "../../editor/types";

const isInlineElement = (
  node: EditorElement | TextLeaf
): node is InlineElement => {
  return (
    ("type" in node && node.type === "link" && !!node.url) || "text" in node
  );
};

const isLinkInlineElement = (
  node: EditorElement | TextLeaf
): node is LinkInlineElement => {
  return "type" in node && node.type === "link" && "url" in node;
};

const serializeLinkInlineElement = (node: LinkInlineElement) => {
  const { url } = node;
  return `[${Node.string(node)}](${url})`;
};

const serializeInlineText = (
  node: InlineElement,
  inlineStyleSupport?: boolean
): string => {
  if (isLinkInlineElement(node)) return serializeLinkInlineElement(node);
  let inlineText = Node.string(node);
  if (inlineStyleSupport) {
    if (node.bold) {
      inlineText = `**${inlineText}**`;
    }
    if (node.italics) {
      inlineText = `_${inlineText}_`;
    }
    if (node.strikethrough) {
      // Markdown doesn't support strikethrough :(
    }
    if (node.underline) {
      // Markdown doesn't support underline :(
    }
  }
  return inlineText;
};

export {
  isLinkInlineElement,
  serializeLinkInlineElement,
  serializeInlineText,
  isInlineElement,
};
