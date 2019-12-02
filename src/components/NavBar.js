import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useCurrentTime } from '../helpers/useHooks';
import { NavBarWrapper, ClockContainer, Clock, Time, Nav, UnorderedList, ListItem, LanguagesContainer, LanguageContainer } from '../styles/NavBar';

const NavBar = () => {

    return(
        <NavBarWrapper>
            <ClockContainer className="col-2">
                <Clock>
                    <FontAwesomeIcon icon={faClock} />
                </Clock>

                <Time>{useCurrentTime()}</Time>
            </ClockContainer>

            <Nav className="col-8">
                <UnorderedList>
                    <ListItem>начало</ListItem>

                    <ListItem>новини</ListItem>
                    
                    <ListItem>за нас</ListItem>

                    <ListItem>информация
                        <FontAwesomeIcon icon={faSortDown} className="icon" />

                        <ul>
                            <li>правила и условия</li>
                            <li>комисионна</li>
                            <li>често задавани въпроси</li>
                            <li>отговорно залагане</li>
                        </ul>
                    </ListItem>

                    <ListItem>контакти</ListItem>
                </UnorderedList>
            </Nav>

            <LanguagesContainer className="col-2">
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