import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import './Root.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';
import { useAppDispatch } from '../../hooks/redux';
import { getArticles, getConditions } from '../../store/reducers/article';
import { getCategories } from '../../store/reducers/categories';
import { LocalStorage } from '../../utils/LocalStorage';
import { changeUserisConnected } from '../../store/reducers/loginForm';

function Root() {
  const dispatch = useAppDispatch();

  // Utilisation d'un useState pour faire passer l'etat de la barre de menu directement en props dans le composant menu
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const user = LocalStorage.getItem('user');
  // Au premier chargement de Root , on fait des demande a l'API pour qu'elle nous donnes les donées nécéssaire :  tous les articles , toutes les catégories , toutes les conditions d'article
  useEffect(() => {
    dispatch(getArticles());
    dispatch(getCategories());
    dispatch(getConditions());
    if (user) {
      dispatch(changeUserisConnected(true));
    }
  }, [dispatch, user]);

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
