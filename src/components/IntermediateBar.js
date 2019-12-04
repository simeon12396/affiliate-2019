import React, { useState } from 'react';
import { IntermediateBarWrapper, ButtonsContainer, Title, Form, MobileMenu } from '../styles/IntermediateBar';
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { handleToggleMenu, handleToggleInformation } from '../helpers/methods';
import { Link } from "react-router-dom";

const IntermediateBar = () => {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <IntermediateBarWrapper className="intermediate-bar">
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
                <div className="hamburger" onClick={handleToggleMenu}>
                    <FontAwesomeIcon icon={faBars} />

                    <FontAwesomeIcon icon={faTimes} />
                </div>

                <div className="ul-container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="#">начало</Link>
                            </li>

                            <li>
                                <Link to="#">новини</Link>
                            </li>

                            <li>
                                <Link to="#">за нас</Link>
                            </li>

                            <li onClick={handleToggleInformation} className="information-li">
                                <Link to="#">информация</Link>
                                <FontAwesomeIcon icon={faSortDown} className="icon" />

                                <ul>
                                    <li>
                                        <Link to="#">правила и условия</Link>
                                    </li>
                                    <li>
                                        <Link to="#">комисионна</Link>
                                    </li>
                                    <li>
                                        <Link to="#">често задавани въпроси</Link>
                                    </li>
                                    <li>
                                        <Link to="#">отговорно залагане</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="#">контакти</Link>
                            </li>

                            <li>
                                <Link to="#">регистрация</Link>
                            </li>

                            <li onClick={handleShow}>
                                <Link to="#">вход</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
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
            </MobileMenu>
        </IntermediateBarWrapper>
    )
};

export default IntermediateBar;