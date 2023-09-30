export enum ThemeTypes {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeConfiguration = {
  editor: {
    background: string;
    text: {
      primary: string;
      link: string;
      headings?: {
        one: string;
        two: string;
        three: string;
        four: string;
        five: string;
        six: string;
      };
    };
  };
  toolbar: {
    border?: string;
    background: {
      primary: string;
      selected: string;
      disabled: string;
    };
    text: {
      primary: string;
      selected: string;
      disabled: string;
    };
    button: {
      background: string;
      text: string;
    };
  };
};

export type Theme = {
  name: string;
} & Record<ThemeTypes, ThemeConfiguration>;

export type ThemeContextType = {
  type: ThemeTypes;
  theme: Theme;
  setTheme: (newTheme: ThemeTypes) => void;
};
