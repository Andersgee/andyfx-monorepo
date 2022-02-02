import { useState, createContext, useEffect } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { GlobalStyle } from "./global";
import { light, dark } from "./theme";
import { useDarkMode } from "usehooks-ts";

interface Props {
  theme: typeof light;
  toggleTheme: () => void;
}

const defaultValue: Props = {
  theme: light,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);

interface ProviderProps {
  children: React.ReactNode;
}

/**
 * This is two providers.
 *
 * 1. The styled-components ThemeProvider
 * which lets every styled component get `props.theme`
 *
 * 2. A normal context provider with my own stuff.
 *
 * (styled-components also has a normal context provider but it only has theme, nothing else)
 */
export function ThemeProvider({ children }: ProviderProps) {
  const { isDarkMode, toggle: toggleTheme } = useDarkMode();
  const [theme, setTheme] = useState(defaultValue.theme);

  useEffect(() => {
    setTheme(isDarkMode ? dark : light);
  }, [isDarkMode]);

  return (
    <Provider theme={theme}>
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </Provider>
  );
}
