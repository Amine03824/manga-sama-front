import './ConfirmationTransactionModale.scss';

function ConfirmationTransactionModale() {
  return (
    <div className="transaction__modale">
      <h2 className="transaction__modale-warning">Attention !</h2>
      <p className="transaction__modale-content">
        Manga-Sama se charge uniquement de mettre en relation les utilisateurs
        entre eux. Un mail de confirmation avec les coordonnées de chacun vont
        vous être envoyé afin que vous puissiez procéder à la vente. Nous
        travaillons actuellement afin de mettre en place un moyen de paiement
        sécurisé sur le site
      </p>
      <button className="transaction__modale-btn" type="button">
        Nous mettre en relation
      </button>
    </div>
  );
}

export default ConfirmationTransactionModale;
