import { Theme } from "./types";

const DEFAULT_THEME: Theme = {
  name: "Granite",
  light: {
    editor: {
      background: "#FFFFFF",
      text: {
        primary: "#1E2127",
        link: "#0F62D7",
      },
    },
    toolbar: {
      border: "#E5E8EC",
      background: {
        primary: "#FFFFFF",
        selected: "#E5E8EC",
        disabled: "#E5E8EC",
      },
      text: {
        primary: "#1E2127",
        selected: "#343740",
        disabled: "#E5E8EC",
      },
      button: {
        background: "#0F62D7",
        text: "#E7F0FD",
      },
    },
  },
  dark: {
    editor: {
      background: "#1E2127",
      text: {
        primary: "#D1D4D9",
        link: "#70A7F5",
      },
    },
    toolbar: {
      border: "#343740",
      background: {
        primary: "#1E2127",
        selected: "#343740",
        disabled: "#343740",
      },
      text: {
        primary: "#E5E8EC",
        selected: "#A9AEB7",
        disabled: "#343740",
      },
      button: {
        background: "#70A7F5",
        text: "#173F78",
      },
    },
  },
};

export default DEFAULT_THEME;
