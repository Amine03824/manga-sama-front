import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './RootUser.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import UserMenu from '../../components/UserMenu/UserMenu';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { LocalStorage } from '../../utils/LocalStorage';
import { changeUserisConnectedToTrue } from '../../store/reducers/loginForm';

function RootUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const userIsConnected = useAppSelector(
    (state) => state.loginForm.userIsConnected
  );
  const { user } = LocalStorage.getItem('user');

  useEffect(() => {
    if (!user) {
      dispatch(changeUserisConnectedToTrue(false));
      navigate('/login');
      console.log(userIsConnected);
    }
    if (user) {
      dispatch(changeUserisConnectedToTrue(true));
      console.log(userIsConnected);
    }
  }, [dispatch, user]);

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
