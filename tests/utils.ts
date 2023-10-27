import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";

import { withInlines } from "../src/editor/actions";
import { ElasticEditorEditor } from "../src/editor/types";

const getElasticEditorEditor = (): ElasticEditorEditor => {
  return withInlines(withHistory(withReact(createEditor())));
};

export { getElasticEditorEditor };
