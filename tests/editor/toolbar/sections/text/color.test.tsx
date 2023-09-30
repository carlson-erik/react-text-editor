import React from "react";
import { Slate } from "slate-react";
import { CustomEditor } from "../../../../../src/editor/types";
import { LIST_EXAMPLES } from "../../../../../stories/mocks/content";
import { getCustomEditor } from "../../../../utils";
import {
  fireEvent,
  getByTestId,
  queryByTestId,
  render,
} from "@testing-library/react";
import TextColorSection from "../../../../../src/editor/toolbar/sections/text/color";
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

describe("Text Color Toolbar Section ", () => {
  let editor: CustomEditor;
  beforeEach(() => {
    editor = getCustomEditor();
  });

  test("Selecting Text Range and changing the text color will change the selected text's color.", () => {
    editor.selection = mockTextRangeSelection;
    const { container, rerender } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextColorSection />
      </Slate>
    );

    // Expect TextColorButton to be clickable
    expect(queryByTestId(container, "TextColorButton")).toBeTruthy();

    // Click on TextColorButton
    userEvent.click(getByTestId(container, "TextColorButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextColorSection />
      </Slate>
    );

    // Get the Text Color Input
    let hexcolorTextInput = container.querySelector('input[value="D1D4D9"]');
    expect(hexcolorTextInput).toBeDefined();
    expect(hexcolorTextInput).not.toBe(null);

    if (hexcolorTextInput === null) return;

    // Update the text color
    fireEvent.change(hexcolorTextInput, {
      target: { value: "FFEEDD" },
    });
    expect(container.querySelector('input[value="FFEEDD"]')).not.toBe(null);

    // Submit the model
    userEvent.click(getByTestId(container, "SubmitButton"));

    rerender(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <TextColorSection />
      </Slate>
    );

    userEvent.click(getByTestId(container, "TextColorButton"));

    // Expect to see that the text color matches our updated value
    hexcolorTextInput = getByTestId(
      container,
      "TextColorOverlay"
    ).querySelector('input[value="FFEEDD"]');
    expect(hexcolorTextInput).toBeDefined();
    expect(hexcolorTextInput).not.toBe(null);
  });
});
