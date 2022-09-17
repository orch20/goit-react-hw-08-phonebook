import { login } from '../../redux/auth/auth-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);
  const onLogin = payload => {
    const action = login(payload);
    dispatch(action);
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className="container">
      <h2>Login page</h2>
      <LoginForm formSubmitHandler={onLogin} />
      {status === 400 && <p>{message} Try again</p>}
    </div>
  );
};

export default LoginPage;
