import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";

import { withInlines } from "../src/editor/actions";
import { ReactTextEditor } from "../src/editor/types";

const getReactTextEditor = (): ReactTextEditor => {
  return withInlines(withHistory(withReact(createEditor())));
};

export { getReactTextEditor };
