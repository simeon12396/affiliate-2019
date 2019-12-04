import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useCurrentTime } from '../helpers/useHooks';
import { NavBarWrapper, ClockContainer, Clock, Time, Nav, UnorderedList, SubUnorderedList, ListItem, LanguagesContainer, LanguageContainer } from '../styles/NavBar';
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <NavBarWrapper>
            <ClockContainer className="col-5 col-lg-2 ">
                <Clock>
                    <FontAwesomeIcon icon={faClock} />
                </Clock>

                <Time>{useCurrentTime()}</Time>
            </ClockContainer>

            <Nav className="col-2 col-lg-8">
                <UnorderedList>
                    <ListItem>
                        <Link to="#">начало</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="#">новини</Link>
                    </ListItem>
                    
                    <ListItem>
                        <Link to="#">за нас</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="#">информация</Link>
                        
                        <FontAwesomeIcon icon={faSortDown} className="icon" />

                        <SubUnorderedList>
                            <li>
                                <Link to="#">правила и условия</Link>
                            </li>

                            <li>
                                <Link to="#">комисионна</Link>
                            </li>

                            <li>
                                <Link to="#">често задавани въпроси</Link>
                            </li>

                            <li>
                                <Link to="#">отговорно залагане</Link>
                            </li>
                        </SubUnorderedList>
                    </ListItem>
                    
                    <ListItem>
                        <Link to="#">контакти</Link>
                    </ListItem>
                </UnorderedList>
            </Nav>

            <LanguagesContainer className="col-5 col-lg-2">
                <LanguageContainer>
                    <span>BG</span>
                </LanguageContainer>

                <LanguageContainer>
                    <span>EN</span>
                </LanguageContainer>
            </LanguagesContainer>
        </NavBarWrapper>
    );
};

export default NavBar;