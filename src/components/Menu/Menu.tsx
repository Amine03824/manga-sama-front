import { ChangeEvent, useEffect, useState } from 'react';
import './Menu.scss';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeSearchInputValue } from '../../store/reducers/searchBarMenu';
import { changeFilteredArticle } from '../../store/reducers/article';

function Menu() {
  const dispatch = useAppDispatch();

  const [categoriesIsVisible, setCategoriesIsVisible] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const categories = useAppSelector(
    (state) => state.categories.list_categories
  );

  const articles = useAppSelector((state) => state.article.list_articles);

  const searchBarInputValue = useAppSelector(
    (state) => state.searchBar.searchBarInputValue
  );

  const filterArticle = (searchValue: string) => {
    const filteredArticle = articles.filter(
      (article) =>
        article.article.title.toLowerCase().includes(searchValue) &&
        article.article.transaction_id === null
    );

    dispatch(changeFilteredArticle(filteredArticle));
  };

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

    dispatch(changeSearchInputValue(newSearchValue));
    filterArticle(newSearchValue);
  }

  useEffect(() => {
    const filter = () => {
      const filteredArticle = articles.filter(
        (article) =>
          article.article.title.toLowerCase().includes('') &&
          article.article.transaction_id === null
      );
      dispatch(changeFilteredArticle(filteredArticle));
    };
    filter();
  }, [dispatch, articles]);

  return (
    <>
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
      <div
        className={clsx('home-menu', { 'home-menu--hidden': !menuIsVisible })}
      >
        <div className="home-menu__container">
          <img className="home-menu__logo" src="/assets/logo/logo.png" alt="" />

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
    </>
  );
}

export default Menu;
