import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Form
        </NavLink>
        <NavLink
          to='/employees'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Employees List
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
