import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import css from './NavbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <>
      <div>
        <span className={css.userName}>{name}</span>
        <button onClick={onLogout} type="button">
          Log out
        </button>
      </div>
    </>
  );
};

export default NavbarUser;
