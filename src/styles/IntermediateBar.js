import styled from 'styled-components';


export const IntermediateBarWrapper = styled.div`
    background: linear-gradient(to top, #840000, #cc2027);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 90px;
    position: relative;

    img {
        width: 200px;
    }

    @media(max-width: 991px) {
        padding-left: 20px;

        img {
            width: 130px;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: flex-start;

    button,
    a {
        border: none;
        outline: none;
        color: white !important;
        font-weight: 700;
        font-family: 'Open Sans';
        font-size: 18px;
        text-transform: uppercase;
        height: 37px;
        box-shadow: 3px 2px 0 rgba(0, 0, 0, 0.5);
    }

    button {    
        width: 100px;
        background-color: #5c9731;
        margin-right: 10px;
        transition: all .2s linear;

        &:hover {
             background-color: #457720;
            box-shadow: 2.5px 1.7px 0 0 rgba(0, 0, 0, 0.5)!important;
        }
    }

    a {
        width: 175px; 
        background-color: #313131; 
        transition: all .2s linear;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover { 
            background-color: #222; 
            box-shadow: 2.5px 1.7px 0 0 rgba(0, 0, 0, 0.5)!important;
            cursor: pointer; 
            text-decoration: none;
        }
    }

    @media(max-width: 991px) {
        display: none;
    }
`;

export const Title = styled.h5`
    width: 100%;
    text-align: center;
    font-weight: 400;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 0;
    text-align: center;

    input {
        outline: none;
        border: none;
        border-bottom: solid 1px #d2d2d2 !important;
        padding: 6px 12px;
        margin-bottom: 1rem;
    }

    button {
        font-size: 18px;
        font-weight: bold;
        color: white;
        text-transform: uppercase;
        transition: ease .2s;
        border: 0;
        background-color: #5c9731;
        margin: 10px auto 0;
        width: 120px;
        padding: 5px 0;

        &:hover {
            background: #457720;
        }
    }
`;

export const MobileMenu = styled.div`
    display: none;

    @media(max-width: 991px) {
        display: block;

        .fa-bars {
            color: white;
            font-size: 25px;
            position: absolute;
            top: 20px;
            right: 30px;
        }
    }
`;

