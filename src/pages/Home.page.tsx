import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks';
import { logout, selectedUser } from '../features/auth/authSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(selectedUser);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Home Page</h1>
      <a
        onClick={logoutHandler}
        style={{
          backgroundColor: 'yellow',
          cursor: 'pointer',
          height: '40px',
          width: '60px',
          padding: '8px',
        }}>
        Logout
      </a>
      {user?.email}
    </div>
  );
};

export default HomePage;
