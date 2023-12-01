import './Menu.scss';

function Menu() {
  return (
    <div className="home-menu">
      <div className="home-menu__container">
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
          <button type="button" className="nav__categories-button">
            Catégories
          </button>
          <ul className="nav__categories-list">
            <li className="nav__categories-item">Shonen</li>
            <li className="nav__categories-item">Seinen</li>
            <li className="nav__categories-item">Shojo</li>
            <li className="nav__categories-item">Kodomo</li>
          </ul>
        </nav>
      </div>

      <div className="home-menu__socials">
        <a href="/" className="home-menu__socials-icon">
          FB
        </a>
        <a href="/" className="home-menu__socials-icon">
          INSTA
        </a>
        <a href="/" className="home-menu__socials-icon">
          X
        </a>
      </div>
    </div>
  );
}

export default Menu;
