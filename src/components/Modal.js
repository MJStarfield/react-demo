import "../styles/Modal.css";

const Modal = ({ closeModal, children }) => {
  return (
    <div className="overlay">
      <div className="content">
        <button onClick={closeModal}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
