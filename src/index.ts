/* -------- Types -------- */
import type { Theme } from "./editor/theme/types";
import type { ElasticEditorProps } from "./ElasticEditor";
import { Descendant } from "slate";
/* -------- Enums -------- */
import { ThemeTypes } from "./editor/theme/types";
/* -------- Components -------- */
import ElasticEditor from "./ElasticEditor";

export { ElasticEditor, ThemeTypes };

export * from "./editor/types";
export * from "./editor/theme/types";
export type { ElasticEditorProps, Theme, Descendant };
