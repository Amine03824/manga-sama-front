import './Message.scss';

type MessageProps = {
  message_content: string;
};

function Message({ message_content }: MessageProps) {
  function handleCloseMessageModal() {}

  return (
    <div className="dialogMessage">
      <button
        onClick={handleCloseMessageModal}
        className="dialogMessage__close-btn"
        type="button"
      >
        <img src="/assets/icons/add.png" alt="close icon" />
      </button>
      <p> {message_content} </p>
    </div>
  );
}

export default Message;
