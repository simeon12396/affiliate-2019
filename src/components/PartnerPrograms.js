import React from 'react';
import { PartnerProgramsWrapper, ServicesContainer } from '../styles/PartnerPrograms';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faThumbsUp, faHeadphones } from "@fortawesome/free-solid-svg-icons";

const PartnerPrograms = () => {
    return(
        <PartnerProgramsWrapper className="container">
            <h2>Присъединете се към нашата партньорска програма!</h2>

            <div className="red-line"></div>

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
        </PartnerProgramsWrapper>
    )
};

export default PartnerPrograms;