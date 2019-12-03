import styled from 'styled-components';

export const IntermediateBarWrapper = styled.div`
    background: linear-gradient(to top, #840000, #cc2027);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 90px;
    position: relative;
    height: 100%;
    
    img {
        width: 200px;
    }

    @media(max-width: 991px) {
        padding-left: 20px;

        img {
            width: 130px;
        }

        &.active {
            background: #cc2027;
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

        .fa-bars,
        .fa-times {
            color: white;
            position: absolute;
            right: 30px;
            transition: all .1s linear;
        }

        .fa-bars {
            top: 20px;
            opacity: 1;
            font-size: 25px;
        }
        
        .fa-times {
            top: 18px;
            font-size: 30px;
            opacity: 0;
        }

        .active .fa-times {
            opacity: 1;
        }

        .active .fa-bars {
            opacity: 0;
        }

        ul {
            display: none;
        }

        .active ul {
            background: linear-gradient(to top, #840000, #cc2027);
            display: block;
            width: 100%;
            position: absolute;
            top: 60px;
            left: 0;

            li {
                padding: 10px 15px;
                text-align: center;
                text-transform: uppercase;
                font-weight: 700;
                position: relative;

                .fa-sort-down {
                    position: absolute;
                    color: white;
                    top: 12px;
                    margin-left: 4px;
                }
                a {
                    text-decoration: none;
                    color: white;
                    font-size: 14px;
                }

                &:nth-of-type(4) ul{
                    display: none;
                    position: absolute;
                    width: 50%;
                    min-width: 250px;
                    max-width: 250px;
                    top: 40px
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                    background: white;
                    font-size: 14px;
                }

                &.active ul{
                    display: block;
                    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.13);
                }
            }
        }
    }
`;

