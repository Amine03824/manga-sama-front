import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './RootUser.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserMenu from '../../components/UserMenu/UserMenu';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeUserisConnectedToTrue } from '../../store/reducers/loginForm';
import { LocalStorage } from '../../utils/LocalStorage';

function RootUser() {
  const dispatch = useAppDispatch();
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const userIsConnected = useAppSelector(
    (state) => state.loginForm.userIsConnected
  );
  const { user } = LocalStorage.getItem('user');

  useEffect(() => {
    if (!user) {
      dispatch(changeUserisConnectedToTrue(false));
    }
    if (user) {
      dispatch(changeUserisConnectedToTrue(true));
    }
  }, [dispatch, user]);

  if (!userIsConnected) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="root__user">
      <UserMenu
        setMenuIsVisible={setMenuIsVisible}
        menuIsVisible={menuIsVisible}
      />
      <div className="right__section">
        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
}

export default RootUser;
