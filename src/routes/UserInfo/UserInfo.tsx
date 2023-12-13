import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Page from '../../components/Page/Page';
import './userInfo.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import {
  changeUserInfo,
  getArticleByUser,
} from '../../store/reducers/userPage';
import { findArticleByUserId } from '../../store/selectors/articles';

function UserInfo() {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  if (!id) {
    throw new Error('id is missing');
  }
  const parsedId = parseInt(id, 10);

  const articles = useAppSelector((state) => state.userPage.userPageArticle);

  if (!articles) {
    throw new Error(`Article with id ${parsedId} not found`);
  }

  const allArticle = useAppSelector((state) => state.article.list_articles);
  const user = findArticleByUserId(allArticle, parsedId)?.user;

  useEffect(() => {
    dispatch(getArticleByUser(parsedId));
  }, [dispatch, parsedId]);
  return (
    <Page>
      <div className="user-info__main_container">
        <div className="user-info__top_container">
          <div className="user-info__top_container-credentials">
            <p className="user-info__top_container-credentials-nickname">
              {user?.pseudo}
            </p>
            <p className="user-info__top_container-credentials-city">
              {user?.city}
            </p>
          </div>
        </div>
        <div className="user-info__bottom_container">
          <h2 className="user-info__bottom_container-title">
            Les annonces de : {user?.pseudo}
          </h2>
          <ul className="user-info__bottom_container-articles-list">
            {articles.map((article) => (
              <li
                key={article.id}
                className="user-info__bottom_container-articles-item"
              >
                <img
                  src={article.image_url}
                  alt="/"
                  className="user-info__bottom_container-articles-image"
                />
                <div className="user-info__bottom_container-articles-info">
                  <h3 className="user-info__bottom_container-articles-info-title">
                    {article.title}
                  </h3>

                  <p className="user-info__bottom_container-articles-info-price">
                    {article.price} €
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Page>
  );
}

export default UserInfo;
