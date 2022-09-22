import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './navbar-menu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const NavbarMenu = () => {
  return (
    <ul className={css.menu}>
      <li key={nanoid(3)} className={css.navbarItem}>
        <NavLink className={getClassName} to={'/contacts'}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarMenu;
