import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import styles from './navbar-menu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const NavbarMenu = () => {
  return (
    <ul className={styles.menu}>
      <li key={nanoid(3)}>
        <NavLink className={getClassName} to={'/contacts'}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarMenu;
