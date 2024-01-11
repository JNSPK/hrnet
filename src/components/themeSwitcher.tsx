import { Switch } from '@mui/material';
import { IThemeMode, IthemeContext } from '../themeContext/types';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../themeContext';
import '../styles/themeSwitcher.css';

const ThemeSwitcher = () => {
  const { themeMode, switchThemeMode } = useContext(
    ThemeContext
  ) as IthemeContext;
  const [checked, setChecked] = useState(themeMode === IThemeMode.DARK);

  useEffect(() => {
    const themeModeFromPref = _getThemePref();
    setChecked(themeModeFromPref === IThemeMode.DARK);
  }, [themeMode]);

  const _getThemePref = (): IThemeMode => {
    const themeModePref = localStorage.getItem('themeMode') as IThemeMode;
    if (themeModePref) {
      return themeModePref;
    }
    return IThemeMode.LIGHT;
  };

  const handleSwitchTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = checked ? IThemeMode.LIGHT : IThemeMode.DARK;
    switchThemeMode(newMode);
    setChecked(e.target.checked);
  };
  return (
    <div className='switch'>
      <Switch
        className='switch-btn'
        checked={checked}
        onChange={handleSwitchTheme}></Switch>
      <p>Theme</p>
    </div>
  );
};

export default ThemeSwitcher;
