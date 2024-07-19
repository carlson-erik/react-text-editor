import React from "react";
import { Slate } from "slate-react";
import { ReactTextEditor } from "../../../../../src/editor/types";
import { LIST_EXAMPLES } from "../../../../../stories/mocks/content";
import { getReactTextEditor } from "../../../../utils";
import { getByTestId, queryByTestId, render } from "@testing-library/react";
import TextFormatSection from "../../../../../src/editor/toolbar/sections/text/format";
import userEvent from "@testing-library/user-event";

const mockTextRangeSelection = {
  anchor: {
    path: [1, 2],
    offset: 170,
  },
  focus: {
    path: [1, 2],
    offset: 206,
  },
};

describe("Text Format Toolbar Section ", () => {
  let editor: ReactTextEditor;
  beforeEach(() => {
    editor = getReactTextEditor();
  });

  test("Selecting Text Range and clicking the Bold button will bold the text.", () => {
    editor.selection = mockTextRangeSelection;
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextFormatSection />
      </Slate>
    );

    // Expect all buttons to be clickable
    expect(queryByTestId(container, "BoldButton")).toBeTruthy();
    expect(queryByTestId(container, "ItalicsButton")).toBeTruthy();
    expect(queryByTestId(container, "UnderlineButton")).toBeTruthy();
    expect(queryByTestId(container, "StrikethroughButton")).toBeTruthy();

    // Click on the BoldButton
    userEvent.click(getByTestId(container, "BoldButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextFormatSection />
      </Slate>
    );

    //Expect BoldButton to be active
    expect(queryByTestId(container, "BoldButton-active")).toBeTruthy();
    expect(queryByTestId(container, "ItalicsButton")).toBeTruthy();
    expect(queryByTestId(container, "UnderlineButton")).toBeTruthy();
    expect(queryByTestId(container, "StrikethroughButton")).toBeTruthy();
  });
  test("Selecting Text Range and clicking the Italics button will italicize the text", () => {
    editor.selection = mockTextRangeSelection;
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextFormatSection />
      </Slate>
    );

    // Expect all buttons to be clickable
    expect(queryByTestId(container, "BoldButton")).toBeTruthy();
    expect(queryByTestId(container, "ItalicsButton")).toBeTruthy();
    expect(queryByTestId(container, "UnderlineButton")).toBeTruthy();
    expect(queryByTestId(container, "StrikethroughButton")).toBeTruthy();

    // Click on the ItalicsButton
    userEvent.click(getByTestId(container, "ItalicsButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextFormatSection />
      </Slate>
    );

    //Expect ItalicsButton to be active
    expect(queryByTestId(container, "BoldButton")).toBeTruthy();
    expect(queryByTestId(container, "ItalicsButton-active")).toBeTruthy();
    expect(queryByTestId(container, "UnderlineButton")).toBeTruthy();
    expect(queryByTestId(container, "StrikethroughButton")).toBeTruthy();
  });
  test("Selecting Text Range and clicking the Underline button will underline the text", () => {
    editor.selection = mockTextRangeSelection;
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextFormatSection />
      </Slate>
    );

    // Expect all buttons to be clickable
    expect(queryByTestId(container, "BoldButton")).toBeTruthy();
    expect(queryByTestId(container, "ItalicsButton")).toBeTruthy();
    expect(queryByTestId(container, "UnderlineButton")).toBeTruthy();
    expect(queryByTestId(container, "StrikethroughButton")).toBeTruthy();

    // Click on the UnderlineButton
    userEvent.click(getByTestId(container, "UnderlineButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextFormatSection />
      </Slate>
    );

    //Expect UnderlineButton to be active
    expect(queryByTestId(container, "BoldButton")).toBeTruthy();
    expect(queryByTestId(container, "ItalicsButton")).toBeTruthy();
    expect(queryByTestId(container, "UnderlineButton-active")).toBeTruthy();
    expect(queryByTestId(container, "StrikethroughButton")).toBeTruthy();
  });
  test("Selecting Text Range and clicking the Strikethrough button will strikethrough the text", () => {
    editor.selection = mockTextRangeSelection;
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextFormatSection />
      </Slate>
    );

    // Expect all buttons to be clickable
    expect(queryByTestId(container, "BoldButton")).toBeTruthy();
    expect(queryByTestId(container, "ItalicsButton")).toBeTruthy();
    expect(queryByTestId(container, "UnderlineButton")).toBeTruthy();
    expect(queryByTestId(container, "StrikethroughButton")).toBeTruthy();

    // Click on the StrikethroughButton
    userEvent.click(getByTestId(container, "StrikethroughButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextFormatSection />
      </Slate>
    );

    //Expect StrikethroughButton to be active
    expect(queryByTestId(container, "BoldButton")).toBeTruthy();
    expect(queryByTestId(container, "ItalicsButton")).toBeTruthy();
    expect(queryByTestId(container, "UnderlineButton")).toBeTruthy();
    expect(queryByTestId(container, "StrikethroughButton-active")).toBeTruthy();
  });
});
