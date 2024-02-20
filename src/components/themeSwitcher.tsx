import { FormControlLabel, Switch } from '@mui/material';
import { ThemeMode, ThemeContext } from '../themeContext/types';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../themeContext';
import '../styles/themeSwitcher.css';

const ThemeSwitcher = () => {
  const { themeMode, switchThemeMode } = useContext(Context) as ThemeContext;
  const [checked, setChecked] = useState(themeMode === ThemeMode.DARK);

  useEffect(() => {
    const themeModeFromPref = _getThemePref();
    setChecked(themeModeFromPref === ThemeMode.DARK);
  }, [themeMode]);
  const _getThemePref = (): ThemeMode => {
    const themeModePref = localStorage.getItem('themeMode') as ThemeMode;
    if (themeModePref) {
      return themeModePref;
    }
    return ThemeMode.LIGHT;
  };

  const handleSwitchTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = checked ? ThemeMode.LIGHT : ThemeMode.DARK;
    switchThemeMode(newMode);
    setChecked(e.target.checked);
  };
  return (
    <div className='switch'>
      <FormControlLabel
        control={
          <Switch
            className='switch-btn'
            checked={checked}
            onChange={handleSwitchTheme}></Switch>
        }
        label='THEME'
        labelPlacement='bottom'
      />
    </div>
  );
};

export default ThemeSwitcher;
