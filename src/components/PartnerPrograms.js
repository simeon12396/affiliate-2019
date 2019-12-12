import React, { useContext } from 'react';

/** STYLED COMPONENTS */
import { PartnerProgramsWrapper, ServicesContainer } from '../styles/PartnerPrograms';
import { HorizontalLine } from '../styles/HorizontalLine';

/** FONT AWESOME */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faThumbsUp, faHeadphones } from "@fortawesome/free-solid-svg-icons";

/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

const PartnerPrograms = () => {

    const { lng } = useContext(languageContext);

    return(
        <PartnerProgramsWrapper className="container">
            {
                ( lng === 'bg') ?

                (
                    <>
                        <h2>Присъединете се към нашата партньорска програма!</h2>

                        <HorizontalLine red />

                        <p>Разнообразни продукти и много възможности</p>

                        <ServicesContainer className="row">
                            
                            <div className="service" className="col-lg-4">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faDollarSign} />
                                </div>

                                <h4>Регистрация</h4>

                                <p>Партньорската програма на Winbet Ви предлага продукти с най-високо качество: слот игри, казино на живо, спортни залози. Множество платежни методи, съпорт и иновативен софтуер.</p>
                            </div>

                            <div className="service" className="col-lg-4">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </div>

                                <h4>Реклама</h4>

                                <p>Winbet предоставя голямо разнообразие от рекламни материали на своите партньори. Достигнете до нови клиенти и се развивайте заедно с нас.</p>
                            </div>

                            <div className="service" className="col-lg-4">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                </div>

                                <h4>Печалба</h4>
                                
                                <p>Осигурете си доходи чрез реклама. Ще получавате процент от изиграните средства на клиентите, които са се регистрирали от Вашата реклама.</p>
                            </div>
                        </ServicesContainer>
                    </>
                ) :
                (
                    <>
                        <h2>Join our affiliate program!</h2>

                        <HorizontalLine red />

                        <p>A variety of products and many opportunities</p>

                        <ServicesContainer className="row">
                            
                            <div className="service" className="col-lg-4">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faDollarSign} />
                                </div>

                                <h4>Registration</h4>

                                <p>Winbet's Affiliate Program offers you the highest quality products: slot games, live casino, sports stacks. Multiple payment methods, support and innovative software.</p>
                            </div>

                            <div className="service" className="col-lg-4">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </div>

                                <h4>Advertisment</h4>

                                <p>Winbet provides a wide variety of promotional materials to its partners. Reach new customers and grow together with us.</p>
                            </div>

                            <div className="service" className="col-lg-4">
                                <div className="circle">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                </div>

                                <h4>Earning</h4>
                                
                                <p>Provide your income through advertising. You receive a percentage of the funds played by the customers who have signed up through your ad.</p>
                            </div>
                        </ServicesContainer>
                    </>
                )
            }
        </PartnerProgramsWrapper>
    )
};

export default PartnerPrograms;