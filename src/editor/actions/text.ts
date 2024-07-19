import { Editor, Transforms, Node, Text } from "slate";
import { ReactTextEditor, TextFormat } from "../types";

const isTextFormatActive = (
  editor: ReactTextEditor,
  textFormat: TextFormat
) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => Text.isText(n) && n[textFormat] === true,
    mode: "all",
  });
  return !!match;
};

const toggleTextFormat = (editor: ReactTextEditor, textFormat: TextFormat) => {
  const isActive = isTextFormatActive(editor, textFormat);
  Transforms.setNodes(
    editor,
    { [textFormat]: isActive ? null : true },
    { match: Text.isText, split: true }
  );
};

const setTextColor = (editor: ReactTextEditor, color: string) => {
  Transforms.setNodes(
    editor,
    { textcolor: color },
    { match: (t) => Text.isText(t), split: true }
  );
};

const getActiveTextColor = (editor: ReactTextEditor): string => {
  const path = editor.selection?.anchor.path;
  if (path) {
    const currLeaf = Node.leaf(editor, path);
    if (currLeaf.textcolor) return currLeaf.textcolor;
  }
  return "PRIMARY";
};

export {
  isTextFormatActive,
  toggleTextFormat,
  setTextColor,
  getActiveTextColor,
};
