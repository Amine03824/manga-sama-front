/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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

  const firstNameInput = useAppSelector(
    (state) => state.userModify.credentials.firstName
  );
  const lastNameInput = useAppSelector(
    (state) => state.userModify.credentials.lastName
  );
  const pseudoInput = useAppSelector(
    (state) => state.userModify.credentials.pseudo
  );
  const adressInput = useAppSelector(
    (state) => state.userModify.credentials.adress
  );
  const cityInput = useAppSelector(
    (state) => state.userModify.credentials.city
  );
  const zipcodeInput = useAppSelector(
    (state) => state.userModify.credentials.zipCode
  );
  const phoneNumberInput = useAppSelector(
    (state) => state.userModify.credentials.phoneNumber
  );

  // const error = useAppSelector((state) => state.userModify.error);

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
    const { user } = LocalStorage.getItem('user');

    const modifiedUser = {
      id: user.id,
      firstName: firstNameInput === '' ? user.firstName : firstNameInput,
      lastName: lastNameInput === '' ? user.lastName : lastNameInput,
      pseudo: pseudoInput === '' ? user.pseudo : pseudoInput,
      adress: adressInput === '' ? user.adress : adressInput,
      zipCode: zipcodeInput === '' ? user.zipCode : zipcodeInput,
      city: cityInput === '' ? user.city : cityInput,
      phoneNumber:
        phoneNumberInput === '' ? user.phoneNumber : phoneNumberInput,
    };

    dispatch(
      modifyUser({
        userCredentials: modifiedUser,
        id: user.id.toString(),
      })
    );
    // if (pseudoInput === '') {
    //   const { pseudo } = LocalStorage.getItem('user').user;
    // } else {
    //   const pseudo = pseudoInput;
    // }
    // if (firstNameInput === '') {
    //   const { firstName } = LocalStorage.getItem('user').user;
    // } else {
    //   const firstName = firstNameInput;
    // }
    // if (lastNameInput === '') {
    //   const { lastName } = LocalStorage.getItem('user').user;
    // } else {
    //   const lastName = lastNameInput;
    // }
    // if (adressInput === '') {
    //   const { adress } = LocalStorage.getItem('user').user;
    // } else {
    //   const adress = adressInput;
    // }
    // if (cityInput === '') {
    //   const { city } = LocalStorage.getItem('user').user;
    // } else {
    //   const city = cityInput;
    // }
    // if (zipcodeInput === '') {
    //   const { zipCode } = LocalStorage.getItem('user').user;
    // } else {
    //   const zipCode = zipcodeInput;
    // }
    // if (phoneNumberInput === '') {
    //   const { phoneNumber } = LocalStorage.getItem('user').user;
    // } else {
    //   const phoneNumber = phoneNumberInput;
    // }

    // dispatch(
    //   modifyUser({
    //     userCredentials({
    //     }),
    //   })
    // );
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
            <p>Cliquez sur un champ pour le modifier</p>
            <div className="userpage__infos-area">
              <ul className="userpage__infos-list">
                <li className="userpage__infos-item">
                  <button
                    type="button"
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': pseudoInputIsVisible,
                    })}
                    onClick={() => {
                      setPseudoInputIsVisible(true);
                    }}
                  >
                    Pseudo : {LocalStorage.getItem('user').user.pseudo}
                  </button>
                  <input
                    value={pseudoInput}
                    onChange={(event) => {
                      handleChangeInputUserInfo(event, 'pseudo');
                    }}
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !pseudoInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <button
                    type="button"
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden':
                        firstNameInputIsVisible,
                    })}
                    onClick={() => {
                      setFirstNameInputIsVisible(true);
                    }}
                  >
                    Prénom : {LocalStorage.getItem('user').user.firstName}
                  </button>
                  <input
                    value={firstNameInput}
                    onChange={(event) => {
                      handleChangeInputUserInfo(event, 'firstName');
                    }}
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !firstNameInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <button
                    type="button"
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': lastNameInputIsVisible,
                    })}
                    onClick={() => {
                      setLastNameInputIsVisible(true);
                    }}
                  >
                    Nom de famille :{' '}
                    {LocalStorage.getItem('user').user.lastName}
                  </button>
                  <input
                    value={lastNameInput}
                    onChange={(event) => {
                      handleChangeInputUserInfo(event, 'lastName');
                    }}
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !lastNameInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <button
                    type="button"
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': adressInputIsVisible,
                    })}
                    onClick={() => {
                      setAdressInputIsVisible(true);
                    }}
                  >
                    Adresse : {LocalStorage.getItem('user').user.adress}
                  </button>
                  <input
                    value={adressInput}
                    onChange={(event) => {
                      handleChangeInputUserInfo(event, 'adress');
                    }}
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !adressInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <button
                    type="button"
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': cityInputIsVisible,
                    })}
                    onClick={() => {
                      setCityInputIsVisible(true);
                    }}
                    onKeyDown={() => {
                      setPseudoInputIsVisible(true);
                    }}
                  >
                    Ville : {LocalStorage.getItem('user').user.city}
                  </button>
                  <input
                    value={cityInput}
                    onChange={(event) => {
                      handleChangeInputUserInfo(event, 'city');
                    }}
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !cityInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <button
                    type="button"
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden': zipCodeInputIsVisible,
                    })}
                    onClick={() => {
                      setZipCodeInputIsVisible(true);
                    }}
                  >
                    Code Postal : {LocalStorage.getItem('user').user.zipCode}
                  </button>
                  <input
                    value={zipcodeInput}
                    onChange={(event) => {
                      handleChangeInputUserInfo(event, 'zipCode');
                    }}
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden': !zipCodeInputIsVisible,
                    })}
                  />
                </li>
                <li className="userpage__infos-item">
                  <button
                    type="button"
                    className={clsx('userpage__infos-content', {
                      'userpage__infos-content--hidden':
                        phoneNumberInputIsVisible,
                    })}
                    onClick={() => {
                      setPhoneNumberInputIsVisible(true);
                    }}
                  >
                    Numéro de téléphone :
                    {LocalStorage.getItem('user').user.phoneNumber}
                  </button>
                  <input
                    value={phoneNumberInput}
                    onChange={(event) => {
                      handleChangeInputUserInfo(event, 'phoneNumber');
                    }}
                    type="text"
                    className={clsx('userpage__infos-input', {
                      'userpage__infos-input--hidden':
                        !phoneNumberInputIsVisible,
                    })}
                  />
                </li>
              </ul>
              <div className="userpage__infos-footer">
                <button type="submit" className="userpage__infos-button">
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
