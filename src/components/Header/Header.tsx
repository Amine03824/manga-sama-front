import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__top_container">
        <div className="header__top_container-button">
          <button type="button" className="header__top_container-button-menu">
            <img src="public/assets/menuPink.png" alt="logo-menu-burger" />
          </button>
        </div>
        <img
          src="public/assets/logo.png"
          alt="logo-manga-sama"
          className="header__logo"
        />
        <div className="header__top_container-links">
          <div className="header__top_container-links-signup">
            <a href="/" className="header__top_container-signup">
              Inscription
              <img src="public/assets/register-icon.png" alt="signup-logo" />
            </a>
          </div>
          <div className="header__top_container-links-login">
            <a href="/" className="header__top_container-login">
              Connexion
              <img src="public/assets/user-icon.png" alt="login-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="header__bottom_container">
        <div className="header__bottom_content">
          <h2 className="header__bottom_content-title">
            Bienvenue sur Manga-Sama
          </h2>
          <h3 className="header__bottom_content-text">
            Leader français de la vente de mangas entre particulier
          </h3>
        </div>
      </div>
      <div className="header__bottom_button">
        <a href="/" className="header__bottom_button-link">
          Publier une annonce
          <img
            src="public/assets/add.png"
            alt="logo-publier-une-annonce"
            className="header__bottom_button-logo"
          />
        </a>
      </div>
      <div className="header__bottom_input-area">
        <input
          type="text"
          placeholder="Rechercher un manga"
          className="header__bottom_input-text"
        />
      </div>
    </div>
  );
}

export default Header;
