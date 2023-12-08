/* eslint-disable react/no-unescaped-entities */
import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page/Page';
import './CreateArticle.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeISBNFormIsVisible,
  changeISBNInputValue,
  getMangaByISBN,
  resetMangaState,
} from '../../store/reducers/manga';

function CreateArticle() {
  const dispatch = useAppDispatch();

  const ISBNModal = useAppSelector((state) => state.manga.ISBNFormIsVisible);
  const mangas = useAppSelector((state) => state.manga.manga);
  const ISBNInputValue = useAppSelector((state) => state.manga.ISBNInputValue);

  function handleClickModalFormButton() {}

  function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeISBNInputValue(event.target.value));
  }

  function handleSubmitISBNForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(getMangaByISBN(ISBNInputValue));
  }

  function handleClickAddMangaToArticle() {
    dispatch(changeISBNFormIsVisible());
  }
  useEffect(() => {
    dispatch(resetMangaState());
  }, [dispatch]);

  return (
    <Page>
      <h2 className="CreateArticle__title">Créer une nouvelle annonce</h2>

      <div className="CreateArticle__container">
        <div className="CreateArticle__container_left">
          <img src={mangas[0]?.cover_url} alt="manga" />
        </div>
        <div className="CreateArticle__container_right">
          <form className="CreateArticle__form">
            <label htmlFor="title" className="CreateArticle__form_label">
              Titre de l'annonce :
            </label>
            <input
              className="CreateArticle__form_input"
              type="text"
              id="title"
              required
            />
            <button
              className="CreateArticle__form-addMangaButton"
              onClick={handleClickAddMangaToArticle}
              type="button"
            >
              Ajouter un manga
            </button>

            <h3 className="CreateArticle__form_label">
              Mangas liés à l'annonce
            </h3>
            <ul>
              {mangas.map((manga) => (
                <li
                  className="CreateArticle__form-mangaListItem"
                  key={manga.title}
                >
                  {manga.title}
                </li>
              ))}
            </ul>

            <label htmlFor="volume" className="CreateArticle__form_label">
              Volume :
            </label>
            <input
              className="CreateArticle__form_input"
              type="text"
              id="volume"
              required
            />

            <label htmlFor="price" className="CreateArticle__form_label">
              Prix:
            </label>
            <input
              className="CreateArticle__form_input"
              type="text"
              id="price"
              required
            />

            <label htmlFor="description" className="CreateArticle__form_label">
              Description de l'article :
            </label>
            <textarea
              className="CreateArticle__form_input"
              id="description"
              required
            />

            <label htmlFor="condition" className="CreateArticle__form_label">
              État de l'article :
            </label>
            <select
              className="CreateArticle__form_input"
              id="condition"
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
              value={ISBNInputValue}
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
