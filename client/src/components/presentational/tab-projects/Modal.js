import React from 'react';

const Modal = (props) => (
    <div id='modal'>
        <div id='modal_out'>
            <div id='modal_in'>
                {props.modal}
            </div>
        </div>
    </div>
);

export default Modal;