import React from 'react';

/** COMPONENTS */
import ContactsUsForm from '../../components/ContactUs';

/** STYLED COMPONENTS */
import { ContactsUsWrapper } from '../../styles/Contacts';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const ContactsEn = () => {
    return(
        <ContactsUsWrapper className="container">
            <Breadcrumb>
                <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                <Breadcrumb.Item>Contact us</Breadcrumb.Item>
            </Breadcrumb>

            <ContactsUsForm/>
        </ContactsUsWrapper>
    )
};

export default ContactsEn;