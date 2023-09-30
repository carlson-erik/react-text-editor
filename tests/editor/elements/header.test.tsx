import { render } from "@testing-library/react";
import "jest-styled-components";

import HeaderElement from "../../../src/editor/elements/header";
import { RenderElementProps } from "slate-react";

describe("Header Element component", () => {
  const headerProps: RenderElementProps = {
    children: "Header Text",
    element: {
      type: "header-one",
      align: "left",
      children: [
        {
          text: "Header Text",
        },
      ],
    },
    attributes: {
      "data-slate-node": "element",
      "data-slate-inline": true,
      "data-slate-void": true,
      dir: "rtl",
      ref: {
        current: null,
      },
    },
  };

  test("HeaderElement applies alignment correctly", () => {
    const testProps: RenderElementProps = {
      ...headerProps,
      element: {
        type: "header-two",
        align: "center",
        children: [
          {
            text: "Header Text",
          },
        ],
      },
    };

    const { container } = render(
      <HeaderElement
        element={testProps.element}
        attributes={testProps.attributes}
      >
        {testProps.children}
      </HeaderElement>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      <h2
        alignment="center"
        class="c0"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        Header Text
      </h2>
    `);
    expect(container.firstChild).toHaveStyleRule("text-align", "center");
  });

  test("HeaderElement renders as H1 with correct text", () => {
    const { container } = render(
      <HeaderElement
        element={headerProps.element}
        attributes={headerProps.attributes}
      >
        {headerProps.children}
      </HeaderElement>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <h1
        alignment="left"
        class="c0"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        Header Text
      </h1>
    `);
  });

  test("HeaderElement renders as H2 with correct text", () => {
    const testProps: RenderElementProps = { ...headerProps };
    testProps.element.type = "header-two";
    const { container } = render(
      <HeaderElement
        element={headerProps.element}
        attributes={headerProps.attributes}
      >
        {headerProps.children}
      </HeaderElement>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <h2
        alignment="left"
        class="c0"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        Header Text
      </h2>
    `);
  });

  test("HeaderElement renders as H3 with correct text", () => {
    const testProps: RenderElementProps = { ...headerProps };
    testProps.element.type = "header-three";
    const { container } = render(
      <HeaderElement
        element={headerProps.element}
        attributes={headerProps.attributes}
      >
        {headerProps.children}
      </HeaderElement>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <h3
        alignment="left"
        class="c0"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        Header Text
      </h3>
    `);
  });

  test("HeaderElement renders as H4 with correct text", () => {
    const testProps: RenderElementProps = { ...headerProps };
    testProps.element.type = "header-four";
    const { container } = render(
      <HeaderElement
        element={headerProps.element}
        attributes={headerProps.attributes}
      >
        {headerProps.children}
      </HeaderElement>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <h4
        alignment="left"
        class="c0"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        Header Text
      </h4>
    `);
  });

  test("HeaderElement renders as H5 with correct text", () => {
    const testProps: RenderElementProps = { ...headerProps };
    testProps.element.type = "header-five";
    const { container } = render(
      <HeaderElement
        element={headerProps.element}
        attributes={headerProps.attributes}
      >
        {headerProps.children}
      </HeaderElement>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <h5
        alignment="left"
        class="c0"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        Header Text
      </h5>
    `);
  });

  test("HeaderElement renders as H6 with correct text", () => {
    const testProps: RenderElementProps = { ...headerProps };
    testProps.element.type = "header-six";
    const { container } = render(
      <HeaderElement
        element={headerProps.element}
        attributes={headerProps.attributes}
      >
        {headerProps.children}
      </HeaderElement>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <h6
        alignment="left"
        class="c0"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        Header Text
      </h6>
    `);
  });
});
