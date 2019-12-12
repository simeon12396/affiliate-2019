import React, {useContext} from 'react';

/** STYLED COMPONENTS */
import { ButtonsContainer, SocialButtons, UpperFooterWrapper, Information } from '../styles/UpperFooter';

/** FONT AWESOME */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

/** ROUTER */
import { Link } from "react-router-dom";

/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

const UpperFooter = () => {
    const { lng } = useContext(languageContext);

    return(
        <UpperFooterWrapper>
            <ButtonsContainer>
                <SocialButtons>
                    <FontAwesomeIcon icon={faFacebookF} />
                </SocialButtons>

                <SocialButtons>
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialButtons>

                <SocialButtons>
                    <FontAwesomeIcon icon={faYoutube} />
                </SocialButtons>

                <SocialButtons>
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialButtons>
            </ButtonsContainer>

            {
                ( lng === 'bg') ?

                (
                    <Information className="container">
                        <section className="col-sm-6 col-lg-3">
                            <h4>Winbet</h4>

                            <Link to="#">За нас</Link>
                            <Link to="#">Новини</Link>
                            <Link to="#">Игрален сайт</Link>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Информация за партньори</h4>

                            <Link to="#">Правила и условия</Link>
                            <Link to="#">Комисионна</Link>
                            <Link to="#">Често задавани въпроси</Link>
                            <Link to="#">Отговорно залагане</Link>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Обслужване на клиенти</h4>

                            <Link to="#">Бонуси и промоции</Link>
                            <Link to="#">Депозити и тегления</Link>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Контакти</h4>

                            <Link to="#">Контактна форма</Link>
                        </section>
                    </Information>
                ) :

                (
                    <Information className="container">
                        <section className="col-sm-6 col-lg-3">
                            <h4>Winbet</h4>

                            <Link to="#">About us</Link>
                            <Link to="#">News</Link>
                            <Link to="#">Live site</Link>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Partners information</h4>

                            <Link to="#">Terms and conditions</Link>
                            <Link to="#">Commission</Link>
                            <Link to="#">FAQ</Link>
                            <Link to="#">Responsible betting</Link>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Customer service</h4>

                            <Link to="#">Bonuses and promotions</Link>
                            <Link to="#">Deposit and payments</Link>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Concats</h4>

                            <Link to="#">Contact form</Link>
                        </section>
                    </Information>
                )
            }
        </UpperFooterWrapper>
    )
};

export default UpperFooter;