export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContext {
  themeMode: ThemeMode;
  switchThemeMode: (mode: ThemeMode) => void;
}
