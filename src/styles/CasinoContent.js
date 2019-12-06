import styled from 'styled-components';

export const CasinoContentWrapperLine = styled.div`
    box-shadow: 0px 2px 1px 0 rgba(0, 0, 0, 0.15);
`;

export const CasinoContentWrapper = styled.section`
    width: 80%;
    margin: 0 auto;
    height: 110px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    flex-wrap: wrap;

    h4 {
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 5px;
    }

    p {
        font-size: 15px;
        line-height: 1.45;
        color: #86878b;
        margin-bottom: 0;
    }

    @media(max-width: 1100px) {
        width: 94%;
    }

    @media(max-width: 900px) {
        flex-direction: column;
        height: 140px;
    }

    @media(max-width: 440px) {
        height: auto;
    }
`;

export const CasinosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 57%;

    @media(max-width: 900px) {
        width: 100%;
        margin-bottom: 20px;
        margin-right: 20px;
    }

    @media(max-width: 440px) {
        flex-direction: column;
        align-items: center;

        div:nth-of-type(2) {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
`;

 export const CoupleBox = styled.div`
    &:nth-of-type(1) {
        max-width: 460px;

        @media(max-width: 1400px) {
            font-size: 14px;
            max-width: 310px;
        }

        @media(max-width: 900px) {
            max-width: 520px;
            text-align: center;
        }

        @media(max-width: 440px) {
            align-self: ${ props => props.text ? 'flex-start' : 'center' };
            margin-bottom: ${ props => props.text ? '5px' : '0' };
        }
    }
    
    a {
        font-size: 22px;
        font-weight: 800;
        color: #5d5d5d;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        transition: all .2s linear;
        
        @media(max-width: 1400px) {
            font-size: 16px;
            font-weight: 800;
        }

        &:hover {
            text-decoration: none;
            color: #c91f25;
        }

        svg {
            width: 30px;
            height: auto;
            margin-left: 10px;
        }
    }
 `;