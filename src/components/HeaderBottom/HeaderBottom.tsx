import { Link } from 'react-router-dom';
import './HeaderBottom.scss';

function HeaderBottom() {
  return (
    <div className="header__bottom">
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
        <Link to="createarticle" className="header__bottom_button-link">
          Publier une annonce
          <img
            src="/assets/icons/add.png"
            alt="logo-publier-une-annonce"
            className="header__bottom_button-logo"
          />
        </Link>
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

export default HeaderBottom;
