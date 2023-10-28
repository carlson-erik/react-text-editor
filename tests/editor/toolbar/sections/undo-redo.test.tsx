import React from "react";
import { Slate } from "slate-react";
import { render, screen } from "@testing-library/react";

import UndoRedoSection from "../../../../src/editor/toolbar/sections/undo-redo";
import { HANSEL_AND_GRETEL } from "../../../../stories/mocks/content";
import { getElasticEditor } from "../../../utils";
import { ElasticEditor } from "../../../../src/editor/types";

describe("Undo & Redo Toolbar Section ", () => {
  let editor: ElasticEditor;
  beforeEach(() => {
    editor = getElasticEditor();
  });
  test("Section renders with undos and no redos", () => {
    editor.history.undos = [
      {
        operations: [
          {
            type: "remove_text",
            path: [3, 0],
            offset: 558,
            text: "morning we will take the children out into the forest to where it is the thickest; there we will light a fire for them, and give each of them one more piece of bread, and then we will go to our work and leave them alone. They will not find the way home again, and we shall be rid of them.’ ‘No, wife,’ said the man, ‘I will not do that; how can I bear to leave my children alone in the forest?--the wild animals would soon come and tear them to pieces.’ ‘O, you fool!’ said she, ‘then we must all four die of hunger, you may as well plane the planks for our coffins",
          },
        ],
        selectionBefore: {
          anchor: {
            path: [3, 0],
            offset: 1123,
          },
          focus: {
            path: [3, 0],
            offset: 558,
          },
        },
      },
    ];
    render(
      <Slate
        editor={editor}
        initialValue={HANSEL_AND_GRETEL}
        onChange={() => {}}
      >
        <UndoRedoSection />
      </Slate>
    );

    expect(screen.getAllByTestId("undo-button")).toHaveLength(1);
    expect(screen.getAllByTestId("redo-button-disabled")).toHaveLength(1);
  });

  test("Section renders with redos and no undos", () => {
    editor.history.redos = [
      {
        operations: [
          {
            type: "remove_text",
            path: [3, 0],
            offset: 558,
            text: "morning we will take the children out into the forest to where it is the thickest; there we will light a fire for them, and give each of them one more piece of bread, and then we will go to our work and leave them alone. They will not find the way home again, and we shall be rid of them.’ ‘No, wife,’ said the man, ‘I will not do that; how can I bear to leave my children alone in the forest?--the wild animals would soon come and tear them to pieces.’ ‘O, you fool!’ said she, ‘then we must all four die of hunger, you may as well plane the planks for our coffins",
          },
        ],
        selectionBefore: {
          anchor: {
            path: [3, 0],
            offset: 1123,
          },
          focus: {
            path: [3, 0],
            offset: 558,
          },
        },
      },
    ];
    const { container } = render(
      <Slate
        editor={editor}
        initialValue={HANSEL_AND_GRETEL}
        onChange={() => {}}
      >
        <UndoRedoSection />
      </Slate>
    );

    expect(screen.getAllByTestId("redo-button")).toHaveLength(1);
    expect(screen.getAllByTestId("undo-button-disabled")).toHaveLength(1);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-eDLKEg fNwAuA"
        >
          <span
            class="sc-beyTiQ eOBmRH"
            data-testid="undo-button-disabled"
            disabled=""
          >
            <svg
              class="sc-guDMob idQNAj"
              fill="#E5E8EC"
              viewBox="-0.5 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.308 7.612l1.352-.923a.981.981 0 0 1 1.372.27 1.008 1.008 0 0 1-.266 1.388l-3.277 2.237a.981.981 0 0 1-1.372-.27L.907 6.998a1.007 1.007 0 0 1 .266-1.389.981.981 0 0 1 1.372.27l.839 1.259C4.6 3.01 8.38 0 12.855 0c5.458 0 9.882 4.477 9.882 10s-4.424 10-9.882 10a.994.994 0 0 1-.988-1c0-.552.443-1 .988-1 4.366 0 7.906-3.582 7.906-8s-3.54-8-7.906-8C9.311 2 6.312 4.36 5.308 7.612z"
              />
            </svg>
          </span>
          <span
            class="sc-beyTiQ gUbnCD"
            data-testid="redo-button"
          >
            <svg
              class="sc-dmyDmy gQYRyN"
              fill="#A9AEB7"
              viewBox="-1 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.347 7.24l.847-1.266a.984.984 0 0 1 1.375-.259c.456.31.58.93.277 1.383L19.65 10.38a.984.984 0 0 1-1.375.259L14.97 8.393a1.002 1.002 0 0 1-.277-1.382.984.984 0 0 1 1.375-.26l1.344.915C16.428 4.386 13.42 2 9.863 2c-4.357 0-7.89 3.582-7.89 8s3.533 8 7.89 8c.545 0 .987.448.987 1s-.442 1-.987 1C4.416 20 0 15.523 0 10S4.416 0 9.863 0c4.504 0 8.302 3.06 9.484 7.24z"
              />
            </svg>
          </span>
        </div>
      </div>
    `);
  });

  test("Section renders disabled even when there is undos and redos", () => {
    editor.history.undos = [
      {
        operations: [
          {
            type: "remove_text",
            path: [3, 0],
            offset: 558,
            text: "morning we will take the children out into the forest to where it is the thickest; there we will light a fire for them, and give each of them one more piece of bread, and then we will go to our work and leave them alone. They will not find the way home again, and we shall be rid of them.’ ‘No, wife,’ said the man, ‘I will not do that; how can I bear to leave my children alone in the forest?--the wild animals would soon come and tear them to pieces.’ ‘O, you fool!’ said she, ‘then we must all four die of hunger, you may as well plane the planks for our coffins",
          },
        ],
        selectionBefore: {
          anchor: {
            path: [3, 0],
            offset: 1123,
          },
          focus: {
            path: [3, 0],
            offset: 558,
          },
        },
      },
    ];
    editor.history.redos = [
      {
        operations: [
          {
            type: "remove_text",
            path: [3, 0],
            offset: 558,
            text: "morning we will take the children out into the forest to where it is the thickest; there we will light a fire for them, and give each of them one more piece of bread, and then we will go to our work and leave them alone. They will not find the way home again, and we shall be rid of them.’ ‘No, wife,’ said the man, ‘I will not do that; how can I bear to leave my children alone in the forest?--the wild animals would soon come and tear them to pieces.’ ‘O, you fool!’ said she, ‘then we must all four die of hunger, you may as well plane the planks for our coffins",
          },
        ],
        selectionBefore: {
          anchor: {
            path: [3, 0],
            offset: 1123,
          },
          focus: {
            path: [3, 0],
            offset: 558,
          },
        },
      },
    ];
    const { container } = render(
      <Slate
        editor={editor}
        initialValue={HANSEL_AND_GRETEL}
        onChange={() => {}}
      >
        <UndoRedoSection disabled />
      </Slate>
    );

    expect(screen.getAllByTestId("undo-button-disabled")).toHaveLength(1);
    expect(screen.getAllByTestId("redo-button-disabled")).toHaveLength(1);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-eDLKEg fNwAuA"
          disabled=""
        >
          <span
            class="sc-beyTiQ eOBmRH"
            data-testid="undo-button-disabled"
            disabled=""
          >
            <svg
              class="sc-guDMob idQNAj"
              fill="#A9AEB7"
              viewBox="-0.5 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.308 7.612l1.352-.923a.981.981 0 0 1 1.372.27 1.008 1.008 0 0 1-.266 1.388l-3.277 2.237a.981.981 0 0 1-1.372-.27L.907 6.998a1.007 1.007 0 0 1 .266-1.389.981.981 0 0 1 1.372.27l.839 1.259C4.6 3.01 8.38 0 12.855 0c5.458 0 9.882 4.477 9.882 10s-4.424 10-9.882 10a.994.994 0 0 1-.988-1c0-.552.443-1 .988-1 4.366 0 7.906-3.582 7.906-8s-3.54-8-7.906-8C9.311 2 6.312 4.36 5.308 7.612z"
              />
            </svg>
          </span>
          <span
            class="sc-beyTiQ eOBmRH"
            data-testid="redo-button-disabled"
            disabled=""
          >
            <svg
              class="sc-dmyDmy gQYRyN"
              fill="#A9AEB7"
              viewBox="-1 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.347 7.24l.847-1.266a.984.984 0 0 1 1.375-.259c.456.31.58.93.277 1.383L19.65 10.38a.984.984 0 0 1-1.375.259L14.97 8.393a1.002 1.002 0 0 1-.277-1.382.984.984 0 0 1 1.375-.26l1.344.915C16.428 4.386 13.42 2 9.863 2c-4.357 0-7.89 3.582-7.89 8s3.533 8 7.89 8c.545 0 .987.448.987 1s-.442 1-.987 1C4.416 20 0 15.523 0 10S4.416 0 9.863 0c4.504 0 8.302 3.06 9.484 7.24z"
              />
            </svg>
          </span>
        </div>
      </div>
    `);
  });
});
