import { NavLink, useLocation } from 'react-router-dom';
import '../styles/header.css';
import logo from '../img/logo.png';
import ThemeSwitcher from './themeSwitcher';
import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const Header = () => {
  const theme = useTheme();
  const location = useLocation();

  const [isFormActive, setFormActive] = useState(false);
  const [isListActive, setListActive] = useState(false);

  useEffect(() => {
    setFormActive(location.pathname === '/');
    setListActive(location.pathname === '/employees');
  }, [location.pathname]);

  const getNavLinkStyle = (isActive: boolean) => {
    return {
      backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
      color: theme.palette.primary.contrastText,
    };
  };
  return (
    <header>
      <img src={logo} alt='HRnet logo' className='logo' />
      <nav>
        <NavLink
          to='/'
          className={isFormActive ? '' : 'inactive'}
          style={getNavLinkStyle(isFormActive)}>
          Form
        </NavLink>
        <NavLink
          to='/employees'
          className={isListActive ? '' : 'inactive'}
          style={getNavLinkStyle(isListActive)}>
          Employees List
        </NavLink>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
