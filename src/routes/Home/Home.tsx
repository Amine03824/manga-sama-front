import './Home.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeFilteredArticle,
  getArticles,
} from '../../store/reducers/article';
import Message from '../../components/Message/Message';

function Home() {
  const articlesFiltered = useAppSelector(
    (state) => state.article.filteredArticles
  );
  // console.log('Filtered Articles in Home:', articlesFiltered);

  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.article.list_articles);
  const messageTransaction = useAppSelector(
    (state) => state.transaction.messageTransaction
  );
  useEffect(() => {
    dispatch(changeFilteredArticle(articles));
  }, [dispatch, articles]);
  return (
    <div className="home">
      {messageTransaction && <Message message_content={messageTransaction} />}
      <div className="home__articles">
        <div className="home__articles-title-area">
          <h2 className="home__articles-title">
            Les dernières annonces
            <span>
              <img
                src="assets/icons/register-icon.png"
                alt="icon"
                className="home__articles-title-icon"
              />
            </span>
          </h2>
        </div>
        <div className="home__articles-area">
          <ul className="home__articles-list">
            {articlesFiltered.map((article) => (
              <Link
                to={`/article/${article.article.id}`}
                key={article.article.id}
              >
                <li className="home__articles-item">
                  <img
                    src={article.mangas[0].cover_url}
                    alt="/"
                    className="home__articles-item-image"
                  />
                  <div className="home__articles-info">
                    <h3 className="home__articles-info-title">
                      {article.article.title}
                    </h3>
                    {/* <p className="home__articles-info-tome">
                      Tome {article.manga.volume}
                    </p> */}
                    <p className="home__articles-info-price">
                      {article.article.price} €
                    </p>

                    <p className="home__articles-info-localisation">
                      {article.user.city}
                    </p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
