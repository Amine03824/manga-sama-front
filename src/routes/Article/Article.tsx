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
import Carousel from '../../components/Carousel/Carousel';

function Article() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  if (!id) {
    throw new Error('id is missing');
  }

  const parsedId = parseInt(id, 10);

  const article = useAppSelector((state) =>
    findArticle(state.article.list_articles, parsedId)
  );
  const URLArray: string[] = [];
  if (article) {
    article.mangas.forEach((manga) => {
      URLArray.push(manga.cover_url);
      console.log(URLArray);
    });
  }

  if (!article) {
    throw new Error(`Article with id ${parsedId} not found`);
  }

  useEffect(() => {
    dispatch(changeUserInfo(article.user));
    dispatch(changeViewedArticle(article));
  });
  return (
    <Page>
      <div className="Article">
        <div className="Article__container">
          <div className="Article__container_title">
            {article.article.title}
          </div>
          <div className="Article__container_price">
            {article.article.price} €
          </div>
          <div className="Article__container_main">
            <div className="Article__container_img">
              <Carousel images={URLArray} />
            </div>
            <div className="Article__container_info">
              <div className="Article__container_manga-info">
                <table>
                  <tbody>
                    {article.mangas.map((manga) => (
                      <tr key={manga.code_isbn}>
                        <td
                          className="Article__container_manga-title"
                          key={manga.title}
                        >
                          {manga.title}
                        </td>
                        <td className="Article__container_manga-volume">
                          Volume : {manga.volume}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="Article__container_description">
                <div className="Article__container_description-title">
                  Description :
                </div>
                <div className="Article__container_description-content">
                  {article.article.description}
                </div>
              </div>
              <div className="Article__container_state">
                <div className="Article__container_state-title">
                  Etat de l'article :
                </div>
                <div className="Article__container_state-content">
                  Très bon état
                </div>
              </div>
              <div className="Article__container_soldby">
                <div className="Article__container_soldby-content">
                  Vendu par :
                  <Link to={`/article/user/${article.user.id}`}>
                    <div className="Article__container_soldby-name">
                      {article.user.pseudo}
                    </div>
                  </Link>
                  <p className="home__articles-info-localisation">
                    A {article.user.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Article__container_bottom">
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
          </div>
        </div>
      </div>

      <Footer />
    </Page>
  );
}

export default Article;
