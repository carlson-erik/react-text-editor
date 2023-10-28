/* -------- 3rd Party APIs -------- */
import React, { useState } from "react";
import styled from "styled-components";
import { useDarkMode } from "storybook-dark-mode";
import type { Meta, StoryFn } from "@storybook/react";
/* -------- ElasticEditor -------- */
import {
  ElasticElement,
  ElasticEditor,
  ElasticEditorProps,
  ThemeTypes,
} from "../../src";
import Button from "../../src/editor/toolbar/components/button";
/* -------- Mock Content -------- */
import {
  LOREM_IPSUM,
  HANSEL_AND_GRETEL,
  LIST_EXAMPLES,
} from "../mocks/content";
/* -------- Styles & Themes  -------- */
import DEFAULT_THEME from "../../src/editor/theme/default";
import "./index.css";
import { ThemeConfiguration } from "../../src/editor/theme/types";
import { serializeToPlaintext } from "../../src/serializers/plaintext";
import { serializeToHTML } from "../../src/serializers/html";
import { ThemeProvider } from "../../src/editor/theme/context";
import { serializeToMarkdown } from "../../src/serializers/markdown";

/* -------- Styled Components -------- */
const Container = styled.div<{
  theme: ThemeConfiguration;
  themeType: ThemeTypes;
}>`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.themeType === ThemeTypes.LIGHT
      ? "#F8F9FA"
      : props.theme.editor.background};
`;

const EditorContainer = styled.div<{
  theme: ThemeConfiguration;
  themeType: ThemeTypes;
}>`
  width: 90%;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid ${(props) => props.theme.toolbar.border};
  border-radius: 4px;
  overflow-y: scroll;

  background-color: ${(props) => props.theme.editor.background};

  @media (min-width: 1100px) {
    width: 80%;
  }

  @media (min-width: 2000px) {
    width: 65%;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0 1rem 0;
  gap: 1rem;
`;

export default {
  title: "ElasticEditor",
  component: ElasticEditor,
  argTypes: {
    readOnly: { control: "boolean" },
    themeType: { control: { disable: true } },
    toolbarMode: {
      options: ["top", "bottom", "hover", "none"],
    },
  },
} as Meta<typeof ElasticEditor>;

const EMPTY_DOCUMENT: ElasticElement[] = [
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "" }],
  },
];

const EditorStory: StoryFn<typeof ElasticEditor> = (
  args: ElasticEditorProps
) => {
  const [editorContent, setEditorContent] = useState<ElasticElement[]>(
    args.initialContent || EMPTY_DOCUMENT
  );
  const themeType = useDarkMode() ? ThemeTypes.DARK : ThemeTypes.LIGHT;
  const themeProps: {
    theme: ThemeConfiguration;
    themeType: ThemeTypes;
  } = {
    theme: DEFAULT_THEME[themeType],
    themeType,
  };
  return (
    <Container {...themeProps}>
      <EditorContainer {...themeProps}>
        <ThemeProvider theme={DEFAULT_THEME} type={themeType}>
          <ButtonContainer>
            <Button onClick={() => console.log(editorContent)} primary>
              ElasticEditor
            </Button>
            <Button
              onClick={() => console.log(serializeToPlaintext(editorContent))}
              primary
            >
              Plaintext
            </Button>
            <Button
              onClick={() => console.log(serializeToMarkdown(editorContent))}
              primary
            >
              Markdown
            </Button>
            <Button
              onClick={() => console.log(serializeToHTML(editorContent))}
              primary
            >
              HTML
            </Button>
          </ButtonContainer>
        </ThemeProvider>
        <ElasticEditor
          {...args}
          {...themeProps}
          theme={DEFAULT_THEME}
          onChange={(newContent) =>
            setEditorContent(newContent as ElasticElement[])
          }
        />
      </EditorContainer>
    </Container>
  );
};

export const Empty = EditorStory.bind({});
Empty.args = {
  readOnly: false,
  toolbarMode: "top",
};
Empty.argTypes = {
  initialContent: { control: { disable: true } },
};

export const LoremIpsum = EditorStory.bind({});
LoremIpsum.args = {
  readOnly: false,
  initialContent: LOREM_IPSUM,
  toolbarMode: "hover",
};

export const HanselAndGretel = EditorStory.bind({});
HanselAndGretel.args = {
  readOnly: false,
  initialContent: HANSEL_AND_GRETEL,
  toolbarMode: "top",
};

export const ListExamples = EditorStory.bind({});
ListExamples.args = {
  readOnly: false,
  initialContent: LIST_EXAMPLES,
  toolbarMode: "hover",
};
