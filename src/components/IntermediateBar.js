import React, { useState } from 'react';
import { IntermediateBarWrapper, ButtonsContainer, Title, Form } from '../styles/IntermediateBar';
import Modal from 'react-bootstrap/Modal'

const IntermediateBar = () => {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <IntermediateBarWrapper>
            <img src={require('../images/winbet-logo.png')} alt="Winbet Logo" />

            <ButtonsContainer>
                <button onClick={handleShow}>вход</button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Title>Попълнете вашите данни</Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <input type="text" placeholder="Потребител" />

                            <input type="password" placeholder="Парола" />

                            <button>вход</button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <a href="#">регистрация</a>
            </ButtonsContainer>
        </IntermediateBarWrapper>
    )
};

export default IntermediateBar;