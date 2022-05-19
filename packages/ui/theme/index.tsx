import { useState, createContext, useEffect, useContext } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { GlobalStyle } from "./global";
import { light, dark } from "./theme";
import { useDarkMode } from "usehooks-ts";

interface Props {
  isDarkMode: boolean;
  theme: typeof light;
  toggleTheme: () => void;
}

const defaultValue: Props = {
  isDarkMode: false,
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
  const { isDarkMode: clientIsUsingDarkMode, toggle: toggleTheme } = useDarkMode();
  const [theme, setTheme] = useState(light);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setTheme(clientIsUsingDarkMode ? dark : light);
    setIsDarkMode(clientIsUsingDarkMode);
  }, [clientIsUsingDarkMode]);

  return (
    <Provider theme={theme}>
      <GlobalStyle />
      <ThemeContext.Provider value={{ isDarkMode, theme, toggleTheme }}>{children}</ThemeContext.Provider>
    </Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
