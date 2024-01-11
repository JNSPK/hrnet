import { createContext, useEffect, useState } from 'react';
import { IThemeMode, IthemeContext } from './types';
import { AppDarkTheme, AppLightTheme } from './theme';
import { Theme, ThemeProvider } from '@mui/material';

export const ThemeContext = createContext<IthemeContext | null>(null);

export const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
  const [theme, setTheme] = useState<Theme>(AppLightTheme);

  useEffect(() => {
    const themeModeFromPref = _getThemePref();
    setThemeMode(themeModeFromPref);
  }, []);

  useEffect(() => {
    switch (themeMode) {
      case IThemeMode.LIGHT:
        setTheme(AppLightTheme);
        break;
      case IThemeMode.DARK:
        setTheme(AppDarkTheme);
        break;
    }
  }, [themeMode]);

  const _getThemePref = (): IThemeMode => {
    const themeModePref = localStorage.getItem('themeMode') as IThemeMode;
    if (themeModePref) {
      return themeModePref;
    }
    return IThemeMode.LIGHT;
  };

  const _setThemeModeToPref = (mode: IThemeMode) => {
    localStorage.setItem('themeMode', mode);
  };

  const switchThemeMode = (mode: IThemeMode) => {
    setThemeMode(mode);
    _setThemeModeToPref(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, switchThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
