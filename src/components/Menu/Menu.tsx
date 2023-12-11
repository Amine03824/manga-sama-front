import { ChangeEvent, useState } from 'react';
import './Menu.scss';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeSearchInputValue } from '../../store/reducers/searchBarMenu';
import { changeFilteredArticle } from '../../store/reducers/article';

type MenuProps = {
  menuIsVisible: boolean;
  setMenuIsVisible: (setMenuIsVisible: boolean) => void;
};

function Menu({ menuIsVisible, setMenuIsVisible }: MenuProps) {
  const dispatch = useAppDispatch();
  const [categoriesIsVisible, setCategoriesIsVisible] = useState(false);
  const categories = useAppSelector(
    (state) => state.categories.list_categories
  );

  const articles = useAppSelector((state) => state.article.list_articles);
  // const manga = useAppSelector((state) => state.searchBar.manga);

  const searchBarInputValue = useAppSelector(
    (state) => state.searchBar.searchBarInputValue
  );
  // useEffect(() => {
  //   // Mettre à jour la liste d'articles à chaque changement de filteredArticles
  //   dispatch(changeFilteredArticle(articles));
  // }, [articles, dispatch]);

  function handleOnCategoryButton() {
    setCategoriesIsVisible(!categoriesIsVisible);
  }

  function handleOnMenuButton() {
    setMenuIsVisible(!menuIsVisible);
  }

  function handleChangeSearchBarInputValue(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const newSearchValue = event.target.value.toLowerCase();
    // console.log('Current Search Value:', searchBarInputValue);
    // console.log('Dispatching changeSearchInputValue:', newSearchValue);

    dispatch(changeSearchInputValue(newSearchValue));

    const filteredArticle = articles.filter((article) =>
      article.article.title.toLowerCase().includes(newSearchValue)
    );
    // console.log('Filtered Articles:', filteredArticle);
    // console.log('Dispatching changeFilteredArticle:', filteredArticle);

    dispatch(changeFilteredArticle(filteredArticle));
  }

  // const handleChangeSearchBarInputValue = (
  //   event: ChangeEvent<HTMLInputElement>
  // ) => {
  //   dispatch(changeSearchInputValue);
  // };

  return (
    <div className={clsx('home-menu', { 'home-menu--hidden': !menuIsVisible })}>
      <div className="home-menu__container">
        <img className="home-menu__logo" src="/assets/logo/logo.png" alt="" />
        <button
          onClick={handleOnMenuButton}
          type="button"
          className="home-menu__toggle-button"
        >
          <img
            className="home-menu__toggle-button--icon"
            src="/assets/icons/menuPink.png"
            alt="menu-burger"
          />
        </button>
        <form className="home-menu__form">
          <input
            type="text"
            placeholder="Rechercher..."
            className="home-menu__form--inputSearch"
            onChange={handleChangeSearchBarInputValue}
            value={searchBarInputValue}
          />
        </form>
        <nav className="home-menu__nav">
          <button
            onClick={handleOnCategoryButton}
            type="button"
            className="nav__categories-button"
          >
            Catégories
            <img
              className={clsx('nav__categories-arrowicon', {
                'nav__categories-arrowicon--rotated': categoriesIsVisible,
              })}
              src="/assets/icons/fleche-vers-le-cote.png"
              alt="arrow-icon"
            />
          </button>
          <ul
            className={clsx('nav__categories-list', {
              'nav__categories-list--hidden': !categoriesIsVisible,
            })}
          >
            {categories.map((category) => (
              <Link
                key={category.category_name}
                to={`/category/${category.id}`}
              >
                <li className="nav__categories-item">
                  {category.category_name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <div className="home-menu__socials">
        <a href="/" className="home-menu__socials-icon">
          <img src="/assets/icons/facebook.png" alt="facebook logo" />
        </a>
        <a href="/" className="home-menu__socials-icon">
          <img src="/assets/icons/instagram.png" alt="instagram logo" />
        </a>
        <a href="/" className="home-menu__socials-icon">
          <img src="/assets/icons/twitter.png" alt="x logo" />
        </a>
      </div>
    </div>
  );
}

export default Menu;
