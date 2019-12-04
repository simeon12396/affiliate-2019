import styled from 'styled-components';

export const LowerFooterWrapper = styled.div`
    background: #222222;
    color: white;
`;

export const PaymentMethodsContainer = styled.div`
    padding-top: 28px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    img {
        max-height: 35px;
        margin: 0 2px 4px;
    }
`;

export const Title = styled.p`
    font-size: 13px;
    color: #76767b;
    text-align: center;
    margin-bottom: 12px;
`;

export const OfficialPartnersContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div {
        margin: 20px 7px;

        img {
            max-height: 73px;
        }

        &:last-of-type {
            width: 100%;
            text-align: center;
        }
    }
`;

export const Copyright = styled.div`
    color: #6d6d6d;

    & > * {
        margin-bottom: 15px;
        font-size: 12px;
        line-height: 1.3;
        text-align: center;
    }

    p:last-of-type {
        margin-bottom: 0;
        padding-bottom: 42px;
    }
`;

