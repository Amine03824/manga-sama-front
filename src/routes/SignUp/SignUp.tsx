/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */

import { ChangeEvent, FormEvent } from 'react';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeSignUpFormInputFields,
  createUser,
} from '../../store/reducers/signUpForm';
import './SignUp.scss';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function SignUp() {
  const dispatch = useAppDispatch();

  const pseudoInputValue = useAppSelector(
    (state) => state.signUpForm.credentials.pseudo
  );
  const emailInputValue = useAppSelector(
    (state) => state.signUpForm.credentials.email
  );
  const passwordInputValue = useAppSelector(
    (state) => state.signUpForm.credentials.password
  );
  const passwordBisInputValue = useAppSelector(
    (state) => state.signUpForm.credentials.password_bis
  );
  const error = useAppSelector((state) => state.signUpForm.signUpError);

  function handleChangeInputValue(
    event: ChangeEvent<HTMLInputElement>,
    name: 'email' | 'password' | 'pseudo' | 'password_bis'
  ): void {
    dispatch(
      changeSignUpFormInputFields({
        fieldName: name,
        value: event.target.value,
      })
    );
  }

  function handleSubmitSignUpForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    dispatch(
      createUser({
        pseudo: pseudoInputValue,
        email: emailInputValue,
        password: passwordInputValue,
      })
    );
  }

  return (
    <Page>
      {error && <ErrorMessage errorContent={error} />}
      <div className="signUp">
        <div className="signUp__logo-container">
          <img
            className="signUp__logo"
            src="public/assets/logo/logo.png"
            alt="logo-Manga-Sama"
          />
        </div>
        <div className="signUp__area">
          <h2 className="signUp__area-title">Création de compte</h2>
          <div className="signUp__area-fields">
            <form
              action="/"
              method="post"
              className="signUp__area-form"
              onSubmit={handleSubmitSignUpForm}
            >
              <ul className="signUp__area-lists">
                <li className="signUp__area-item">
                  <input
                    value={pseudoInputValue}
                    type="text"
                    placeholder="Nom d'utilisateur"
                    onChange={(event) =>
                      handleChangeInputValue(event, 'pseudo')
                    }
                  />
                </li>
                <li className="signUp__area-item signUp__area-item--email">
                  <input
                    value={emailInputValue}
                    type="email"
                    placeholder="E-mail"
                    onChange={(event) => handleChangeInputValue(event, 'email')}
                  />
                </li>
                <li className="signUp__area-item">
                  <input
                    value={passwordInputValue}
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(event) =>
                      handleChangeInputValue(event, 'password')
                    }
                  />
                </li>
                <li className="signUp__area-item">
                  <input
                    value={passwordBisInputValue}
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    onChange={(event) =>
                      handleChangeInputValue(event, 'password_bis')
                    }
                  />
                </li>
              </ul>
              <button type="submit" className="signUp__area-button">
                Valider
                <img
                  src="public/assets/icons/CheckMarkIcon.png"
                  alt="check-button-icon"
                  className="signUp__area-button-icon"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}

export default SignUp;
