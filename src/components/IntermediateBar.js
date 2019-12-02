import React, { useState } from 'react';
import { IntermediateBarWrapper, ButtonsContainer, Title, Form, MobileMenu } from '../styles/IntermediateBar';
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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

                            <input type="password" placeholder="Потребител" />

                            <button>Вход</button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <a href="#">регистрация</a>
            </ButtonsContainer>

            <MobileMenu>
                <FontAwesomeIcon icon={faBars} />
                
            </MobileMenu>
        </IntermediateBarWrapper>
    )
};

export default IntermediateBar;