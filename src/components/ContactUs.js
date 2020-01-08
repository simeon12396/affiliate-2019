import React, { useState, useContext } from 'react';

/** STYLED COMPONENTS */
import { ContactUsWrapper } from '../styles/ContactUs';
import { HorizontalLine } from '../styles/HorizontalLine';
import { ContactUsForm } from '../styles/ContactUsForm';

/** FORM LIBRARY */
import useForm from 'react-hook-form';

/** FONT AWESOME */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faStar } from "@fortawesome/free-solid-svg-icons";

/** REACT BOOTSTRAP */
import Modal from 'react-bootstrap/Modal';

/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

/** JQUERY IMPORT */
import $ from "jquery";

const ContactUs = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const { lng } = useContext(languageContext);

    const onSubmit = (data, e) => {
        e.preventDefault();
        handleShow();
        e.target.reset();

        /*fetch('https://dev.winbet-bg.com/api/contacts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify({
                email: data.email,
                name: data.name,
                title: data.title,
                description: data.description
            })
        })
        .then(response => response.json())
        .then(data => console.log(data)) */

        $.post( "https://dev.winbet-bg.com/api/contacts/create", {
            email: data.email,
            name: data.name,
            title: data.title,
            description: data.description
        });
    };

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <ContactUsWrapper className="container" home>
            {
                ( lng === 'bg') ?

                (
                    <>
                        <h2>Свържете се с нас</h2>

                        <HorizontalLine red />

                        <p>Ако имате въпроси може да се свържете с нас като попълните и изпратите формата</p>

                        <ContactUsForm className="row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="left-inputs col-md-6 col-lg-6 row">
                                <input type="email" placeholder="Имейл" name="email" ref={register({required: true})}/>

                                {(errors.email && errors.email.type === 'required') && 
                                    <div className="required-alert required-alert-email">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }

                                <input type="text" placeholder="Име" name="name" ref={register({required: true, pattern: /^(\b[A-Z]\w*\s*)+$/})}/>

                                {(errors.name && errors.name.type === 'required') && 
                                    <div className="required-alert required-alert-name">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }

                                {(errors.name && errors.name.type === 'pattern') && 
                                    <div className="custom-alert custom-alert-name">
                                        <FontAwesomeIcon icon={faExclamationCircle} />

                                        <span>Името трябва да започва с главна буква</span>
                                    </div>
                                }

                                <input type="text" placeholder="Заглавие" name="title" ref={register({required: true, pattern: /[A-Z\s]+/})}/>

                                {(errors.title && errors.title.type === 'required') && 
                                    <div className="required-alert required-alert-title">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }

                                {(errors.title && errors.title.type === 'pattern') && 
                                    <div className="custom-alert custom-alert-title">
                                        <FontAwesomeIcon icon={faExclamationCircle} />

                                        <span>Заглавието трябва да започва с главна буква</span>
                                    </div>
                                }
                            </div>

                            <div className="right-input col-md-6 col-lg-6">
                                <textarea type="text" placeholder="Съобщение" name="description" ref={register({required: true})}/>

                                {(errors.description && errors.description.type === 'required') && 
                                    <div className="required-alert required-alert-description">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            </div>

                            <button type="submit">Изпрати</button>

                            <Modal show={show} onHide={handleClose} >
                                <Modal.Header closeButton>
                                    <h5>Вашето съобщение е изпратено успешно!</h5>
                                </Modal.Header>
                            </Modal>
                        </ContactUsForm>
                    </>
                ) :

                (
                    <>
                        <h2>Contact us</h2>

                        <HorizontalLine red />

                        <p>If you have any questions, please contact us by filling in and submitting the form</p>

                        <ContactUsForm className="row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="left-inputs col-md-6 col-lg-6 row">
                                <input type="email" placeholder="Email" name="email" ref={register({required: true})}/>

                                {(errors.email && errors.email.type === 'required') && 
                                    <div className="required-alert required-alert-email">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }

                                <input type="text" placeholder="Name" name="name" ref={register({required: true, pattern: /^(\b[A-Z]\w*\s*)+$/})}/>

                                {(errors.name && errors.name.type === 'required') && 
                                    <div className="required-alert required-alert-name">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }

                                {(errors.name && errors.name.type === 'pattern') && 
                                    <div className="custom-alert custom-alert-name">
                                        <FontAwesomeIcon icon={faExclamationCircle} />

                                        <span>The name must begin with a capital letter</span>
                                    </div>
                                }

                                <input type="text" placeholder="Title" name="title" ref={register({required: true, pattern: /[A-Z\s]+/})}/>

                                {(errors.title && errors.title.type === 'required') && 
                                    <div className="required-alert required-alert-title">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }

                                {(errors.title && errors.title.type === 'pattern') && 
                                    <div className="custom-alert custom-alert-title">
                                        <FontAwesomeIcon icon={faExclamationCircle} />

                                        <span>The title must begin with a capital letter</span>
                                    </div>
                                }
                            </div>

                            <div className="right-input col-md-6 col-lg-6">
                                <textarea type="text" placeholder="Message" name="message" ref={register({required: true})}/>

                                {(errors.message && errors.message.type === 'required') && 
                                    <div className="required-alert required-alert-message">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            </div>

                            <button type="submit">Submit</button>

                            <Modal show={show} onHide={handleClose} >
                                <Modal.Header closeButton>
                                    <h5>Your message has been sent successfully!</h5>
                                </Modal.Header>
                            </Modal>
                        </ContactUsForm>
                    </>
                )
            }
        </ContactUsWrapper>
    )
};

export default ContactUs;