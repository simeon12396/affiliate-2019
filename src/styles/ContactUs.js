import styled from 'styled-components';

export const ContactUsWrapper = styled.section`
    background: white;
    text-align: center;

    h2 {
        font-size: 38px;
        font-weight: bold;
        color: #212121;
        margin: 120px 0 25px;
    }

    p {
        font-size: 17px;
        color: #86878b;
        margin-bottom: 50px;
        opacity: .9;
    }

    @media(max-width: 768px) {
        h2 {
            margin: 50px 0 25px;
            font-size: 28px;
        }

        p {
            font-size: 16px;
        }
    }
`;