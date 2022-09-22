import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import css from './Navbar.module.css';
import useAuth from 'shared/hooks/useAuth';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <div className={css.wrapper}>
      {isLogin && <NavbarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
