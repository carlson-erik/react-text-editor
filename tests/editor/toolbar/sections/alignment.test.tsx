import React from "react";
import { Slate } from "slate-react";
import { getByTestId, queryByTestId, render } from "@testing-library/react";

import AlignmentSection from "../../../../src/editor/toolbar/sections/alignment";
import { LOREM_IPSUM } from "../../../../stories/mocks/content";
import { getCustomEditor } from "../../../utils";
import userEvent from "@testing-library/user-event";
import type { CustomEditor } from "../../../../src/editor/types";

describe("Alignment Toolbar Section ", () => {
  let editor: CustomEditor;
  beforeEach(() => {
    editor = getCustomEditor();
  });

  test("Left Alignment is active for Left aligned text and handles change to Justify alignment", async () => {
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
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LOREM_IPSUM} onChange={() => {}}>
        <AlignmentSection />
      </Slate>
    );

    // Expect LeftAignmentButton to be active
    expect(queryByTestId(container, "LeftAlignmentButton-active")).toBeTruthy();
    expect(queryByTestId(container, "CenterAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "RightAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "JustifyAlignmentButton")).toBeTruthy();

    // Click on the JustifyAlginmentButton
    userEvent.click(getByTestId(container, "JustifyAlignmentButton"));

    rerender(
      <Slate editor={editor} initialValue={LOREM_IPSUM} onChange={() => {}}>
        <AlignmentSection />
      </Slate>
    );

    // Expect JustifyAlginmentButton to be active
    expect(queryByTestId(container, "LeftAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "CenterAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "RightAlignmentButton")).toBeTruthy();
    expect(
      queryByTestId(container, "JustifyAlignmentButton-active")
    ).toBeTruthy();
  });

  test("Center Alignment is active for Center aligned text and handles change to Left alignment", async () => {
    // Selection of center aligned element
    editor.selection = {
      anchor: {
        path: [3, 0],
        offset: 13,
      },
      focus: {
        path: [3, 0],
        offset: 13,
      },
    };
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LOREM_IPSUM} onChange={() => {}}>
        <AlignmentSection />
      </Slate>
    );

    // Expect CenterAlignmentButton to be active
    expect(queryByTestId(container, "LeftAlignmentButton")).toBeTruthy();
    expect(
      queryByTestId(container, "CenterAlignmentButton-active")
    ).toBeTruthy();
    expect(queryByTestId(container, "RightAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "JustifyAlignmentButton")).toBeTruthy();

    // Click on the LeftAlignmentButton
    userEvent.click(getByTestId(container, "LeftAlignmentButton"));

    rerender(
      <Slate editor={editor} initialValue={LOREM_IPSUM} onChange={() => {}}>
        <AlignmentSection />
      </Slate>
    );

    // Expect LeftAlginmentButton to be active
    expect(queryByTestId(container, "LeftAlignmentButton-active")).toBeTruthy();
    expect(queryByTestId(container, "CenterAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "RightAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "JustifyAlignmentButton")).toBeTruthy();
  });

  test("Right Alignment is active for Right aligned text and handles change to Center alignment", async () => {
    // Selection of right aligned element
    editor.selection = {
      anchor: {
        path: [5, 0],
        offset: 19,
      },
      focus: {
        path: [5, 0],
        offset: 19,
      },
    };
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LOREM_IPSUM} onChange={() => {}}>
        <AlignmentSection />
      </Slate>
    );

    // Expect RightAlignmentButton to be active
    expect(queryByTestId(container, "LeftAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "CenterAlignmentButton")).toBeTruthy();
    expect(
      queryByTestId(container, "RightAlignmentButton-active")
    ).toBeTruthy();
    expect(queryByTestId(container, "JustifyAlignmentButton")).toBeTruthy();

    // Click on the CenterAlignmentButton
    userEvent.click(getByTestId(container, "CenterAlignmentButton"));

    rerender(
      <Slate editor={editor} initialValue={LOREM_IPSUM} onChange={() => {}}>
        <AlignmentSection />
      </Slate>
    );

    // Expect CenterAlignmentButton to be active
    expect(queryByTestId(container, "LeftAlignmentButton")).toBeTruthy();
    expect(
      queryByTestId(container, "CenterAlignmentButton-active")
    ).toBeTruthy();
    expect(queryByTestId(container, "RightAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "JustifyAlignmentButton")).toBeTruthy();
  });

  test("Justify Alignment is active for justify aligned text and handles change to Right alignment", async () => {
    // Selection of justify aligned element
    editor.selection = {
      anchor: {
        path: [6, 0],
        offset: 22,
      },
      focus: {
        path: [6, 0],
        offset: 22,
      },
    };
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LOREM_IPSUM} onChange={() => {}}>
        <AlignmentSection />
      </Slate>
    );

    // Expect JustifyAlignmentButton to be active
    expect(queryByTestId(container, "LeftAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "CenterAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "RightAlignmentButton")).toBeTruthy();
    expect(
      queryByTestId(container, "JustifyAlignmentButton-active")
    ).toBeTruthy();

    // Click on the RightAlignmentButton
    userEvent.click(getByTestId(container, "RightAlignmentButton"));

    rerender(
      <Slate editor={editor} initialValue={LOREM_IPSUM} onChange={() => {}}>
        <AlignmentSection />
      </Slate>
    );

    // Expect RightAlignmentButton to be active
    expect(queryByTestId(container, "LeftAlignmentButton")).toBeTruthy();
    expect(queryByTestId(container, "CenterAlignmentButton")).toBeTruthy();
    expect(
      queryByTestId(container, "RightAlignmentButton-active")
    ).toBeTruthy();
    expect(queryByTestId(container, "JustifyAlignmentButton")).toBeTruthy();
  });
});
