import { useState } from 'react';
import './MobileNav.scss';
import clsx from 'clsx';

function MobileNav() {
  const [clickedButton, setClickedButton] = useState(null);

  function handleClickedButton(buttonType) {
    setClickedButton(clickedButton === buttonType ? null : buttonType);
  }

  return (
    <div className="MobileNav">
      <button
        className={clsx('MobileNav__element', {
          active: clickedButton === 'search',
        })}
        onClick={() => handleClickedButton('search')}
        type="button"
      >
        <img
          src={`public/assets/icons/MobileNavSearchIcon${
            clickedButton === 'search' ? 'Red' : ''
          }.png`}
          className="MobileNav__icon"
        />
        <p
          className={clsx('MobileNav__icon_title', {
            active: clickedButton === 'search',
          })}
        >
          Rechercher
        </p>
      </button>
      <button
        className={clsx('MobileNav__element', {
          active: clickedButton === 'publish',
        })}
        onClick={() => handleClickedButton('publish')}
        type="button"
      >
        <img
          src={`public/assets/icons/MobileNavPublishIcon${
            clickedButton === 'publish' ? 'Red' : ''
          }.png`}
          className="MobileNav__icon"
        />
        <p
          className={clsx('MobileNav__icon_title', {
            active: clickedButton === 'publish',
          })}
        >
          Publier
        </p>
      </button>
      <button
        className={clsx('MobileNav__element', {
          active: clickedButton === 'account',
        })}
        onClick={() => handleClickedButton('account')}
        type="button"
      >
        <img
          src={`public/assets/icons/MobileNavAccountIcon${
            clickedButton === 'account' ? 'Red' : ''
          }.png`}
          className="MobileNav__icon"
        />
        <p
          className={clsx('MobileNav__icon_title', {
            active: clickedButton === 'account',
          })}
        >
          Mon compte
        </p>
      </button>
    </div>
  );
}

export default MobileNav;
