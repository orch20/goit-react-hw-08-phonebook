import { signup } from '../../redux/auth/auth-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthError } from 'redux/auth/auth-selectors';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
// import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  // const isLogin = useSelector(isAuth);
  const onRegister = payload => {
    const action = signup(payload);
    dispatch(action);
  };

  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // }
  return (
    <div className="container">
      <h2>Register page</h2>
      <RegisterForm formSubmitHandler={onRegister} />
      {status === 400 && <p>{message} User email exist</p>}
    </div>
  );
};

export default RegisterPage;
