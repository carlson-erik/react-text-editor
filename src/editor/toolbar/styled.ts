import styled from "styled-components";
import { ThemeConfiguration } from "../theme/types";

const ToolbarIcon = styled.svg<{ size: "small" | "large" }>`
  height: ${(props) => (props.size === "large" ? "24" : "16")}px;
  width: ${(props) => (props.size === "large" ? "24" : "16")}px;
`;

const SectionContainer = styled.div<{
  noSeparator?: boolean;
  disabled?: boolean;
  theme: ThemeConfiguration;
}>`
  width: fit-content;
  height: fit-content;
  border-right: ${(props) =>
    props.noSeparator
      ? "0px solid transparent"
      : `1px solid ${props.theme.toolbar.border}`};
  display: flex;
  align-items: center;
`;

export { ToolbarIcon, SectionContainer };
