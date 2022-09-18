import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div>
      <span>{name}</span>
      <button type="button">Log out</button>
    </div>
  );
};

export default NavbarUser;
