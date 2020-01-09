import React, { useContext } from 'react';

/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

/** COOKIES */
import CookieConsent from "react-cookie-consent";


/** STYLED COMPONENTS */
import { CookiesWrapper } from '../styles/Cookies';

const Cookies = () => {

    const { lng } = useContext(languageContext);

    return(
        <CookiesWrapper>
            {
                ( lng === 'bg') ?
                (
                    <CookieConsent
                        location="bottom"
                        buttonText="Разбрах"
                        cookieName="Affiliate cookie"
                        style={{ background: "rgba(34, 34, 34, 0.92)" }}
                        buttonStyle={{ color: "#fff", fontSize: "14px", fontWeight: "600", padding: "5px 35px",
                        borderRadius: "30px", margin: "8px 15px", background: "#cc2027" }}
                        expires={150}
                        className="cookie"
                    >
                        Този сайт използва бисквитки, за да подобри представянето
                    </CookieConsent>
                ) :
                (
                    <CookieConsent
                        location="bottom"
                        buttonText="Agree"
                        cookieName="Affiliate cookie"
                        style={{ background: "rgba(34, 34, 34, 0.92)" }}
                        buttonStyle={{ color: "#fff", fontSize: "14px", fontWeight: "600", padding: "5px 35px",
                        borderRadius: "30px", margin: "8px 15px", background: "#cc2027" }}
                        expires={150}
                        className="cookie"
                    >
                        This website uses cookies to enhance the user experience.
                    </CookieConsent>
                )
            }
        </CookiesWrapper>
    )
};

export default Cookies;