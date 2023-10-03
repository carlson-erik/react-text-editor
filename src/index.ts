/* -------- Types -------- */
import type { Theme } from "./editor/theme/types";
import type { GraniteProps } from "./Granite";
import { Descendant } from "slate";
/* -------- Enums -------- */
import { ThemeTypes } from "./editor/theme/types";
/* -------- Components -------- */
import Granite from "./Granite";

export { Granite, ThemeTypes };

export * from "./editor/types";
export * from "./editor/theme/types";
export type { GraniteProps, Theme, Descendant };
