import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { login, register, logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async (email: string, password: string) => {
    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (email: string, password: string, name: string) => {
    try {
      await dispatch(register({ email, password, name }));
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    loading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    isAuthenticated: !!user,
  };
};