import React from "react";

import Editor from "../../src/editor";

import { render, queryByTestId } from "@testing-library/react";
import type { GneissEditor } from "../../src/editor/types";
import { getGneissEditor } from "../utils";

describe("Editor - Toolbar Modes ", () => {
  let editor: GneissEditor;
  beforeEach(() => {
    editor = getGneissEditor();
  });

  test("Hovering Toolbar is configurable and works", async () => {
    // Selection of left aligned element
    editor.selection = {
      anchor: {
        path: [2, 0],
        offset: 14,
      },
      focus: {
        path: [2, 0],
        offset: 14,
      },
    };
    const { container } = render(
      <Editor readOnly={false} onChange={() => {}} toolbarMode="hover" />
    );
    expect(queryByTestId(container, "HoveringToolbar")).toBeTruthy();
  });
  test("Top Toolbar is configurable and works", async () => {
    // Selection of left aligned element
    editor.selection = {
      anchor: {
        path: [2, 0],
        offset: 14,
      },
      focus: {
        path: [2, 0],
        offset: 14,
      },
    };
    const { container } = render(
      <Editor readOnly={false} onChange={() => {}} toolbarMode="top" />
    );
    expect(queryByTestId(container, "StaticToolbarTop")).toBeTruthy();
  });
  test("Bottom Toolbar is configurable and works", async () => {
    // Selection of left aligned element
    editor.selection = {
      anchor: {
        path: [2, 0],
        offset: 14,
      },
      focus: {
        path: [2, 0],
        offset: 14,
      },
    };
    const { container } = render(
      <Editor readOnly={false} onChange={() => {}} toolbarMode="bottom" />
    );
    expect(queryByTestId(container, "StaticToolbarBottom")).toBeTruthy();
  });
  test("No Toolbar is configurable and works", async () => {
    // Selection of left aligned element
    editor.selection = {
      anchor: {
        path: [2, 0],
        offset: 14,
      },
      focus: {
        path: [2, 0],
        offset: 14,
      },
    };
    const { container } = render(
      <Editor readOnly={false} onChange={() => {}} toolbarMode="none" />
    );
    expect(queryByTestId(container, "HoveringToolbar")).toBeFalsy();
    expect(queryByTestId(container, "StaticToolbarTop")).toBeFalsy();
    expect(queryByTestId(container, "StaticToolbarBottom")).toBeFalsy();
  });
});
