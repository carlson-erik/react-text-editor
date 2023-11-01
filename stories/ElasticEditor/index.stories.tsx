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
  REACT_ARTICLE,
} from "../mocks/content";
/* -------- Serializers & Utils -------- */
import { serializeToPlaintext } from "../../src/serializers/plaintext";
import { serializeToMarkdown } from "../../src/serializers/markdown";
import { createAndDownloadFile, createFileName } from "./utils";
/* -------- Styles & Themes  -------- */
import DEFAULT_THEME from "../../src/editor/theme/default";
import "./index.css";
import { ThemeConfiguration } from "../../src/editor/theme/types";
import { ThemeProvider } from "../../src/editor/theme/context";
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

interface EditoryStoryProps extends ElasticEditorProps {
  fileName: string;
}

const EditorStory: StoryFn<EditoryStoryProps> = (args: EditoryStoryProps) => {
  const fileName = args.fileName;
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
            <Button
              onClick={() => {
                const elasticElementsText = JSON.stringify(editorContent);
                createAndDownloadFile(
                  createFileName(fileName, "json"),
                  elasticElementsText
                );
              }}
              primary
            >
              ElasticEditor
            </Button>
            <Button
              onClick={() => {
                const plainText = serializeToPlaintext(editorContent);
                createAndDownloadFile(
                  createFileName(fileName, "txt"),
                  plainText
                );
              }}
              primary
            >
              Plaintext
            </Button>
            <Button
              onClick={() => {
                const markdownText = serializeToMarkdown(editorContent);
                createAndDownloadFile(
                  createFileName(fileName, "md"),
                  markdownText
                );
              }}
              primary
            >
              Markdown
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
  fileName: "Empty",
};
Empty.argTypes = {
  initialContent: { control: { disable: true } },
};

export const LoremIpsum = EditorStory.bind({});
LoremIpsum.args = {
  readOnly: false,
  initialContent: LOREM_IPSUM,
  toolbarMode: "top",
  fileName: "Lorem Ipsum",
};

export const HanselAndGretel = EditorStory.bind({});
HanselAndGretel.args = {
  readOnly: false,
  initialContent: HANSEL_AND_GRETEL,
  toolbarMode: "top",
  fileName: "Hansel And Gretel",
};

export const ListExamples = EditorStory.bind({});
ListExamples.args = {
  readOnly: false,
  initialContent: LIST_EXAMPLES,
  toolbarMode: "top",
  fileName: "List Examples",
};

export const ArticleExample = EditorStory.bind({});
ArticleExample.args = {
  readOnly: false,
  initialContent: REACT_ARTICLE,
  toolbarMode: "top",
  fileName: "React Article",
};
