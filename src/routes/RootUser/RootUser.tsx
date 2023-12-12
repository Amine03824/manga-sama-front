import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import './RootUser.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserMenu from '../../components/UserMenu/UserMenu';
import { useAppSelector } from '../../hooks/redux';

function RootUser() {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const userIsConnected = useAppSelector(
    (state) => state.loginForm.userIsConnected
  );

  if (!userIsConnected) {
    return <Navigate to="/login" />;
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
