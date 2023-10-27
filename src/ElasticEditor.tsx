/* -------- Types -------- */
import type { Theme, ThemeTypes } from "./editor/theme/types";
import type { Descendant } from "slate";
/* -------- Components -------- */
import Editor, { EditorProps } from "./editor";
/* -------- Contexts & Providers -------- */
import { ThemeProvider } from "./editor/theme/context";

export type ElasticEditorProps = {
  /** Switches editor between editing (false) and read only (true) modes. */
  readOnly: boolean;
  /** onChange function that fires whenever there's a change in the editor's content. */
  onChange: (content: Descendant[]) => void;
  /** Determines toolbar type and location  */
  toolbarMode: EditorProps["toolbarMode"];
  /** Initial editor content */
  initialContent?: Descendant[];
  theme?: Theme;
  /** Enables witching between Light/Dark themes */
  themeType?: ThemeTypes;
};

const ElasticEditor = (props: ElasticEditorProps) => {
  const { readOnly, initialContent, theme, themeType, toolbarMode, onChange } =
    props;
  return (
    <ThemeProvider theme={theme} type={themeType}>
      <Editor
        readOnly={readOnly}
        initialContent={initialContent}
        toolbarMode={toolbarMode}
        onChange={onChange}
      />
    </ThemeProvider>
  );
};

export default ElasticEditor;
