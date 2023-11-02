import { ElasticElement, HeaderElement } from "../../editor/types";
import { serializeInlineText } from "./inline";

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
  const headerText = node.children
    .map((textNode) => serializeInlineText(textNode))
    .join("");
  switch (type) {
    case "header-one":
      return `# ${headerText}`;
    case "header-two":
      return `## ${headerText}`;
    case "header-three":
      return `### ${headerText}`;
    case "header-four":
      return `#### ${headerText}`;
    case "header-five":
      return `##### ${headerText}`;
    case "header-six":
      return `###### ${headerText}`;
  }
};

export { serializeHeader, isHeaderElement };
