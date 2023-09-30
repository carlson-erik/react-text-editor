import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";

import { withInlines } from "../src/editor/actions";
import { GraniteEditor } from "../src/editor/types";

const getGraniteEditor = (): GraniteEditor => {
  return withInlines(withHistory(withReact(createEditor())));
};

export { getGraniteEditor };
