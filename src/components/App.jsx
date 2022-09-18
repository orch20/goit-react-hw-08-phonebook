import Contacts from 'pages/Contacts/Contacts';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
