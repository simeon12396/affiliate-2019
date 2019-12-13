import React from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { AboutUsWrapper, SubTitle, Options } from '../../styles/AboutUs';

const AboutUsEn = () => {
    return(
        <AboutUsWrapper className="container">
            <Breadcrumb>
                <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                <Breadcrumb.Item>About us</Breadcrumb.Item>
            </Breadcrumb>

            <BlackTitle>About us</BlackTitle>

            <HorizontalLine red />

            <p className="about-text">We strive to offer you good conditions, dedicated team, advertising texts and materials to help mutual satisfaction of our partners and customers. Our mission is to offer a wide range of products: sports, live casino, casino games and virtual sports that you as our partners can present to your customers, online or offline.</p>
        
            <SubTitle>Why join the winbet.bg Affiliate program?</SubTitle>

            <Options>
                <li>you become part of our reputed brand. As a partner, you will have access to a database and promotional texts and materials that will help generate a good reputation and attract more customers.</li>
                <li>you will be able to receive a 30% commission for each forwarded customer through our advertising materials.</li>
                <li>payments will be transferred to you in a convenient way: an ePay account or a bank transfer.</li>
                <li>allowing you to access a statistical system that will track your customer's activities and provide you with reliable, trustworthy and accurate information.</li>
            </Options>

            <SubTitle>Is the winbet.bg Affiliate Program free?</SubTitle>

            <Options>
                <li>yes, it is completely free and you do not owe any fees and charges to join.</li>
            </Options>

            <SubTitle>How do I join the winbet.bg Affiliate program?</SubTitle>

            <Options>
                <li>click on the registration button and start filling in the Registration form. The filling will take you a few minutes, and the final phase is to read and confirm that you agree to our Terms and Conditions. Then click the Confirmation button on the Registration form. Each registration is considered personally within 5 business days.</li>
            </Options>
        </AboutUsWrapper>
    )
};

export default AboutUsEn;