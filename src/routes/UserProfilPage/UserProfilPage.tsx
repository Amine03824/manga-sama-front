import { Link } from 'react-router-dom';
import MobileNav from '../../components/MobileNav/MobileNav';
import Page from '../../components/Page/Page';
import './UserProfilPage.scss';
import Footer from '../../components/Footer/Footer';

function UserProfilPage() {
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
          <h3 className="userpage__infos-title">Mes informations</h3>
          <div className="userpage__infos-area">
            <ul className="userpage__infos-list">
              <li className="userpage__infos-item">Pseudo : TataBurger</li>
              <li className="userpage__infos-item">Prénom : Amine</li>
              <li className="userpage__infos-item">Nom : Trujillo</li>
              <li className="userpage__infos-item">Adresse : Paris</li>
              <li className="userpage__infos-item">
                Mail : xXSnip3r78xX@gmail.fr
              </li>
              <li className="userpage__infos-item">MDP : azerty</li>
            </ul>
            <div className="userpage__infos-footer">
              <button type="button" className="userpage__infos-button">
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
      <Footer />
    </Page>
  );
}

export default UserProfilPage;
