interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open : boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
  <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
    <div className="modal-box">
        <form method="dialog">
        <button type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setModalOpen(false)}
        >✕</button>
        </form>
        {children}
    </div>
  </div>
  )
}

export default Modal