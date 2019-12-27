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
                <SocialButtons href="https://www.facebook.com/winbet.bg.online/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                </SocialButtons>

                <SocialButtons href="https://www.instagram.com/winbet.online.casino/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialButtons>

                <SocialButtons href="https://www.youtube.com/channel/UCPP2j-r6BqACf-EUbEIx0Pg" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} />
                </SocialButtons>

                <SocialButtons href="https://twitter.com/dwinbet" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialButtons>
            </ButtonsContainer>

            {
                ( lng === 'bg') ?

                (
                    <Information className="container">
                        <section className="col-sm-6 col-lg-3">
                            <h4>Winbet</h4>

                            <Link to="/bg/about" target="_blank">За нас</Link>
                            <Link to="/bg/news" target="_blank">Новини</Link>
                            <a href="https://winbet.bg/bg/casino/all" target="_blank">Игрален сайт</a>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Информация за партньори</h4>

                            <Link to="/bg/terms-and-conditions" target="_blank">Правила и условия</Link>
                            <Link to="/bg/commission" target="_blank">Комисионна</Link>
                            <Link to="/bg/f-a-q" target="_blank">Често задавани въпроси</Link>
                            <Link to="/bg/responsible-betting" target="_blank">Отговорно залагане</Link>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Обслужване на клиенти</h4>

                            <a href="https://winbet.bg/bg/promotion/" target="_blank">Бонуси и промоции</a>
                            <a href="https://winbet.bg/bg/help/payments/deposit" target="_blank">Депозити и тегления</a>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Контакти</h4>

                            <Link to="/bg/contacts" target="_blank">Контактна форма</Link>
                        </section>
                    </Information>
                ) :

                (
                    <Information className="container">
                        <section className="col-sm-6 col-lg-3">
                            <h4>Winbet</h4>

                            <Link to="/en/about">About us</Link>
                            <Link to="/en/news">News</Link>
                            <a href="https://winbet.bg/bg/casino/all" target="_blank">Live site</a>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Partners information</h4>

                            <Link to="/en/terms-and-conditions" target="_blank">Terms and conditions</Link>
                            <Link to="/en/commission" target="_blank">Commission</Link>
                            <Link to="/en/f-a-q" target="_blank">FAQ</Link>
                            <Link to="/en/responsible-betting" target="_blank">Responsible betting</Link>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Customer service</h4>

                            <a href="https://winbet.bg/bg/promotion/" target="_blank">Bonuses and promotions</a>
                            <a href="https://winbet.bg/bg/help/payments/deposit" target="_blank">Deposit and payments</a>
                        </section>

                        <section className="col-sm-6 col-lg-3">
                            <h4>Concats</h4>

                            <Link to="/en/contacts" target="_blank">Contact form</Link>
                        </section>
                    </Information>
                )
            }
        </UpperFooterWrapper>
    )
};

export default UpperFooter;