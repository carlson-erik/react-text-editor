import { useContext, useState, useEffect } from "react";
import { useSlate, ReactEditor } from "slate-react";
import styled from "styled-components";
import { Range } from "slate";

import ContentControl from "./content-control";
import { ThemeContext } from "../theme/context";
import { ThemeConfiguration } from "../theme/types";

const Menu = styled.div<{ theme: ThemeConfiguration }>`
  padding: 4px;
  background-color: ${(props) => props.theme.toolbar.background.primary};
  border: 1px solid ${(props) => props.theme.toolbar.border};
  position: absolute;
  z-index: 5;
  top: -10000px;
  left: -10000px;
  margin-top: -6px;
  opacity: 0;
  border-radius: 2px;
  transition: opacity 0.25s;
  display: flex;
  align-items: center;
`;

interface HoveringToolbarProps {
  containerRef: HTMLElement;
}

const HoveringToolbar = (props: HoveringToolbarProps) => {
  const { containerRef } = props;
  const { theme, type } = useContext(ThemeContext);
  const [ref, setRef] = useState<HTMLDivElement | null>();
  const [editType, setEditType] = useState<"text" | "element" | "hidden">(
    "hidden"
  );
  const editor = useSlate();

  const handleOutsideClick = (event: any) => {
    if (containerRef && !containerRef.contains(event.target) && ref) {
      setEditType("hidden");
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
  }, [containerRef, ref]);

  useEffect(() => {
    const el = ref;
    const { selection } = editor;

    /**
     * Hide the toolbar if:
     *  - there's no editor container ref element
     *  - no selection within the editor
     *  - the editor has lost focus
     */
    if (!el || !selection || !ReactEditor.isFocused(editor)) {
      setEditType("hidden");
      if (ref) ref.style.opacity = "0";
      return;
    } else if (Range.isCollapsed(selection)) {
      setEditType("element");
    } else {
      setEditType("text");
    }

    const domSelection = window.getSelection();
    if (el && domSelection) {
      const domRange = domSelection.getRangeAt(0);
      const rect = domRange.getBoundingClientRect();
      el.style.opacity = "1";
      el.style.top = `${rect.top + window.scrollY - el.offsetHeight}px`;
      el.style.left = `${
        rect.left + window.scrollX - el.offsetWidth / 2 + rect.width / 2
      }px`;
    }
  });

  return (
    <Menu
      ref={setRef}
      className="hovering-toolbar"
      data-testid="HoveringToolbar"
      theme={theme[type]}
    >
      <ContentControl editType={editType} />
    </Menu>
  );
};

export default HoveringToolbar;
