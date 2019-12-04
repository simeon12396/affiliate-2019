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
                <section>
                    <h4>Winbet</h4>

                    <Link>За нас</Link>
                    <Link>Новини</Link>
                    <Link>Игрален сайт</Link>
                </section>

                <section>
                    <h4>Информация за партньори</h4>

                    <Link>Правила и условия</Link>
                    <Link>Комисионна</Link>
                    <Link>Често задавани въпроси</Link>
                    <Link>Отговорно залагане</Link>
                </section>

                <section>
                    <h4>Обслужване на клиенти</h4>

                    <Link>Бонуси и промоции</Link>
                    <Link>Депозити и тегления</Link>
                </section>

                <section>
                    <h4>Контакти</h4>

                    <Link>Контактна форма</Link>
                </section>
            </Information>
        </UpperFooterWrapper>
    )
};

export default UpperFooter;