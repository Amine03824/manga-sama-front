import './Category.scss';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useAppSelector } from '../../hooks/redux';

function Category() {
  const articles = useAppSelector((state) => state.article.list_articles);
  const { slug } = useParams();
  const filteredArticles = articles.filter((article) => article.slug === slug);

  return (
    <div className="category">
      <div className="category__articles">
        <div className="category__articles-title-area">
          <h2 className="category__articles-title">
            {`Les dernières annonces de ${slug}`}
            <span>
              <img
                src="/assets/icons/register-icon.png"
                alt="icon"
                className="category__articles-title-icon"
              />
            </span>
          </h2>
        </div>
        <div className="category__articles-area">
          <ul className="category__articles-list">
            {filteredArticles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id}>
                <li className="category__articles-item">
                  <img
                    src={article.image_url}
                    alt="/"
                    className="category__articles-item-image"
                  />
                  <div className="category__articles-info">
                    <h3 className="category__articles-info-title">
                      {article.title}
                    </h3>
                    <p className="category__articles-info-tome">
                      Tome {article.manga.volume}
                    </p>
                    <p className="category__articles-info-price">
                      {article.price} €
                    </p>
                    <p className="category__articles-info-localisation">
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

export default Category;
