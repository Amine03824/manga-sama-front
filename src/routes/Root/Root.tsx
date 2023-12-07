import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import './Root.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';
import { useAppDispatch } from '../../hooks/redux';
import { getArticles } from '../../store/reducers/article';
import { getCategories } from '../../store/reducers/categories';

function Root() {
  const dispatch = useAppDispatch();

  const [menuIsVisible, setMenuIsVisible] = useState(true);

  useEffect(() => {
    dispatch(getArticles());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="root">
      <Menu setMenuIsVisible={setMenuIsVisible} menuIsVisible={menuIsVisible} />
      <div className="right__section">
        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <HeaderBottom />
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
}

export default Root;
