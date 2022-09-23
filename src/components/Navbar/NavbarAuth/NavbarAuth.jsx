import { NavLink } from 'react-router-dom';

import css from './navbar-auth.module.css';
const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const NavbarAuth = () => {
  return (
    <>
      <div></div>
      <div className={css.wrapper}>
        <NavLink to="/register" className={getClassName}>
          Register
        </NavLink>{' '}
        |{' '}
        <NavLink to="/login" className={getClassName}>
          Login
        </NavLink>
      </div>
      <div></div>
    </>
  );
};

export default NavbarAuth;
