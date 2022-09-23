// import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/auth-operations';
import { lazy } from 'react';

const Navbar = lazy(() => import('./Navbar/Navbar'));
const InvitingPage = lazy(() => import('pages/InvitingPage/InvitingPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fullback={<p>...Loading</p>}>
        <Navbar />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route index element={<InvitingPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
