import './Home.scss';

type Article = {
  id: number;
  avatar_url: string;
  name: string;
  price: number;
  localisation: string;
  tome: number;
};
type HomeProps = {
  articles: Article[];
};

function Home({ articles }: HomeProps) {
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
              <li className="home__articles-item" key={article.id}>
                <img
                  src="public/assets/icons/naruto01.jpg"
                  alt="/"
                  className="home__articles-item-image"
                />
                <div className="home__articles-info">
                  <h3 className="home__articles-info-title">{article.name}</h3>
                  <p className="home__articles-info-tome">
                    Tome {article.tome}
                  </p>
                  <p className="home__articles-info-price">{article.price} €</p>
                  <p className="home__articles-info-localisation">
                    {article.localisation}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
