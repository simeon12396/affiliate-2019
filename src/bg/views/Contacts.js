import React from 'react';

/** COMPONENTS */
import ContactsUsForm from '../../components/ContactUs';

/** STYLED COMPONENTS */
import { ContactsUsWrapper } from '../../styles/Contacts';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Contacts = () => {
    return(
        <ContactsUsWrapper className="container">
            <Breadcrumb>
                <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                <Breadcrumb.Item href="#">Информация</Breadcrumb.Item>

                <Breadcrumb.Item>Контакти</Breadcrumb.Item>
            </Breadcrumb>

            <ContactsUsForm/>
        </ContactsUsWrapper>
    )
};

export default Contacts;