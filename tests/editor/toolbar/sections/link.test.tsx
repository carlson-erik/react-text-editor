import React from "react";
import { Slate } from "slate-react";
import { getByTestId, queryByTestId, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LinkSection from "../../../../src/editor/toolbar/sections/link";
import { LIST_EXAMPLES } from "../../../../stories/mocks/content";
import { getReactTextEditor } from "../../../utils";
import type { ReactTextEditor } from "../../../../src/editor/types";

describe("Link Toolbar Section & Link Overlay", () => {
  let editor: ReactTextEditor;
  beforeEach(() => {
    editor = getReactTextEditor();
  });

  test("Link Button correctly handles when an edtior selection is a NOT link", async () => {
    editor.selection = {
      anchor: {
        path: [1, 0],
        offset: 16,
      },
      focus: {
        path: [1, 0],
        offset: 16,
      },
    };
    const { container } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <LinkSection />
      </Slate>
    );
    // Click on the LinkButton
    userEvent.click(getByTestId(container, "LinkButton"));
    // Check the Link Overlay is open
    expect(getByTestId(container, "LinkOverlay")).toBeDefined();
    // Get the URL Input and check its value
    const URLInput = getByTestId(container, "URLInput");
    expect(URLInput.getAttribute("value")).toBe("");
    // Get the Link Initial Text Input and check its value
    const LinkTextInput = getByTestId(container, "LinkTextInput");
    expect(LinkTextInput.getAttribute("value")).toBe("");

    expect(container).toMatchInlineSnapshot(`
      <div>
        <span
          class="sc-beyTiQ gUbnCD"
          data-testid="LinkButton"
        >
          <svg
            class="sc-gLLuHO gYGfkO"
            fill="#E5E8EC"
            viewBox="-3 -3 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.19 9.345a.97.97 0 0 1 1.37 0 .966.966 0 0 1 0 1.367l-2.055 2.052a1.932 1.932 0 0 0 0 2.735 1.94 1.94 0 0 0 2.74 0l4.794-4.787a.966.966 0 0 0 0-1.367.966.966 0 0 1 0-1.368.97.97 0 0 1 1.37 0 2.898 2.898 0 0 1 0 4.103l-4.795 4.787a3.879 3.879 0 0 1-5.48 0 3.864 3.864 0 0 1 0-5.47L3.19 9.344zm11.62-.69a.97.97 0 0 1-1.37 0 .966.966 0 0 1 0-1.367l2.055-2.052a1.932 1.932 0 0 0 0-2.735 1.94 1.94 0 0 0-2.74 0L7.962 7.288a.966.966 0 0 0 0 1.367.966.966 0 0 1 0 1.368.97.97 0 0 1-1.37 0 2.898 2.898 0 0 1 0-4.103l4.795-4.787a3.879 3.879 0 0 1 5.48 0 3.864 3.864 0 0 1 0 5.47L14.81 8.656z"
            />
          </svg>
        </span>
        <div
          style="position: absolute; left: 0px; top: 0px; z-index: 1000;"
        >
          <div
            class="sc-jsEeA-d iukxRs"
            data-testid="LinkOverlay"
          >
            <div
              class="sc-iBdoyZ dLBdHE"
            >
              <label
                class="sc-qZruQ dJjgmJ"
                data-testid="input-label"
                for="url-input"
              >
                URL
              </label>
              <input
                class="sc-fsYfxw VYpln"
                data-testid="URLInput"
                id="url-input"
                type="text"
                value=""
              />
            </div>
            <div
              class="sc-iBdoyZ dLBdHE"
            >
              <label
                class="sc-qZruQ dJjgmJ"
                data-testid="input-label"
                for="link-test-input"
              >
                Link Text
              </label>
              <input
                class="sc-fsYfxw VYpln"
                data-testid="LinkTextInput"
                id="link-test-input"
                type="text"
                value=""
              />
            </div>
            <div
              class="sc-kFCrIq LEDtT"
            >
              <a
                class="sc-guDMob cFgIlV"
                data-testid="UpdateButton"
              >
                <button
                  class="sc-dmyDmy sc-hLQTFJ emnXqD gkEIBv"
                >
                  <span
                    class="sc-jTQDJr eGCJSZ"
                  >
                    Insert
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  test("Link Button correctly handles when an edtior selection IS a link", async () => {
    editor.selection = {
      anchor: {
        path: [7, 0, 1, 0],
        offset: 6,
      },
      focus: {
        path: [7, 0, 1, 0],
        offset: 6,
      },
    };
    const { container } = render(
      <Slate editor={editor} initialValue={LIST_EXAMPLES} onChange={() => {}}>
        <LinkSection />
      </Slate>
    );
    // Click on the LinkButton
    userEvent.click(getByTestId(container, "LinkButton-active"));
    // Check the Link Overlay is open
    expect(getByTestId(container, "LinkOverlay")).toBeDefined();
    // Get the URL Input and check its value
    const URLInput = getByTestId(container, "URLInput");
    expect(URLInput.getAttribute("value")).toBe(
      "https://en.wikipedia.org/wiki/Hypertext"
    );
    // Get the Link Initial Text Input and check its value
    expect(queryByTestId(container, "LinkTextInput")).toBeFalsy();

    // Snapshot for Visual Structure Testing
    expect(container).toMatchInlineSnapshot(`
      <div>
        <span
          class="sc-beyTiQ bjrFNf"
          data-testid="LinkButton-active"
        >
          <svg
            class="sc-gLLuHO gYGfkO"
            fill="#A9AEB7"
            viewBox="-3 -3 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.19 9.345a.97.97 0 0 1 1.37 0 .966.966 0 0 1 0 1.367l-2.055 2.052a1.932 1.932 0 0 0 0 2.735 1.94 1.94 0 0 0 2.74 0l4.794-4.787a.966.966 0 0 0 0-1.367.966.966 0 0 1 0-1.368.97.97 0 0 1 1.37 0 2.898 2.898 0 0 1 0 4.103l-4.795 4.787a3.879 3.879 0 0 1-5.48 0 3.864 3.864 0 0 1 0-5.47L3.19 9.344zm11.62-.69a.97.97 0 0 1-1.37 0 .966.966 0 0 1 0-1.367l2.055-2.052a1.932 1.932 0 0 0 0-2.735 1.94 1.94 0 0 0-2.74 0L7.962 7.288a.966.966 0 0 0 0 1.367.966.966 0 0 1 0 1.368.97.97 0 0 1-1.37 0 2.898 2.898 0 0 1 0-4.103l4.795-4.787a3.879 3.879 0 0 1 5.48 0 3.864 3.864 0 0 1 0 5.47L14.81 8.656z"
            />
          </svg>
        </span>
        <div
          style="position: absolute; left: 0px; top: 0px; z-index: 1000;"
        >
          <div
            class="sc-jsEeA-d iukxRs"
            data-testid="LinkOverlay"
          >
            <div
              class="sc-iBdoyZ dLBdHE"
            >
              <label
                class="sc-qZruQ dJjgmJ"
                data-testid="input-label"
                for="url-input"
              >
                URL
              </label>
              <input
                class="sc-fsYfxw VYpln"
                data-testid="URLInput"
                id="url-input"
                type="text"
                value="https://en.wikipedia.org/wiki/Hypertext"
              />
            </div>
            <div
              class="sc-kFCrIq LEDtT"
            >
              <a
                class="sc-guDMob cFgIlV"
                data-testid="UpdateButton"
              >
                <button
                  class="sc-dmyDmy sc-hLQTFJ emnXqD gkEIBv"
                >
                  <span
                    class="sc-jTQDJr eGCJSZ"
                  >
                    Update
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
