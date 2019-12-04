import React from 'react';
import { ButtonsContainer, SocialButtons, UpperFooterWrapper, Information } from '../styles/UpperFooter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const UpperFooter = () => {
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
        </UpperFooterWrapper>
    )
};

export default UpperFooter;