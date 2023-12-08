import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeISBNInputValue,
  getMangaByISBN,
} from '../../store/reducers/manga';
import './ISBNFormModal.scss';

function ISBNFormModal() {
  const dispatch = useAppDispatch();

  const ISBNInputValue = useAppSelector((state) => state.manga.ISBNInputValue);
  function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeISBNInputValue(event.target.value));
  }

  function handleSubmitISBNForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(getMangaByISBN(ISBNInputValue));
  }

  return (
    <dialog className="isbnFormModal">
      <h2>
        Entrez le code ISBN de ton manga (il se trouve au dos de ton livre)
      </h2>
      <form className="isbnFormModal__form" onSubmit={handleSubmitISBNForm}>
        <input
          type="text"
          className="isbnFormModal__input"
          placeholder="Code ISBN de ton manga"
          onChange={handleChangeInputValue}
          value={ISBNInputValue}
        />
        <button type="submit" className="isbnFormModal__btn">
          Confirmer mon ISBN
        </button>
      </form>
    </dialog>
  );
}

export default ISBNFormModal;
