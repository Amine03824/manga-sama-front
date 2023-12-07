import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import './CreateArticle.scss';

function CreateArticle() {
  // Utilisation des useState pour gérer les valeurs des inputs
  const [title, setTitle] = useState('');
  const [volume, setVolume] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');

  // Gestion de l'input de type select entre les différentes valeurs ("acceptable", "très bon", "neuf")
  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Données soumises :', {
      title,
      volume,
      price,
      description,
      condition,
    });
  };

  return (
    <Page>
      <h2 className="CreateArticle__title">Créer une nouvelle annonce</h2>
      <div className="CreateArticle__container">
        <div className="CreateArticle__container_left">
          <img src="\assets\icons\naruto01.jpg"></img>
        </div>
        <div className="CreateArticle__container_right">
          <form onSubmit={handleSubmit} className="CreateArticle__form">
            <label htmlFor="title" className="CreateArticle__form_label">
              Titre de l'annonce :
            </label>
            <input
              className="CreateArticle__form_input"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="volume" className="CreateArticle__form_label">
              Volume :
            </label>
            <input
              className="CreateArticle__form_input"
              type="text"
              id="volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              required
            />

            <label htmlFor="price" className="CreateArticle__form_label">
              Prix:
            </label>
            <input
              className="CreateArticle__form_input"
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <label htmlFor="description" className="CreateArticle__form_label">
              Description de l'article :
            </label>
            <textarea
              className="CreateArticle__form_input"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

            <label htmlFor="condition" className="CreateArticle__form_label">
              État de l'article :
            </label>
            <select
              className="CreateArticle__form_input"
              id="condition"
              value={condition}
              onChange={handleConditionChange}
              required
            >
              <option value="" disabled>
                Sélectionnez l'état
              </option>
              <option value="acceptable">Acceptable</option>
              <option value="très bon">Très bon</option>
              <option value="neuf">Neuf</option>
            </select>

            <button className="CreateArticle__form_btn" type="submit">
              Publier mon annonce <img src="\assets\icons\add.png"></img>
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </Page>
  );
}

export default CreateArticle;
