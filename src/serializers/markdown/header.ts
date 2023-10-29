import { Node } from "slate";
import { ElasticElement, HeaderElement } from "../../editor/types";

const isHeaderElement = (node: ElasticElement): node is HeaderElement => {
  return [
    "header-one",
    "header-two",
    "header-three",
    "header-four",
    "header-five",
    "header-six",
  ].includes(node.type);
};

const serializeHeader = (node: HeaderElement): string => {
  const { type } = node;
  switch (type) {
    case "header-one":
      return `# ${Node.string(node)}`;
    case "header-two":
      return `## ${Node.string(node)}`;
    case "header-three":
      return `### ${Node.string(node)}`;
    case "header-four":
      return `#### ${Node.string(node)}`;
    case "header-five":
      return `##### ${Node.string(node)}`;
    case "header-six":
      return `###### ${Node.string(node)}`;
  }
};

export { serializeHeader, isHeaderElement };
