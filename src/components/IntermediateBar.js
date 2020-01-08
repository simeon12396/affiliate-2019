import React, { useState, useContext } from 'react';

/** STYLED COMPONENTS */
import { IntermediateBarWrapper, ButtonsContainer, Title, Form, MobileMenu } from '../styles/IntermediateBar';

/** MODAL BOOTSTRAP */
import Modal from 'react-bootstrap/Modal';

/** FONT AWESOME */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSortDown } from "@fortawesome/free-solid-svg-icons";

/** METHODS */
import { handleToggleMenu, handleToggleInformation } from '../helpers/methods';

/** ROUTER */
import { Link } from "react-router-dom";

/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

const IntermediateBar = () => {

    const { lng } = useContext(languageContext);
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const registerUrl = 'https://affiliates.winbetaffiliates.bg/signup.php';

    return(
        <IntermediateBarWrapper className="intermediate-bar">
            {
                (lng === 'bg') ?
                (
                    <>
                        <Link to="/bg">
                            <img src={require('../images/winbet-logo.png')} alt="Winbet Logo" />
                        </Link>
                    </>
                ) :
                (
                    <>
                        <Link to="/en">
                            <img src={require('../images/winbet-logo.png')} alt="Winbet Logo" />
                        </Link>
                    </>
                )
            }

            {
                (lng === 'bg') ?

                (

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

                        <a href={registerUrl} target="_blank" >регистрация</a>
                    </ButtonsContainer>
                ) :

                (
                    <ButtonsContainer>
                        <button onClick={handleShow}>login</button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Title>User login</Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form>
                                    <input type="text" placeholder="Username" />

                                    <input type="password" placeholder="Password" />

                                    <button>Login</button>
                                </Form>
                            </Modal.Body>
                        </Modal>

                        <a href={registerUrl} target="_blank" >registration</a>
                    </ButtonsContainer>
                )
            }

            {

                (lng === 'bg') ?

                (
                    <MobileMenu>
                        <div className="hamburger" onClick={handleToggleMenu}>
                            <FontAwesomeIcon icon={faBars} />

                            <FontAwesomeIcon icon={faTimes} />
                        </div>

                        <div className="ul-container">
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/bg">начало</Link>
                                    </li>

                                    <li>
                                        <Link to="/bg/news">новини</Link>
                                    </li>

                                    <li>
                                        <Link to="/bg/about">за нас</Link>
                                    </li>

                                    <li onClick={handleToggleInformation} className="information-li">
                                        <Link to="#">информация</Link>
                                        <FontAwesomeIcon icon={faSortDown} className="icon" />

                                        <ul>
                                            <li>
                                                <Link to="/bg/terms-and-conditions">правила и условия</Link>
                                            </li>
                                            <li>
                                                <Link to="/bg/commission">комисионна</Link>
                                            </li>
                                            <li>
                                                <Link to="/bg/f-a-q">често задавани въпроси</Link>
                                            </li>
                                            <li>
                                                <Link to="/bg/responsible-betting">отговорно залагане</Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/bg/contacts">контакти</Link>
                                    </li>

                                    <li>
                                        <a href={registerUrl} target="_blank">регистрация</a>
                                    </li>

                                    <li onClick={handleShow}>
                                        <a href="#">вход</a>
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

                                    <input type="password" placeholder="Парола" />

                                    <button>Вход</button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </MobileMenu>
                ) :

                (
                    <MobileMenu>
                        <div className="hamburger" onClick={handleToggleMenu}>
                            <FontAwesomeIcon icon={faBars} />

                            <FontAwesomeIcon icon={faTimes} />
                        </div>

                        <div className="ul-container">
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/en">home</Link>
                                    </li>

                                    <li>
                                        <Link to="/en/news">news</Link>
                                    </li>

                                    <li>
                                        <Link to="/en/about">about us</Link>
                                    </li>

                                    <li onClick={handleToggleInformation} className="information-li">
                                        <Link to="#">information</Link>
                                        <FontAwesomeIcon icon={faSortDown} className="icon" />

                                        <ul>
                                            <li>
                                                <Link to="/en/terms-and-conditions">terms and conditions</Link>
                                            </li>
                                            <li>
                                                <Link to="/en/commission">commission plan</Link>
                                            </li>
                                            <li>
                                                <Link to="/en/f-a-q">faq</Link>
                                            </li>
                                            <li>
                                                <Link to="/en/responsible-betting">responsible betting</Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/en/contacts">contacts</Link>
                                    </li>

                                    <li>
                                        <a href={registerUrl} target="_blank">registration</a>
                                    </li>

                                    <li onClick={handleShow}>
                                        <a href="#">login</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Title>User login</Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form>
                                    <input type="text" placeholder="Username" />

                                    <input type="password" placeholder="Password" />

                                    <button>Login</button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </MobileMenu>
                )
            }
        </IntermediateBarWrapper>
    )
};

export default IntermediateBar;