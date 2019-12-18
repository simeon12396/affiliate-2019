import React from 'react';

/** COMPONENTS */
import ContactsUsForm from '../../components/ContactUs';

/** STYLED COMPONENTS */
import { ContactsUsWrapper } from '../../styles/Contacts';
import { BreadcrumbWrapper} from '../../styles/Breadcrumb';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Contacts = () => {
    return(
        <ContactsUsWrapper className="container">
            <BreadcrumbWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                    <Breadcrumb.Item>Контакти</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapper>

            <ContactsUsForm />
        </ContactsUsWrapper>
    )
};

export default Contacts;