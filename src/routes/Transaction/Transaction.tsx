import ConfirmationTransactionModale from '../../components/ConfirmationTransactionModale/ConfirmationTransactionModale';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import './Transaction.scss';

function Transaction() {
  return (
    <Page>
      <div className="transaction">
        <div className="transaction__area">
          <h2 className="transaction__area-top-title">
            Récapitulatif de la commande :
          </h2>
          <div className="transaction__area-top">
            <div className="transaction__area-top-profile">
              <h2>Je suis vendeur</h2>
              <img
                src="/assets/logo/tonio.png"
                className="transaction__area-top-profile-img"
                alt="logo"
              />
              <h3 className="transaction__area-top-profile-name">
                Anthony Trujillo
              </h3>
              <p className="transaction__area-top-profile-location">
                La Rochelle
              </p>
            </div>
            <img
              src="/assets/icons/arrow-point-to-right.png"
              alt="arrow-right icon"
              className="transaction__area-arrowicon"
            />
            <div className="transaction__area-top-article">
              <img
                src="/assets/icons/naruto01.jpg"
                alt="article"
                className="transaction__area-top-article-image"
              />
              <p className="transaction__area-top-article-title">Naruto</p>
              <p className="transaction__area-top-article-volume">Tome 12</p>

              <p className="transaction__area-top-article-price">30 €</p>
            </div>
            <img
              src="/assets/icons/arrow-point-to-right.png"
              alt="arrow-right icon"
              className="transaction__area-arrowicon"
            />
            <div className="transaction__area-top-profile">
              <h2>Je suis acheteur</h2>
              <img
                src="/assets/logo/houd.png"
                alt="logo"
                className="transaction__area-top-profile-img"
              />
              <h3 className="transaction__area-top-profile-name">
                Houdini du 78
              </h3>
              <p className="transaction__area-top-profile-location">
                Montigny-le-Bretonneux
              </p>
            </div>
          </div>
          <div className="transaction__area-bottom-button">
            <button type="button" className="transaction__button">
              Proceder au paiement
            </button>
          </div>
        </div>
      </div>
      {/* Modale de confirmation de transaction coucou */}
      <ConfirmationTransactionModale />
      <Footer />
    </Page>
  );
}

export default Transaction;
