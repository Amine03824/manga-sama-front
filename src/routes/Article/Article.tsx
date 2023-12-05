import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import './Article.scss';

function Article() {
  return (
    <Page>
      <div className="Article">
        <div className="Article__container_top">
          <div className="Article__container_top-left">
            <img
              className="Article__container_top-left-img"
              src="public\assets\icons\naruto01.jpg"
              alt="image de couverture du manga"
            ></img>
          </div>
          <div className="Article__container_top-right">
            <div className="Article__container_top-right-title">
              <h2 className="Article__container_top-right-title-booktitle">
                Naruto
              </h2>
              <h4 className="Article__container_top-right-title-booksubtitle">
                Volume 3
              </h4>
            </div>

            <p className="Article__container_top-right-price">59 €</p>
            <div className="Article__container_top-right-state">
              <h5 className="Article__container_top-right-state-title">
                Etat de l'article :
              </h5>
              <p className="Article__container_top-right-state-described">
                Très bon état
              </p>
            </div>
            <div className="Article__container_top-right-soldby">
              <p className="Article__container_top-right-soldby-title">
                Vendu par :
              </p>
              <p className="Article__container_top-right-soldby-sellername">
                Jean_guy_17
              </p>
            </div>
          </div>
        </div>
        <div className="Article__container_bottom">
          <p className="Article__container_bottom-title">Description :</p>
          <p className="Article__container_bottom-content">
            Livre de type Naruto avec des mangas de type japonais se lisant à
            l’envers. Fait en papier.
          </p>
        </div>
        <button className="Article__purchase_btn">
          Acheter{' '}
          <img
            className="Article__purchase_img"
            src="public\assets\icons\cart-icon-32px.png"
            alt="icône de caddy"
          ></img>
        </button>
      </div>

      <Footer />
    </Page>
  );
}

export default Article;
