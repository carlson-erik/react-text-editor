import React, { ReactNode, useEffect, useState } from "react";
import DEFAULT_THEME from "./default";
import { Theme, ThemeContextType, ThemeTypes } from "./types";

const ThemeContext = React.createContext<ThemeContextType>({
  type: ThemeTypes.DARK,
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

interface ThemeProviderProps {
  theme?: Theme;
  type?: ThemeTypes;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme, type } = props;
  const [activeTheme] = useState<Theme>(theme || DEFAULT_THEME);
  const [activeType, setActiveType] = useState<ThemeTypes>(
    type || ThemeTypes.LIGHT
  );

  useEffect(() => {
    if (type && type !== activeType) {
      setActiveType(type);
    }
  }, [type]);

  return (
    <ThemeContext.Provider
      value={{
        type: activeType,
        theme: activeTheme,
        setTheme: (newTheme: ThemeTypes) => setActiveType(newTheme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
