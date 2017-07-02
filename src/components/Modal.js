import React from 'react';
import '../css/Modal.css';

function Modal(props) {

    return(
      <div className={`modal-alert ${props.opened ? 'opened' : 'closed'}`}>
        <a
          onClick={props.onCloseModal}
          className="modal-close"
        >
          x
        </a>
        <p>{props.text}</p>
      </div>
    );
}

export default Modal;
