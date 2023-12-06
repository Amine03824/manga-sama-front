import './Home.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useAppSelector } from '../../hooks/redux';

// type Article = {
//   id: number;
//   avatar_url: string;
//   name: string;
//   price: number;
//   localisation: string;
//   tome: number;
// };
// type HomeProps = {
//   articles: Article[];
// };

function Home() {
  const articles = useAppSelector((state) => state.articles.articles);

  return (
    <div className="home">
      <div className="home__articles">
        <div className="home__articles-title-area">
          <h2 className="home__articles-title">
            Les dernières annonces
            <span>
              <img
                src="public/assets/icons/register-icon.png"
                alt="icon"
                className="home__articles-title-icon"
              />
            </span>
          </h2>
        </div>
        <div className="home__articles-area">
          <ul className="home__articles-list">
            {articles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id}>
                <li className="home__articles-item" key={article.id}>
                  <img
                    src={article.image_url}
                    alt="/"
                    className="home__articles-item-image"
                  />
                  <div className="home__articles-info">
                    <h3 className="home__articles-info-title">
                      {article.title}
                    </h3>
                    <p className="home__articles-info-tome">
                      Tome {article.manga.volume}
                    </p>
                    <p className="home__articles-info-price">
                      {article.price} €
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
