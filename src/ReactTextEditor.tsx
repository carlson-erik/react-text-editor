/* -------- Types -------- */
import type { Theme, ThemeTypes } from "./editor/theme/types";
/* -------- Components -------- */
import Editor, { EditorProps } from "./editor";
/* -------- Contexts & Providers -------- */
import { ThemeProvider } from "./editor/theme/context";
import { EditorElement } from "./editor/types";

export type ReactTextEditorProps = {
  /** Switches editor between editing (false) and read only (true) modes. */
  readOnly: boolean;
  /** onChange function that fires whenever there's a change in the editor's content. */
  onChange: (content: EditorElement[]) => void;
  /** Determines toolbar type and location  */
  toolbarMode: EditorProps["toolbarMode"];
  /** Initial editor content */
  initialContent?: EditorElement[];
  theme?: Theme;
  /** Enables witching between Light/Dark themes */
  themeType?: ThemeTypes;
};

const ReactTextEditor = (props: ReactTextEditorProps) => {
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

export default ReactTextEditor;
