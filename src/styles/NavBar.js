import styled from 'styled-components';

export const NavBarWrapper = styled.div`
    background-color: #222222;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    display: flex;
    height: 40px;
`;

export const ClockContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Clock = styled.span`
    font-size: 17px;
    margin-right: 5px;
    font-family: 'Open Sans', sans-serif;   

    @media(max-width: 991px) {
        font-size: 15px;
    }
`;

export const Time = styled.div`
    font-weight: 600;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;

    @media(max-width: 991px) {
        font-size: 13px;
    }
`;

export const Nav = styled.nav`
`;

export const UnorderedList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-bottom: 0;

    @media(max-width: 991px) {
        display: none;
    }
`;

export const ListItem = styled.li`
    margin-right: 5px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    list-style: none;
    transition: all .2s linear;
    height: 100%;
    width: 80px;

    &:hover {
        background: #cc2027;
        cursor: pointer;

        a {
            color: white;
            text-decoration: none;
        }
    }

    &:nth-of-type(4) {
        display: flex;
        position: relative;
        width: 140px;
        align-items: center;
        justify-content: space-around;

        svg {
            position: absolute;
            top: 10px;
            right: 0px;
        }

        &:hover .sub-ul {
            display: block;
            cursor: pointer;
            z-index: 1000;

            a {
                color: black;
            }
        }
    }

    &:nth-of-type(5) {
        width: 100px;
    }

    a {
        text-decoration: none;
        color: white;
        width: inherit;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .icon {
        margin-right: 5px;
        font-size: 16px;
    }
`;

export const SubUnorderedList = styled.ul`
    display: none;
    position: absolute;
    top: 40px;
    left: 0;
    width: 225px;
    color: black;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.13);

    li {
        padding: 10px;
        text-align: center;
        background: white;
        transition: all .1s linear;

        &:hover {
            background: #cc2027;
        }
        
        &:hover a {
            color: white !important;
            text-decoration: none;
        }

        &:nth-of-type(3) {
            padding: 10px 8px;
        }

        a {   
            color: black;
        }
    }
`;

export const LanguagesContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0 !important;
`;

export const LanguageContainer = styled.div`
    background-color: ${props => props.active ? '#cc2027' : '#7b0005'};
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 400;
    font-size: 1.1rem;
    font-family: 'Open Sans', sans-serif;

    &:first-of-type {
        margin-right: 5px;
    }

    &:hover {
        background-color: #cc2027;
        cursor: pointer;
    }

    @media(max-width: 991px) {
        font-size: .9rem;
    }
`;