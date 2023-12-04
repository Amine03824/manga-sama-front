import './MobileNav.scss';

function MobileNav() {
  return (
    <div className="MobileNav">
      <button className="MobileNav__element">
        <img
          src="public\assets\icons\MobileNavSearchIcon.png"
          className="MobileNav__icon"
        />
        <p className="MobileNav__icon_title">Rechercher</p>
      </button>
      <button className="MobileNav__element">
        <img
          src="public\assets\icons\MobileNavPublishIcon.png"
          className="MobileNav__icon"
        />
        <p className="MobileNav__icon_title">Publier</p>
      </button>
      <button className="MobileNav__element">
        <img
          src="public\assets\icons\MobileNavAccountIcon.png"
          className="MobileNav__icon"
        />
        <p className="MobileNav__icon_title">Mon compte</p>
      </button>
    </div>
  );
}

export default MobileNav;
