import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import MobileNav from '../../components/MobileNav/MobileNav';
import Page from '../../components/Page/Page';
import './UserProfilPage.scss';
import Footer from '../../components/Footer/Footer';
import { LocalStorage } from '../../utils/LocalStorage';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  modifyInputUserInfo,
  modifyUser,
} from '../../store/reducers/userModify';

function UserProfilPage() {
  const dispatch = useAppDispatch();

  const [pseudoInputIsVisible, setPseudoInputIsVisible] = useState(false);
  const [firstNameInputIsVisible, setFirstNameInputIsVisible] = useState(false);
  const [lastNameInputIsVisible, setLastNameInputIsVisible] = useState(false);
  const [adressInputIsVisible, setAdressInputIsVisible] = useState(false);
  const [cityInputIsVisible, setCityInputIsVisible] = useState(false);
  const [zipCodeInputIsVisible, setZipCodeInputIsVisible] = useState(false);
  const [phoneNumberInputIsVisible, setPhoneNumberInputIsVisible] =
    useState(false);

  // const firstNameInputIsVisible = useAppSelector(
  //   (state) => state.userModify.inputsIsVisible.firstName
  // );
  // const lastNameInputIsVisible = useAppSelector(
  //   (state) => state.userModify.inputsIsVisible.lastName
  // );
  // const pseudoInputIsVisible = useAppSelector(
  //   (state) => state.userModify.inputsIsVisible.pseudo
  // );
  // const adressInputIsVisible = useAppSelector(
  //   (state) => state.userModify.inputsIsVisible.adress
  // );
  // const cityInputIsValue = useAppSelector(
  //   (state) => state.userModify.inputsIsVisible.city
  // );
  // const zipcodeInputisVisible = useAppSelector(
  //   (state) => state.userModify.inputsIsVisible.zipCode
  // );
  // const phoneNumberIsVisible = useAppSelector(
  //   (state) => state.userModify.inputsIsVisible.phoneNumber
  // );

  const error = useAppSelector((state) => state.userModify.error);

  const handleChangeInputUserInfo = (
    event: ChangeEvent<HTMLInputElement>,
    name:
      | 'firstName'
      | 'lastName'
      | 'pseudo'
      | 'adress'
      | 'city'
      | 'zipCode'
      | 'phoneNumber'
  ): void => {
    dispatch(
      modifyInputUserInfo({
        fieldName: name,
        value: event.target.value,
      })
    );
  };

  const handleValidateUserInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Page>
      <div className="userpage">
        <div className="userpage__picture">
          <img
            src="/assets/logo/logo.png"
            alt="user"
            className="userpage__picture-user"
          />
          <Link to="/">
            <p className="userpage__picture-modify">
              Changer la photo de profil
            </p>
          </Link>
        </div>
        <div className="userpage__infos">
          <form
            onSubmit={handleValidateUserInfo}
            className="userpage__infos-form"
          >
            <h3 className="userpage__infos-title">Mes informations</h3>
            <p>Double cliquez sur un champ pour le modifier</p>
            <div className="userpage__infos-area">
              <ul className="userpage__infos-list">
                <li className="userpage__infos-item">
                  <p
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': pseudoInputIsVisible,
                    })}
                    onDoubleClick={() => {
                      setPseudoInputIsVisible(true);
                    }}
                  >
                    Pseudo : {LocalStorage.getItem('user').user.pseudo}
                  </p>
                  <input
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !pseudoInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <p
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden':
                        firstNameInputIsVisible,
                    })}
                    onDoubleClick={() => {
                      setFirstNameInputIsVisible(true);
                    }}
                  >
                    Prénom : {LocalStorage.getItem('user').user.firstName}
                  </p>
                  <input
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !firstNameInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <p
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': lastNameInputIsVisible,
                    })}
                    onDoubleClick={() => {
                      setLastNameInputIsVisible(true);
                    }}
                  >
                    Nom de famille :{' '}
                    {LocalStorage.getItem('user').user.lastName}
                  </p>
                  <input
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !lastNameInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <p
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': adressInputIsVisible,
                    })}
                    onDoubleClick={() => {
                      setAdressInputIsVisible(true);
                    }}
                  >
                    Adresse : {LocalStorage.getItem('user').user.adress}
                  </p>
                  <input
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !adressInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <p
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': cityInputIsVisible,
                    })}
                    onDoubleClick={() => {
                      setCityInputIsVisible(true);
                    }}
                  >
                    Ville : {LocalStorage.getItem('user').user.city}
                  </p>
                  <input
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !cityInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <p
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': zipCodeInputIsVisible,
                    })}
                    onDoubleClick={() => {
                      setZipCodeInputIsVisible(true);
                    }}
                  >
                    Code Postal : {LocalStorage.getItem('user').user.zipCode}
                  </p>
                  <input
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !zipCodeInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <p
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden':
                        phoneNumberInputIsVisible,
                    })}
                    onDoubleClick={() => {
                      setPhoneNumberInputIsVisible(true);
                    }}
                  >
                    Numéro de téléphone :
                    {LocalStorage.getItem('user').user.phoneNumber}
                  </p>
                  <input
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden':
                        !phoneNumberInputIsVisible,
                    })}
                  />
                </li>
              </ul>
              <div className="userpage__infos-footer">
                <button type="button" className="userpage__infos-button">
                  Modifier
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <MobileNav />
      <Footer />
    </Page>
  );
}

export default UserProfilPage;
