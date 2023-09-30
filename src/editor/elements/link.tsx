import styled from "styled-components";
import { RenderElementProps } from "slate-react";
import { ThemeContext } from "../theme/context";
import { useContext } from "react";
import { ThemeConfiguration } from "../theme/types";

const Link = styled.a<{ theme: ThemeConfiguration }>`
  color: ${(props) => props.theme.editor.text.link} !important;
  & * {
    color: ${(props) => props.theme.editor.text.link} !important;
  }
`;

// Put this at the start and end of an inline component to work around this Chromium bug:
// https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
const InlineChromiumBugfix = () => (
  <span contentEditable={false} style={{ fontSize: 0 }}>
    ${String.fromCodePoint(160) /* Non-breaking space */}
  </span>
);

const LinkElement = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  const { theme, type } = useContext(ThemeContext);
  const url = "url" in element ? element.url : "#";
  return (
    <Link {...attributes} href={url} theme={theme[type]}>
      <InlineChromiumBugfix />
      {children}
      <InlineChromiumBugfix />
    </Link>
  );
};

export default LinkElement;

export { InlineChromiumBugfix };
