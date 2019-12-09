import React from 'react';
import { ContactUsWrapper } from '../styles/ContactUs';
import { HorizontalLine } from '../styles/common/HorizontalLine';

const ContactUs = () => {
    return(
        <ContactUsWrapper>
            <h2>Свържете се с нас</h2>

            <HorizontalLine red />
        </ContactUsWrapper>
    )
};

export default ContactUs;