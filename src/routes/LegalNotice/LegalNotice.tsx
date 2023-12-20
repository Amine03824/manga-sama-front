import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import './LegalNotice.scss';

function LegalNotice() {
  return (
    <Page>
      <div className="legalNotice">
        <h1 className="legalNotice__title"> Mentions Légales</h1>
        <p className="legalNotice__content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          commodi nesciunt fuga voluptates dolore ea inventore, quibusdam
          possimus, molestiae temporibus quae veniam aspernatur nostrum
          doloremque at eius consequuntur tenetur mollitia rem officiis quis
          deserunt tempore? Saepe, magni consequatur corporis quisquam odit,
          placeat eaque facere ab consectetur amet quidem? Quod dicta enim
          doloribus quasi incidunt unde hic quas possimus deserunt eligendi
          eaque accusantium cumque modi ducimus quaerat asperiores illo, dolore
          ea!
        </p>
      </div>
      <Footer />
    </Page>
  );
}

export default LegalNotice;
