import React from "react";
import Modal from "react-modal";
import {useStateValue} from "../../states/StateProvider";
import PaymentPopUp from "./payment";
import {MdKeyboardBackspace} from "react-icons/md";
import PropTypes from "prop-types";
import Home from "../../views/home/Home";
import AddProducts from "./addProducts";

const ModalContent = (props) => {

    const [{modal}, dispatch] = useStateValue();

    function closeModal() {
        dispatch({
            type: "SetModal",
            item: false
        })
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '67%',
            right: 'auto',
            bottom: '-50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#1F1D2BFF',
            overflow: 'scroll'
        },
    };

    return (
        <div className='modalContainer'>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <div style={{cursor: 'pointer', marginLeft: '30px'}}>
                    <MdKeyboardBackspace onClick={closeModal} color='white' size='25px'/>
                </div>
                {
                    (props.addProducts) ?
                        <AddProducts/>
                        :
                        <PaymentPopUp/>
                }
            </Modal>
        </div>
    )
}

export default ModalContent

ModalContent.propTypes = {
    admin: PropTypes.bool
}


