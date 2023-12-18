/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import './Article.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { findArticle } from '../../store/selectors/articles';

import { changeUserInfo } from '../../store/reducers/userPage';
import { changeViewedArticle } from '../../store/reducers/article';

function Article() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  if (!id) {
    throw new Error('id is missing');
  }

  // const articles = useAppSelector((state) => state.article.list_articles);

  const parsedId = parseInt(id, 10);

  const article = useAppSelector((state) =>
    findArticle(state.article.list_articles, parsedId)
  );

  if (!article) {
    throw new Error(`Article with id ${parsedId} not found`);
  }

  // const articles = useAppSelector((state) => state.article.list_articles);
  // const article = articles.find((testedArticle) => {
  //   return testedArticle.id === parsedId;
  // });
  useEffect(() => {
    dispatch(changeUserInfo(article.user));
    dispatch(changeViewedArticle(article));
  });
  return (
    <Page>
      <div className="Article">
        <div className="Article__container_top">
          <div className="Article__container_top-left">
            <img
              className="Article__container_top-left-img"
              src={article.mangas[0].cover_url}
              alt="couverture du manga"
            />
          </div>
          <div className="Article__container_top-right">
            <div className="Article__container_top-right-title">
              <h2 className="Article__container_top-right-title-booktitle">
                {article.article.title}
              </h2>
              {article.mangas.map((manga) => (
                <h4
                  key={manga.code_isbn}
                  className="Article__container_top-right-title-booksubtitle"
                >
                  Volume {manga.volume}
                </h4>
              ))}
            </div>

            <p className="Article__container_top-right-price">
              {article.article.price}€
            </p>

            <div className="Article__container_top-right-description">
              <p className="Article__container_top-right-description-title">
                Description :
              </p>
              <p className="Article__container_top-right-description-content">
                {article.article.description}
              </p>
            </div>

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

              <Link to={`/article/user/${article.user.id}`}>
                <p className="Article__container_top-right-soldby-sellername">
                  {article.user.pseudo}
                </p>
              </Link>
            </div>
            <Link to={`/article/${article.user.id}/transaction`}>
              <button
                type="button"
                className="Article__container_top-right-purchase-btn"
              >
                Acheter
                <img
                  className="Article__container_top-right-img"
                  src="\assets\icons\cart-icon-32px.png"
                  alt="icône de caddy"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="Article__container_bottom">
          <p className="Article__container_bottom-title">Description :</p>
          <p className="Article__container_bottom-content">
            {article.article.description}
          </p>
        </div>
        <Link to={`/article/${article.article.id}/transaction`}>
          <button type="button" className="Article__purchase_btn">
            Acheter
            <img
              className="Article__purchase_img"
              src="\assets\icons\cart-icon-32px.png"
              alt="icône de caddy"
            />
          </button>
        </Link>

        {/* <div className="Article__bottom_section">
          <h5 className="Article__bottom_section-title">
            Annonces qui pourraient vous plaire
          </h5>
          <div className="Article__bottom_section-card">
            <img
              src="public\assets\icons\naruto01.jpg"
              className="Article__bottom_section-card-img"
              alt="icône de caddy"
            />
            <img
              src="public\assets\icons\naruto01.jpg"
              className="Article__bottom_section-card-img"
              alt="icône de caddy"
            />
            <img
              src="public\assets\icons\naruto01.jpg"
              className="Article__bottom_section-card-img"
              alt="icône de caddy"
            />
            <img
              src="public\assets\icons\naruto01.jpg"
              className="Article__bottom_section-card-img"
              alt="icône de caddy"
            />
          </div>
        </div> */}
      </div>

      <Footer />
    </Page>
  );
}

export default Article;
