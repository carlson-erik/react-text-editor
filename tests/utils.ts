import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";

import { withInlines } from "../src/editor/actions";
import { ElasticEditor } from "../src/editor/types";

const getElasticEditor = (): ElasticEditor => {
  return withInlines(withHistory(withReact(createEditor())));
};

export { getElasticEditor };
