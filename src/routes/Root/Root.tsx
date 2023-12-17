import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import './Root.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getArticles, getConditions } from '../../store/reducers/article';
import { getCategories } from '../../store/reducers/categories';
import { LocalStorage } from '../../utils/LocalStorage';
import { changeUserisConnectedToTrue } from '../../store/reducers/loginForm';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Message from '../../components/Message/Message';

function Root() {
  const dispatch = useAppDispatch();

  // Utilisation d'un useState pour faire passer l'etat de la barre de menu directement en props dans le composant menu
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const user = LocalStorage.getItem('user');
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  const errorMessage = useAppSelector((state) => state.loading.errorMessage);
  const infoMessage = useAppSelector((state) => state.loading.infoMessage);
  // Au premier chargement de Root , on fait des demande a l'API pour qu'elle nous donnes les donées nécéssaire :  tous les articles , toutes les catégories , toutes les conditions d'article
  useEffect(() => {
    dispatch(getArticles());
    // dispatch(getCategories());
    // dispatch(getConditions());
    if (user) {
      dispatch(changeUserisConnectedToTrue(true));
    }
  }, [dispatch, user]);

  return (
    <div className="root">
      {isLoading && <Loader />}
      {/* {errorMessage && <ErrorMessage errorContent={errorMessage} />}
      {infoMessage && <Message messageContent={infoMessage} />} */}
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
