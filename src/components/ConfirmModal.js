import "./ConfirmModal.css";
function ConfirmModal({
  isOpen,
  message,
  onConfirm,
  onCancel
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{message}</h3>

        <div className="modal-buttons">
          <button
            className="btn-confirm"
            onClick={onConfirm}
          >
            Yes
          </button>

          <button
            className="btn-cancel"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;