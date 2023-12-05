import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import './Team.scss';

function Team() {
  return (
    <Page>
      <div className="team">
        <h1 className="team__title"> La Team Manga Sama</h1>

        <ul className="team__list">
          <li className="team__list-item">
            <img className="team__list-img" alt="houd-img" src="/" />
            <h2 className="team__list-name">Hado</h2>
            <p className="team__list-role">
              Product-Owner / Banker / ShareOlder / AlCapone{' '}
            </p>
          </li>
          <li className="team__list-item">
            <img
              className="team__list-img"
              alt="oliv-img"
              src="/assets/logo/oliv.png"
            />
            <h2 className="team__list-name">Le O</h2>
            <p className="team__list-role">Lead Front</p>
          </li>
          <li className="team__list-item">
            <img
              className="team__list-img"
              alt="amine-img"
              src="/assets/logo/amile.png"
            />
            <h2 className="team__list-name">Amile</h2>
            <p className="team__list-role">Scrotum Master</p>
          </li>
          <li className="team__list-item">
            <img
              className="team__list-img"
              alt="tonio-img"
              src="/assets/logo/tonio.png"
            />
            <h2 className="team__list-name">GlamTonio</h2>
            <p className="team__list-role">Lead Back</p>
          </li>
          <li className="team__list-item">
            <img
              className="team__list-img"
              alt="tonio-img"
              src="/assets/logo/yst.png"
            />
            <h2 className="team__list-name">YsT</h2>
            <p className="team__list-role">Git guardian</p>
          </li>
        </ul>
      </div>
      <Footer />
    </Page>
  );
}

export default Team;
