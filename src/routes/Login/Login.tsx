import { Link } from 'react-router-dom';
import './Login.scss';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';

function Login() {
  return (
    <Page>
      <div className="login">
        <div className="login__area">
          <h2 className="login__area-title">Connexion</h2>
          <div className="login__area-fields">
            <form action="/" method="post" className="login__area-form">
              <ul className="login__area-lists">
                <li className="login__area-item">
                  <input type="text" placeholder="Nom d'utilisateur" />
                </li>
                <li className="login__area-item">
                  <input type="text" placeholder="Mot de passe" />
                </li>
              </ul>
            </form>
          </div>
          <div className="login__area-valid-login">
            <button type="button" className="login__area-button">
              Se connecter
              <img
                src="public/assets/icons/CheckMarkIcon.png"
                alt="login-icon"
                className="login__area-button-icon"
              />
            </button>
            <Link to="/" className="login__area-password">
              Mot de passe oublié ?
            </Link>
          </div>
          <Link to="/signup" className="login__area-signup">
            Pas encore membre ?
            <span className="login__area-signup-link">Créer un compte</span>{' '}
          </Link>
        </div>
        <div className="login__logo-area">
          <img
            src="public/assets/logo/logo.png"
            alt="logo-manga-sama"
            className="login__logo"
          />
        </div>
      </div>
      <Footer />
    </Page>
  );
}

export default Login;
