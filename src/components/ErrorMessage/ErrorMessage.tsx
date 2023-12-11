import { useAppDispatch } from '../../hooks/redux';
import { changeCreateArticleErrorMessage } from '../../store/reducers/createArticle';

type ErrorMessageState = {
  errorContent: string;
};

function ErrorMessage({ errorContent }: ErrorMessageState) {
  const dispatch = useAppDispatch();

  function handleCloseErrorMessageModal() {
    dispatch(changeCreateArticleErrorMessage(''));
  }

  return (
    <div className="dialogError">
      <button
        onClick={handleCloseErrorMessageModal}
        className="dialogError__close-btn"
        type="button"
      >
        <img src="/assets/icons/add.png" alt="close icon" />
      </button>
      <p> {errorContent} </p>
    </div>
  );
}

export default ErrorMessage;
