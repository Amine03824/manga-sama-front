import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import './Login.scss';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeLoginFormInputsField,
  loginUser,
} from '../../store/reducers/loginForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function Login() {
  const dispatch = useAppDispatch();

  const emailInputValue = useAppSelector(
    (state) => state.loginForm.credentials.email
  );

  const passwordInputValue = useAppSelector(
    (state) => state.loginForm.credentials.password
  );

  const error = useAppSelector((state) => state.loginForm.error);

  const handleOnChangeInputField = (
    event: ChangeEvent<HTMLInputElement>,
    name: 'email' | 'password'
  ) => {
    dispatch(
      changeLoginFormInputsField({
        value: event.target.value,
        fieldName: name,
      })
    );
  };

  const handleSubmitLoginForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      loginUser({ email: emailInputValue, password: passwordInputValue })
    );
  };

  return (
    <Page>
      {error && <ErrorMessage errorContent={error} />}
      <div className="login">
        <div className="login__area">
          <h2 className="login__area-title">Connexion</h2>
          <div className="login__area-fields">
            <form
              action="/"
              method="post"
              className="login__area-form"
              onSubmit={handleSubmitLoginForm}
            >
              <ul className="login__area-lists">
                <li className="login__area-item">
                  <input
                    onChange={(event) =>
                      handleOnChangeInputField(event, 'email')
                    }
                    value={emailInputValue}
                    type="text"
                    placeholder="Email"
                  />
                </li>
                <li className="login__area-item">
                  <input
                    onChange={(event) =>
                      handleOnChangeInputField(event, 'password')
                    }
                    value={passwordInputValue}
                    type="text"
                    placeholder="Mot de passe"
                  />
                </li>
              </ul>
              <button type="submit" className="login__area-button">
                Se connecter
                <img
                  src="public/assets/icons/CheckMarkIcon.png"
                  alt="login-icon"
                  className="login__area-button-icon"
                />
              </button>
            </form>
          </div>
          <div className="login__area-valid-login">
            <Link to="/" className="login__area-password">
              Mot de passe oublié ?
            </Link>
          </div>
          <Link to="/signup" className="login__area-signup">
            Pas encore membre ?
            <span className="login__area-signup-link">Créer un compte</span>
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
