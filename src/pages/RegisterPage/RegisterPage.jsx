import singup from '../../redux/auth/auth-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);
  const onRegister = payload => {
    const action = singup(payload);
    dispatch(action);
  };
  console.log('isLogin', isLogin);
  return (
    <div className="container">
      <h2>Register page</h2>
      <RegisterForm formSubmitHandler={onRegister} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
