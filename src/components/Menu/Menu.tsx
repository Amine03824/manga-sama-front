import { useState } from 'react';
import './Menu.scss';
import clsx from 'clsx';

function Menu() {
  const [categoriesIsVisible, setCategoriesIsVisible] = useState(false);
  function handleOnCategoryButton() {
    setCategoriesIsVisible(!categoriesIsVisible);
  }

  return (
    <div className="home-menu home-menu--hidden">
      <div className="home-menu__container">
        <img className="home-menu__logo" src="/assets/logo/logo.png" alt="" />
        <button type="button" className="home-menu__toggle-button">
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
            <li className="nav__categories-item">Shonen</li>
            <li className="nav__categories-item">Seinen</li>
            <li className="nav__categories-item">Shojo</li>
            <li className="nav__categories-item">Kodomo</li>
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
