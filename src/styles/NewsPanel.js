import styled from 'styled-components';
import banner from '../images/panel-bck.png';

export const NewsPanelWrapper = styled.section`
    background:url(${banner});
    color: white;
    text-align: center;
    padding: 30px 0 40px;
    overflow: hidden;

    h2 {
        margin-bottom: 25px;
        font-size: 38px;
        font-weight: bold;
        color: #fff;
    }

    p {
         margin: 30px auto 0;
         font-size: 20px;
         width: 850px;
         color: rgba(255, 255, 255, 0.8);
    }

    @media(max-width: 991px) {
        p {
            width: 530px;
            font-size: 14px;
        }
    }

    @media(max-width: 767px) {
        h2 {
            font-size: 28px;
        }
    }
 
    @media(max-width: 560px) {
        p {
            max-width: 290px;
        }
    }
`;

export const NewsButton = styled.button`
    border: none;
    outline: none;
    width: 180px;
    height: 50px;
    padding: 0;
    background: transparent;
    margin-top: 50px;

    @media(max-width: 991px) {
        margin-top: 30px;
    }

    a {
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        transition: all .2s linear;
        border-radius: 3px;
        border: solid 1px #ffffff;

        &:hover {
            text-decoration: none;
            background: white;
            color: black;
        }

        @media(max-width: 991px) {
            font-size: 14px;
        }
    }
`;
