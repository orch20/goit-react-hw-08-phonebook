import Contacts from 'pages/Contacts/Contacts';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};
