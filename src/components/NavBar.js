import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSortDown } from "@fortawesome/free-solid-svg-icons";
import {useCurrentTime} from '../helpers/useHooks';

const NavBarWrapper = styled.div`
    background-color: #222222;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    display: flex;
    height: 40px;
`;

const ClockContainer = styled.div`
    display: flex;
    align-items: center;

    .clock {
       font-size: 17px;
       margin-right: 5px;
    }

    .time {
        font-weight: 700;
        font-size: 14px;
    }
`;

const Nav = styled.div`
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-bottom: 0;

        li {
            padding-right: 30px;
            font-weight: 700;

            &:nth-of-type(3) {
                display: flex;
            }
    
            &:last-of-type {
                padding-right: 0;
            }

            .down-arrow {
                margin-left: 4px;
            }
        }
    }
`;

const Languages = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0 !important;

    div {
        background-color: #7b0005;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: 400;
        font-size: 1.1rem;

        &:first-of-type {
            margin-right: 5px;
        }

        &:hover {
            background-color: #cc2027;
            cursor: pointer;
        }
    }
`;

const NavBar = () => {

    return(
        <NavBarWrapper>
            <ClockContainer className="col-1">
                <FontAwesomeIcon icon={faClock} className="clock" />

                <span className="time">{useCurrentTime()}</span>
            </ClockContainer>

            <Nav className="col-10">
                <ul className="ul">
                    <li>начало</li>
                    <li>новини</li>
                    <li>информация
                        <FontAwesomeIcon icon={faSortDown} className="down-arrow" />
                    </li>
                    <li>за нас</li>
                    <li>контакти</li>
                </ul>
            </Nav>

            <Languages className="col-1">
                <div>
                    <span>BG</span>
                </div>
                <div>
                    <span>EN</span>
                </div>
            </Languages>
        </NavBarWrapper>
    );
};

export default NavBar;