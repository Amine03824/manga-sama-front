/* eslint-disable react/no-unescaped-entities */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import './CreateArticle.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeISBNFormIsVisible,
  changeISBNInputValue,
  getMangaByISBN,
} from '../../store/reducers/manga';

function CreateArticle() {
  const dispatch = useAppDispatch();
  // Utilisation des useState pour gérer les valeurs des inputs
  const [title, setTitle] = useState('');
  const [volume, setVolume] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');

  const ISBNModal = useAppSelector((state) => state.manga.ISBNFormIsVisible);
  const manga = useAppSelector((state) => state.manga.manga);
  const ISBNInputValue = useAppSelector((state) => state.manga.ISBNInputValue);

  // Gestion de l'input de type select entre les différentes valeurs ("acceptable", "très bon", "neuf")
  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleClickModalFormButton() {}

  function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeISBNInputValue(event.target.value));
  }

  function handleSubmitISBNForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    dispatch(getMangaByISBN(ISBNInputValue));
    dispatch(changeISBNFormIsVisible());
  }

  return (
    <Page>
      <h2 className="CreateArticle__title">Créer une nouvelle annonce</h2>
      <div className="CreateArticle__container">
        <div className="CreateArticle__container_left">
          <img src={manga?.cover_url} alt="manga" />
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
              value={manga?.title}
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
              value={manga?.volume}
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
              value={manga?.description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

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
              Publier mon annonce <img src="\assets\icons\add.png" alt="logo" />
            </button>
          </form>
        </div>
      </div>
      {ISBNModal && (
        <dialog className="createArticle__modal">
          <h2>
            Entrez le code ISBN de ton manga (il se trouve au dos de ton livre)
          </h2>
          <form
            className="createArticle__modal_form"
            onSubmit={handleSubmitISBNForm}
          >
            <input
              type="text"
              className="createArticle__modal_input"
              placeholder="Code ISBN de ton manga"
              onChange={handleChangeInputValue}

            />
            <button
              type="submit"
              className="createArticle__modal_btn"
              onClick={handleClickModalFormButton}
            >

              Confirmer mon ISBN
            </button>
          </form>
        </dialog>
      )}
      <Footer />
    </Page>
  );
}

export default CreateArticle;
