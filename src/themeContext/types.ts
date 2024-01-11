export enum IThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IthemeContext {
  themeMode: IThemeMode;
  switchThemeMode: (mode: IThemeMode) => void;
}
