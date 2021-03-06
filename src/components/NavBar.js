import React, { useContext } from 'react';

/** FONT AWESOME */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSortDown } from "@fortawesome/free-solid-svg-icons";

/** HOOKS */
import { useCurrentTime } from '../helpers/useHooks';

/** STYLED COMPONENTS */
import { NavBarWrapper, ClockContainer, Clock, Time, Nav, UnorderedList, SubUnorderedList, ListItem, LanguagesContainer, LanguageContainer } from '../styles/NavBar';

/** ROUTER */
import { Link, withRouter } from "react-router-dom";

/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

const NavBar = (props) => {
 
    const { lng, handlerOnClickBg, handlerOnClickEn} = useContext(languageContext);
    
    return(
        <NavBarWrapper>
            <ClockContainer className="col-5 col-lg-2 ">
                <Clock>
                    <FontAwesomeIcon icon={faClock} />
                </Clock>

                <Time>{useCurrentTime()}</Time>
            </ClockContainer>

            <Nav className="col-2 col-lg-8">
                {
                    (lng === 'bg') ?

                    (
                        <UnorderedList>
                            <ListItem>
                                <Link to="/bg">начало</Link>
                            </ListItem>

                            <ListItem>
                                <Link to="/bg/news">новини</Link>
                            </ListItem>
                            
                            <ListItem>
                                <Link to="/bg/about">за нас</Link>
                            </ListItem>

                            <ListItem>
                                <Link to="#">информация</Link>
                                
                                <FontAwesomeIcon icon={faSortDown} className="icon" />

                                <SubUnorderedList className="sub-ul">
                                    <li>
                                        <Link to="/bg/terms-and-conditions">правила и условия</Link>
                                    </li>

                                    <li>
                                        <Link to="/bg/commission">комисионна</Link>
                                    </li>

                                    <li>
                                        <Link to="/bg/f-a-q">често задавани въпроси</Link>
                                    </li>

                                    <li>
                                        <Link to="/bg/responsible-betting">отговорно залагане</Link>
                                    </li>
                                </SubUnorderedList>
                            </ListItem>
                            
                            <ListItem>
                                <Link to="/bg/contacts">контакти</Link>
                            </ListItem>
                        </UnorderedList>
                    ) : 
                    
                    (
                        <UnorderedList>
                            <ListItem>
                                <Link to="/en">home</Link>
                            </ListItem>

                            <ListItem>
                                <Link to="/en/news">news</Link>
                            </ListItem>
                            
                            <ListItem>
                                <Link to="/en/about">about us</Link>
                            </ListItem>

                            <ListItem>
                                <Link to="#">information</Link>
                                
                                <FontAwesomeIcon icon={faSortDown} className="icon" />

                                <SubUnorderedList className="sub-ul">
                                    <li>
                                        <Link to="/en/terms-and-conditions">terms and conditions</Link>
                                    </li>

                                    <li>
                                        <Link to="/en/commission">commission plan</Link>
                                    </li>

                                    <li>
                                        <Link to="/en/f-a-q">faq</Link>
                                    </li>

                                    <li>
                                        <Link to="/en/responsible-betting">responsible betting</Link>
                                    </li>
                                </SubUnorderedList>
                            </ListItem>
                            
                            <ListItem>
                                <Link to="/en/contacts">contacts</Link>
                            </ListItem>
                        </UnorderedList>
                    )
                }
            </Nav>

            <LanguagesContainer className="col-5 col-lg-2">
                {
                    ( lng === 'bg') ?

                    (
                        <>
                            <LanguageContainer active onClick={handlerOnClickBg.bind(this, props.history)}>
                                <span>BG</span>
                            </LanguageContainer>

                            <LanguageContainer onClick={handlerOnClickEn.bind(this, props.history)}>
                                <span>EN</span>
                            </LanguageContainer>
                        </>
                    ) :

                    (
                        <>
                            <LanguageContainer onClick={handlerOnClickBg.bind(this, props.history)}>
                                <span>BG</span>
                            </LanguageContainer>

                            <LanguageContainer active onClick={handlerOnClickEn.bind(this, props.history)}>
                                <span>EN</span>
                            </LanguageContainer>
                        </>
                    )
                }
            </LanguagesContainer>
        </NavBarWrapper>
    );
};

export default withRouter(NavBar);