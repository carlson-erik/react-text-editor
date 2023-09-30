import React from "react";
import { Slate } from "slate-react";
import { getByTestId, queryByTestId, render } from "@testing-library/react";

import ListSection from "../../../../src/editor/toolbar/sections/lists";
import { LIST_EXAMPLES } from "../../../../stories/mocks/content";
import { getCustomEditor } from "../../../utils";
import userEvent from "@testing-library/user-event";
import type { CustomEditor } from "../../../../src/editor/types";

describe("Lists Toolbar Section ", () => {
  let editor: CustomEditor;
  beforeEach(() => {
    editor = getCustomEditor();
  });

  test("Ordered List Button is active for an Ordered List selection and handles changing the list to a Bulleted List", async () => {
    // Selection of List Item in an Ordered List
    editor.selection = {
      anchor: {
        path: [7, 0, 0],
        offset: 8,
      },
      focus: {
        path: [7, 0, 0],
        offset: 8,
      },
    };

    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect OrderedListButton to be active
    expect(queryByTestId(container, "OrderedListButton-active")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton")).toBeTruthy();

    // Click on BulletedListButton
    userEvent.click(getByTestId(container, "BulletedListButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect BulletedListButton to be active
    expect(queryByTestId(container, "OrderedListButton")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton-active")).toBeTruthy();
  });

  test("Bulleted List Button is active for an Bulleted List selection and handles changing the list to a Ordered List", async () => {
    // Selection of List Item in an Bulleted List
    editor.selection = {
      anchor: {
        path: [13, 0, 0],
        offset: 3,
      },
      focus: {
        path: [13, 0, 0],
        offset: 3,
      },
    };
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect BulletedListButton to be active
    expect(queryByTestId(container, "OrderedListButton")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton-active")).toBeTruthy();

    // Click on OrderedListButton
    userEvent.click(getByTestId(container, "OrderedListButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect OrderedListButton to be active
    expect(queryByTestId(container, "OrderedListButton-active")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton")).toBeTruthy();
  });

  test("A list with only one List Item doesn't allow for the List Item to be indented or outdented", () => {
    editor.selection = {
      anchor: {
        path: [4, 0, 0],
        offset: 8,
      },
      focus: {
        path: [4, 0, 0],
        offset: 8,
      },
    };

    const { container } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect OrderedListButton to be active
    expect(queryByTestId(container, "OrderedListButton-active")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton")).toBeTruthy();

    // Expect Outdent and Indent buttons to be disabled
    expect(queryByTestId(container, "OutdentButton-disabled")).toBeTruthy();
    expect(queryByTestId(container, "IndentButton-disabled")).toBeTruthy();
  });

  test("First List Items in any List can't be indented", () => {
    editor.selection = {
      anchor: {
        path: [10, 0, 0],
        offset: 5,
      },
      focus: {
        path: [10, 0, 0],
        offset: 5,
      },
    };

    const { container } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect OrderedListButton to be active
    expect(queryByTestId(container, "OrderedListButton")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton-active")).toBeTruthy();

    // Expect Outdent and Indent buttons to be disabled
    expect(queryByTestId(container, "OutdentButton-disabled")).toBeTruthy();
    expect(queryByTestId(container, "IndentButton-disabled")).toBeTruthy();
  });

  test("Subsequent List Items in a List can be indented", () => {
    editor.selection = {
      anchor: {
        path: [10, 1, 0],
        offset: 8,
      },
      focus: {
        path: [10, 1, 0],
        offset: 8,
      },
    };

    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect BulletedListButton to be active
    expect(queryByTestId(container, "OrderedListButton")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton-active")).toBeTruthy();

    // Expect Outdent to be disabled and Indent should be clickable
    expect(queryByTestId(container, "OutdentButton-disabled")).toBeTruthy();
    expect(queryByTestId(container, "IndentButton")).toBeTruthy();

    // Click on IndentButton
    userEvent.click(getByTestId(container, "IndentButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect BulletedListButton to be active
    expect(queryByTestId(container, "OrderedListButton")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton-active")).toBeTruthy();

    // Expect Indent to be Disabled and Outdent should be clickable
    expect(queryByTestId(container, "OutdentButton")).toBeTruthy();
    expect(queryByTestId(container, "IndentButton-disabled")).toBeTruthy();
  });

  test("Subsequent List Items in a List can be outdented if the List is within a List", () => {
    editor.selection = {
      anchor: {
        path: [13, 2, 1, 0, 0],
        offset: 4,
      },
      focus: {
        path: [13, 2, 1, 0, 0],
        offset: 4,
      },
    };

    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect BulletedListButton to be active
    expect(queryByTestId(container, "OrderedListButton")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton-active")).toBeTruthy();

    // Expect Indent to be disabled and Outdent should be clickable
    expect(queryByTestId(container, "OutdentButton")).toBeTruthy();
    expect(queryByTestId(container, "IndentButton-disabled")).toBeTruthy();

    // Click on OutdentButton
    userEvent.click(getByTestId(container, "OutdentButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <ListSection />
      </Slate>
    );

    // Expect OrderedListButton to be active
    expect(queryByTestId(container, "OrderedListButton-active")).toBeTruthy();
    expect(queryByTestId(container, "BulletedListButton")).toBeTruthy();

    // Expect Indent and Outdent to be clickable
    expect(queryByTestId(container, "OutdentButton")).toBeTruthy();
    expect(queryByTestId(container, "IndentButton")).toBeTruthy();
  });
});
