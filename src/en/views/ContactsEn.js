import React from 'react';

/** COMPONENTS */
import ContactsUsForm from '../../components/ContactUs';

/** STYLED COMPONENTS */
import { ContactsUsWrapper } from '../../styles/Contacts';
import { BreadcrumbWrapper} from '../../styles/Breadcrumb';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const ContactsEn = () => {
    return(
        <ContactsUsWrapper className="container">
            <BreadcrumbWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                    <Breadcrumb.Item>Contact us</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapper>

            <ContactsUsForm />
        </ContactsUsWrapper>
    )
};

export default ContactsEn;