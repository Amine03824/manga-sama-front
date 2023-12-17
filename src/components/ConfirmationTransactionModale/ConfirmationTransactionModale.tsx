import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { acceptTransaction } from '../../store/reducers/transaction';
import { LocalStorage } from '../../utils/LocalStorage';
import './ConfirmationTransactionModale.scss';
import { setInfo } from '../../store/reducers/loading';

function ConfirmationTransactionModale() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const sellerID = useAppSelector(
    (state) => state.article.viewedArticle?.user.id
  );
  const articleID = useAppSelector(
    (state) => state.article.viewedArticle?.article.id
  );
  const buyerID = LocalStorage.getItem('user').user.id;

  const handleClickAcceptTransaction = async () => {
    const data = await dispatch(
      acceptTransaction({
        sellerID,
        articleID,
        buyerID,
      })
    );

    if (data.payload.status === 200) {
      dispatch(
        setInfo(
          " Félicitations ! Vous serez bientôt propriétaire d'un ou plusieurs nouveaux mangas !"
        )
      );
      return navigate('/');
    }

    throw new Error('Transaction échouéeS');
  };

  return (
    <div className="transaction__modale">
      <h2 className="transaction__modale-warning">Attention !</h2>
      <p className="transaction__modale-content">
        Manga-Sama se charge uniquement de mettre en relation les utilisateurs
        entre eux. Un mail de confirmation avec les coordonnées de lautre partie
        va vous être envoyé afin que vous puissiez procéder à la vente. Nous
        travaillons actuellement afin de mettre en place un moyen de paiement
        sécurisé sur le site
      </p>
      <button
        onClick={handleClickAcceptTransaction}
        className="transaction__modale-btn"
        type="button"
      >
        Nous mettre en relation
      </button>
    </div>
  );
}

export default ConfirmationTransactionModale;
