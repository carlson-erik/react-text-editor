import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";

import { withInlines } from "../src/editor/actions";
import { GneissEditor } from "../src/editor/types";

const getGneissEditor = (): GneissEditor => {
  return withInlines(withHistory(withReact(createEditor())));
};

export { getGneissEditor };
