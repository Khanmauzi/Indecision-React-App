import React from 'react'
import Modal from 'react-modal'
const OptionModal = (props) => {
    console.log(props)
    return (
        <div>
            <Modal
            isOpen={!!props.option}
            onRequestClose={props.resetSelectedOption}
            contentLabel = "selected option"
            closeTimeoutMS={400}
            className="modal"
            >
            <h3 className="modal__title">Selected Option:</h3>
            {props.option && <p className="modal__body">{props.option}</p>}
            <button className="button" onClick={props.resetSelectedOption}>Okay</button>
            </Modal>
        </div>
    )

}

export default OptionModal;