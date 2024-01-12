import { createContext, useEffect, useState } from 'react';
import { ThemeMode, ThemeContext } from './types';
import { AppDarkTheme, AppLightTheme } from './theme';
import { Theme, ThemeProvider } from '@mui/material';

export const Context = createContext<ThemeContext | null>(null);

export const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);
  const [theme, setTheme] = useState<Theme>(AppLightTheme);

  useEffect(() => {
    const themeModeFromPref = _getThemePref();
    setThemeMode(themeModeFromPref);
  }, []);

  useEffect(() => {
    switch (themeMode) {
      case ThemeMode.LIGHT:
        setTheme(AppLightTheme);
        break;
      case ThemeMode.DARK:
        setTheme(AppDarkTheme);
        break;
    }
  }, [themeMode]);

  const _getThemePref = (): ThemeMode => {
    const themeModePref = localStorage.getItem('themeMode') as ThemeMode;
    if (themeModePref) {
      return themeModePref;
    }
    return ThemeMode.LIGHT;
  };

  const _setThemeModeToPref = (mode: ThemeMode) => {
    localStorage.setItem('themeMode', mode);
  };

  const switchThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode);
    _setThemeModeToPref(mode);
  };

  return (
    <Context.Provider value={{ themeMode, switchThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
