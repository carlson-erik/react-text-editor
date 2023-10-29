import { Node } from "slate";
import { ElasticElement, ParagraphElement } from "../../editor/types";

const isParagraphElement = (node: ElasticElement): node is ParagraphElement => {
  return node.type === "paragraph";
};

const serializeParagraph = (node: ParagraphElement): string => {
  return Node.string(node);
};

export { serializeParagraph, isParagraphElement };
