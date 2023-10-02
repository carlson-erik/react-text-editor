import { useContext, useEffect, useState } from "react";
import { Range } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import { ThemeContext } from "../theme/context";
import ContentControl from "./content-control";
import { styled } from "styled-components";
import { ThemeConfiguration } from "../theme/types";

const StaticToolbarContainer = styled.div<{
  theme: ThemeConfiguration;
  location: "bottom" | "top";
}>`
  display: flex;
  height: 34px;
  border: 1px solid ${(props) => props.theme.toolbar.border};
  ${(props) =>
    props.location === "top" ? "margin-bottom: 0.5rem;" : "margin-top: 0.5rem;"}

  & .dropdown {
    border: 0;
  }
`;

interface StaticToolbarProps {
  containerRef: HTMLElement;
  location: "bottom" | "top";
}

const StaticToolbar = (props: StaticToolbarProps) => {
  const { containerRef, location } = props;
  const { theme, type } = useContext(ThemeContext);
  const [editType, setEditType] = useState<
    "text" | "element" | "hidden" | "disabled"
  >("disabled");
  const editor = useSlate();
  const className = location === "top" ? "top-toolbar" : "bottom-toolbar";

  const handleOutsideClick = (event: any) => {
    if (containerRef && !containerRef.contains(event.target)) {
      setEditType("disabled");
    }
  };

  useEffect(() => {
    // remove existing
    document.removeEventListener("mousedown", handleOutsideClick);
    // listen for clicks and close dropdown on body
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef]);

  useEffect(() => {
    const { selection } = editor;

    /**
     * Hide the toolbar if:
     *  - no selection within the editor
     *  - the editor has lost focus
     */
    if (!selection || !ReactEditor.isFocused(editor)) {
      setEditType("disabled");
    } else if (Range.isCollapsed(selection)) {
      setEditType("element");
    } else {
      setEditType("text");
    }
  });

  return (
    <StaticToolbarContainer
      className={className}
      theme={theme[type]}
      location={location}
      data-testid={
        location === "top" ? "StaticToolbarTop" : "StaticToolbarBottom"
      }
    >
      <ContentControl editType={editType} />
    </StaticToolbarContainer>
  );
};

export default StaticToolbar;
