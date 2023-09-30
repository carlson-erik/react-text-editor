import styled from "styled-components";
import { useDarkMode } from "storybook-dark-mode";
import { Meta, StoryFn } from "@storybook/react";
import {
  LOREM_IPSUM,
  HANSEL_AND_GRETEL,
  LIST_EXAMPLES,
} from "../mocks/content";
import { Granite, GraniteProps, Theme, ThemeTypes } from "../../src/index";
import DEFAULT_THEME from "../../src/editor/theme/default";
import "./index.css";
import React from "react";

const Container = styled.div<{
  theme: Theme;
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

const EditorContainer = styled.div<{ theme: Theme }>`
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

export default {
  title: "Granite",
  component: Granite,
  argTypes: {
    readOnly: { control: "boolean" },
    themeType: { control: { disable: true } },
    toolbarMode: {
      options: ["static-top", "static-bottom", "hover"],
    },
  },
} as Meta<typeof Granite>;

const EditorStory: StoryFn<typeof Granite> = (args: GraniteProps) => {
  const themeType = useDarkMode() ? ThemeTypes.DARK : ThemeTypes.LIGHT;
  return (
    <Container theme={DEFAULT_THEME[themeType]} themeType={themeType}>
      <EditorContainer theme={DEFAULT_THEME[themeType]}>
        <Granite {...args} theme={DEFAULT_THEME} themeType={themeType} />
      </EditorContainer>
    </Container>
  );
};

export const Empty = EditorStory.bind({});
Empty.args = {
  readOnly: false,
  toolbarMode: "static-top",
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
  toolbarMode: "static-top",
};

export const ListExamples = EditorStory.bind({});
ListExamples.args = {
  readOnly: false,
  initialContent: LIST_EXAMPLES,
  toolbarMode: "hover",
};
