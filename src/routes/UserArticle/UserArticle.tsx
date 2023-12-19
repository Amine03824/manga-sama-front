import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import { useAppDispatch } from '../../hooks/redux';
import { LocalStorage } from '../../utils/LocalStorage';
import './UserArticle.scss';
import { TArticle } from '../../@types';
import { getArticleByUser } from '../../store/reducers/userPage';
import { deleteArticle } from '../../store/reducers/article';

function UserArticle() {
  const dispatch = useAppDispatch();

  const userID = LocalStorage.getItem('user').id;

  const [userArticle, setUserArticle] = useState<TArticle[]>([]);

  const filterArticle = async () => {
    await dispatch(getArticleByUser(userID));

    const getArticles = LocalStorage.getItem('userArticle');
    const filteredArticles = getArticles.filter(
      (article: { transaction_id: null }) => article.transaction_id === null
    );
    setUserArticle(filteredArticles);
  };

  useEffect(() => {
    const fetch = async () => {
      await dispatch(getArticleByUser(userID));

      const getArticles = LocalStorage.getItem('userArticle');
      const filteredArticles = getArticles.filter(
        (article: { transaction_id: null }) => article.transaction_id === null
      );
      setUserArticle(filteredArticles);
    };
    fetch();
  }, [dispatch, userID]);

  const deleteArticleOnClick = (articleId: number) => {
    dispatch(deleteArticle(articleId));
    filterArticle();
  };

  return (
    <Page>
      <div className="user-transactions" />
      <div className="user-transactions__top_container">
        <h2 className="user-transactions__top_title">
          Mes annonces en ligne :
        </h2>
      </div>
      <div className="user-transactions__main_container">
        <ul className="user-transactions__cards">
          {userArticle.map((article) => (
            <li key={article.id} className="user-transactions__cards_item">
              <img
                className="user-transactions__cards_item-img"
                src={article.image_url}
                alt="article"
              />
              <div className="user-transactions__cards_item-content">
                <h4 className="user-transactions__cards_item-content-title">
                  {article.title}
                </h4>
                <p className="user-transactions__cards_item-content-price">
                  {article.price} €
                </p>
              </div>
              <button
                className="user-transactions__cards_item-state"
                type="button"
                onClick={() => {
                  deleteArticleOnClick(article.id);
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </Page>
  );
}

export default UserArticle;
