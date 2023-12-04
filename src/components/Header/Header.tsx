import './Header.scss';

type HeaderProps = {
  menuIsVisible: boolean;
  setMenuIsVisible: (setMenuIsVisible: boolean) => void;
};

function Header({ menuIsVisible, setMenuIsVisible }: HeaderProps) {
  function handleOnClickMenuButton() {
    setMenuIsVisible(!menuIsVisible);
  }

  return (
    <div className="header">
      <div className="header__top_container">
        <div className="header__top_container-button">
          <button
            onClick={handleOnClickMenuButton}
            type="button"
            className="header__top_container-button-menu"
          >
            <img src="/assets/icons/menuPink.png" alt="logo-menu-burger" />
          </button>
        </div>
        <img
          src="/assets/logo/logo.png"
          alt="logo-manga-sama"
          className="header__logo"
        />
        <div className="header__top_container-links">
          <div className="header__top_container-links-signup">
            <a href="/" className="header__top_container-signup">
              Inscription
              <img src="/assets/icons/register-icon.png" alt="signup-logo" />
            </a>
          </div>
          <div className="header__top_container-links-login">
            <a href="/" className="header__top_container-login">
              Connexion
              <img src="/assets/icons/user-icon.png" alt="login-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
