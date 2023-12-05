import './Home.scss';

function Home() {
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
            <li className="home__articles-item">
              <img
                src="public/assets/icons/naruto01.jpg"
                alt="/"
                className="home__articles-image"
              />
              <div className="home__articles-info">
                <h3 className="home__articles-info-title">Nom du manga</h3>
                <p className="home__articles-info-price">50€</p>
                <p className="home__articles-info-localisation">Konoha</p>
              </div>
            </li>
            <li className="home__articles-item">
              <img
                src="public/assets/icons/naruto01.jpg"
                alt="/"
                className="home__articles-image"
              />
              <div className="home__articles-info">
                <h3 className="home__articles-info-title">Nom du manga</h3>
                <p className="home__articles-info-price">50€</p>
                <p className="home__articles-info-localisation">Konoha</p>
              </div>
            </li>
            <li className="home__articles-item">
              <img
                src="public/assets/icons/naruto01.jpg"
                alt="/"
                className="home__articles-image"
              />
              <div className="home__articles-info">
                <h3 className="home__articles-info-title">Nom du manga</h3>
                <p className="home__articles-info-price">50€</p>
                <p className="home__articles-info-localisation">Konoha</p>
              </div>
            </li>
            <li className="home__articles-item">
              <img
                src="public/assets/icons/naruto01.jpg"
                alt="/"
                className="home__articles-image"
              />
              <div className="home__articles-info">
                <h3 className="home__articles-info-title">Nom du manga</h3>
                <p className="home__articles-info-price">50€</p>
                <p className="home__articles-info-localisation">Konoha</p>
              </div>
            </li>
            <li className="home__articles-item">
              <img
                src="public/assets/icons/naruto01.jpg"
                alt="/"
                className="home__articles-image"
              />
              <div className="home__articles-info">
                <h3 className="home__articles-info-title">Nom du manga</h3>
                <p className="home__articles-info-price">50€</p>
                <p className="home__articles-info-localisation">Konoha</p>
              </div>
            </li>
            <li className="home__articles-item">
              <img
                src="public/assets/icons/naruto01.jpg"
                alt="/"
                className="home__articles-image"
              />
              <div className="home__articles-info">
                <h3 className="home__articles-info-title">Nom du manga</h3>
                <p className="home__articles-info-price">50€</p>
                <p className="home__articles-info-localisation">Konoha</p>
              </div>
            </li>
            <li className="home__articles-item">
              <img
                src="public/assets/icons/naruto01.jpg"
                alt="/"
                className="home__articles-image"
              />
              <div className="home__articles-info">
                <h3 className="home__articles-info-title">Nom du manga</h3>
                <p className="home__articles-info-price">50€</p>
                <p className="home__articles-info-localisation">Konoha</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
