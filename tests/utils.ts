import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";

import { withInlines } from "../src/editor/actions";
import { CustomEditor } from "../src/editor/types";

const getCustomEditor = (): CustomEditor => {
  return withInlines(withHistory(withReact(createEditor())));
};

export { getCustomEditor };
