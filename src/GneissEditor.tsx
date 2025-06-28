/* -------- Types -------- */
import type { Theme, ThemeTypes } from "./editor/theme/types";
/* -------- Components -------- */
import Editor, { EditorProps } from "./editor";
/* -------- Contexts & Providers -------- */
import { ThemeProvider } from "./editor/theme/context";
import { ElasticElement } from "./editor/types";

export type GneissEditorProps = {
  /** Switches editor between editing (false) and read only (true) modes. */
  readOnly: boolean;
  /** onChange function that fires whenever there's a change in the editor's content. */
  onChange: (content: ElasticElement[]) => void;
  /** Determines toolbar type and location  */
  toolbarMode: EditorProps["toolbarMode"];
  /** Initial editor content */
  initialContent?: ElasticElement[];
  theme?: Theme;
  /** Enables witching between Light/Dark themes */
  themeType?: ThemeTypes;
};

const GneissEditor = (props: GneissEditorProps) => {
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

export default GneissEditor;
