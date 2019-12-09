import styled from 'styled-components';

export const PartnerProgramsWrapper = styled.section`
    padding-top: 100px;

    h2 {
        margin-bottom: 25px;
        font-size: 38px;
        font-weight: bold;
        color: #212121;
        text-align: center;
    }

    p {
        font-size: 17px;
        color: #86878b;
        text-align: center;
        margin-bottom: 90px;
    }

    @media(max-width: 768px) {
        padding-top: 50px;

        h2 {
            font-size: 32px;
        }

        p {
            margin-bottom: 50px;
        }
    }
`;

export const ServicesContainer = styled.div`

    .circle {
        border: solid 3px #c91f25;
        border-radius: 100px;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 34px;
        color: #c91f25;
    }

    h4 {
        font-size: 22px;
        font-weight: bold;
        color: #333333;
        margin: 20px 0 30px;
        text-align: center;
    }
`;
