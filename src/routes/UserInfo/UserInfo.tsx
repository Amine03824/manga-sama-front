import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Page from '../../components/Page/Page';
import './userInfo.scss';

const UserInfo = () => {
  return (
    <Page>
      <div className="user-info__main_container">
        <div className="user-info__top_container">
          <div className="user-info__top_container-credentials">
            <p className="user-info__top_container-credentials-nickname">
              Houdini78
            </p>
            <p className="user-info__top_container-credentials-city">Melun</p>
          </div>
        </div>
        <div className="user-info__bottom_container">
          <h2 className="user-info__bottom_container-title">
            Les annonces de : xXLePlongeur87Xx
          </h2>
          <ul className="user-info__bottom_container-articles-list">
            <li className="user-info__bottom_container-articles-item">
              <img
                src="/"
                alt="/"
                className="user-info__bottom_container-articles-image"
              />
              <div className="user-info__bottom_container-articles-info">
                <h3 className="user-info__bottom_container-articles-info-title">
                  Bleach Tome 5
                </h3>

                <p className="user-info__bottom_container-articles-info-price">
                  800 €
                </p>

                <p className="user-info__bottom_container-articles-info-city">
                  Gotham City
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
};

export default UserInfo;
