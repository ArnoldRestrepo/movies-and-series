import React from "react";
import ReactDOM from "react-dom";
import "./css/Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="ModalItem">
        <button onClick={props.onClose} className="ModalItem-close">
          ×
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
