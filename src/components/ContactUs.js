import React from 'react';
import { ContactUsWrapper } from '../styles/ContactUs';
import { HorizontalLine } from '../styles/common/HorizontalLine';
import { ContactUsForm } from '../styles/common/ContactUsForm';

const ContactUs = () => {
    return(
        <ContactUsWrapper className="container">
            <h2>Свържете се с нас</h2>

            <HorizontalLine red />

            <p>Ако имате въпроси може да се свържете с нас като попълните и изпратите формата</p>

            <ContactUsForm className="row">
                <div className="left-inputs col-md-6 col-lg-6 row">
                    <input type="email" placeholder="Имейл" name="email" />

                    <input type="text" placeholder="Име" name="name" />

                    <input type="text" placeholder="Заглавие" name="title" />
                </div>

                <div className="right-input col-md-6 col-lg-6">
                    <textarea type="text" placeholder="Съобщение" name="description" />
                </div>

                <button type="submit">Изпрати</button>
            </ContactUsForm>
        </ContactUsWrapper>
    )
};

export default ContactUs;