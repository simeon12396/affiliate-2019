import React, { useContext } from 'react';

/** STYLED COMPONENTS */
import { LowerFooterWrapper, PaymentMethodsContainer, Title, OfficialPartnersContainer, Copyright } from '../styles/LowerFooter';

/** HOOKS */
import { useDataFromAPI as usePartnersLogo } from '../helpers/useHooks';

/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

const LowerFooter = () => {
    const apiURL = 'https://dev.winbet-bg.com/api/partners-logo';
    const imageURL = 'https://dev.winbet-bg.com/uploads/images/partners_logo/';

    let partnerLogos = usePartnersLogo(apiURL);
    
    const { lng } = useContext(languageContext);

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

                {
                    ( lng === 'bg') ?

                    (
                        <>
                            <Title>Официални партньори: </Title>

                            <OfficialPartnersContainer>
                                {
                                    partnerLogos && partnerLogos.map((logo, index) => {
                                        return(
                                        <div key={index}>
                                                <img src={`${imageURL}${logo.img_name}`} />
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
                        </>
                    ) :

                    (
                        <>
                            <Title>Official partners: </Title>

                            <OfficialPartnersContainer>
                                {
                                    partnerLogos && partnerLogos.map((logo, index) => {
                                        return(
                                        <div key={index}>
                                                <img src={`${imageURL}${logo.img_name}`} />
                                        </div>
                                        )
                                    })
                                }
                            </OfficialPartnersContainer>

                            <Copyright>
                                <p>Winbet online is a registered trademark of “Win Bet Online” EOOD (UIC 203294705), the activity of which is subject to regulation by the State Commission on Gambling (SCG) of the Republic of Bulgaria, and is licensed according to the Gambling Act with Certificate number: 000030-14103 from 13.11.2018, reflecting the current status of a license for organizing games in a gaming casino, issued by virtue of Decision No. 000030-6257 from 29.06.2015; Certificate number: 000030-823 from 24.01.2018, reflecting the current status of a license for organizing bets on results from sporting competitions and horse and dog racing, issued by virtue of Decision No. 00030-8099 from 22.07.2016; and Certificate number: 000030-822 from 24.01.2018, reflecting the current status of a license for organizing bets on random events and bets related to knowledge of facts, issued by virtue of Decision No. 000030-11140 from 29.09.2017.</p>

                                <p>Address: Mladost 2 liv.d., Sveti Kipriyan St., block 292, Sofia 1799, Bulgaria</p>

                                <p>&copy; All rights reserved.</p>
                            </Copyright>
                        </>
                    )
                }
            </div>
        </LowerFooterWrapper>
    )
};

export default LowerFooter;