import React from 'react';
import { LowerFooterWrapper, PaymentMethodsContainer, Title, OfficialPartnersContainer, Copyright } from '../styles/LowerFooter';
import { usePartnersLogo } from '../helpers/useHooks';

const LowerFooter = () => {
    const partnerLogos = usePartnersLogo();
    
    return(
        <LowerFooterWrapper>
            <div className="container">
                <PaymentMethodsContainer>
                    <img src={require('../images/visa.png')} alt="Visa payment" />

                    <img src={require('../images/visa-electron.png')} alt=" Visa electron payment" />

                    <img src={require('../images/mastercard.png')} alt="Mastercard payment" />

                    <img src={require('../images/house.png')} alt="Payment" />

                    <img src={require('../images/easypay.png')} alt="EasyPay payment" />

                    <img src={require('../images/epay.png')} alt="ePay payment" />

                    <img src={require('../images/cashterminal.png')} alt="Cashterminal payment" />

                    <img src={require('../images/skrill.png')} alt="Skrill payment" />
                </PaymentMethodsContainer>

                <Title>Официални партньори: </Title>

                <OfficialPartnersContainer>
                    {
                        partnerLogos && partnerLogos.map((logo, index) => {
                            return(
                               <div key={index}>
                                    <img src={`https://dev.winbet-bg.com/uploads/images/partners_logo/${logo.img_name}`} />
                               </div>
                            )
                        })
                    }
                </OfficialPartnersContainer>

                <Copyright>
                    <p>Winbet online е регистрирана търговска марка на „Уин Бет Онлайн“ ЕООД (ЕИК: 203294705), чиято дейност като организатор на хазартни игри онлайн подлежи на регулация от Държавната комисия по хазарта и е лицензирана съгласно Закона за хазарта със следните лицензи: Удостоверение № 000030-14103 от 13.11.2018 г., отразяващо актуалното състояние на лиценз за организиране на игри в игрално казино, издаден с Решение № 000030-6257 от 29.06.2015 г. на ДКХ; Удостоверение № 000030-823 от 24.01.2018 г., отразяващо актуалното състояние на лиценз за организиране на залагания върху резултати от спортни състезания и надбягвания с коне и кучета, издаден с Решение № 00030-8099 от 22.07.2016 г. на ДКХ и Удостоверение № 000030-822 от 24.01.2018 г., отразяващо актуалното състояние на лиценз за организиране на залагания върху случайни събития и залагания, свързани с познаване на факти, издаден с Решение № 000030-11140 от 29.09.2017 г. на ДКХ.</p>

                    <p>Адрес: България, гр. София п.к. 1799, ж.к. „Младост 2“, ул. „Свети Киприян“, блок 292</p>

                    <p>&copy; Winbet Всички права запазени.</p>
                </Copyright>
            </div>
        </LowerFooterWrapper>
    )
};

export default LowerFooter;