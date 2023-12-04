/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__logo">
        <img src="public/assets/logo/logo.png" alt="logo-Manga-Sama" />
      </div>
      <div className="signUp__area">
        <h2 className="signUp__area-title">Création de compte</h2>
        <div className="signUp__area-fields">
          <form action="/" method="post" className="signUp__area-form">
            <ul className="signUp__area-lists">
              <li className="signUp__area-item">
                <input type="text" placeholder="Nom d'utilisateur" />
              </li>
              <li className="signUp__area-item">
                <input type="email" placeholder="E-mail" />
              </li>
              <li className="signUp__area-item">
                <input type="text" placeholder="Mot de passe" />
              </li>
              <li className="signUp__area-item">
                <input type="text" placeholder="Confirmer le mot de passe" />
              </li>
            </ul>
          </form>
        </div>
        <button type="button">Valider</button>
      </div>
    </div>
  );
}

export default SignUp;
