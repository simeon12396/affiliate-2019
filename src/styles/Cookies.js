import styled from 'styled-components';

export const CookiesWrapper = styled.section`
    div {
        padding-left: 200px;
    }

    button {
        margin-right: 250px !important;
        transition: all .2s linear;

        &:hover {
            opacity: .8;
            cursor: pointer;
        }
    }

    @media(max-width: 1400px) {
        div {
            padding-left: 100px;
        }

        button {
            margin-right: 150px !important;
        }
    }

    @media(max-width: 1200px) {
        div {
            padding-left: 50px;
        }

        button {
            margin-right: 50px !important;
        }
    }

    @media(max-width: 1200px) {
        div {
            font-size: 14px;
        }

        button {
            font-size: 12px !important;
        }
    }

    @media(max-width: 576px) {
        div {
            padding: 0 !important;
        }

        button {
            margin: 0 10px 10px 0!important;
        }
    }

    @media(max-width: 455px) {
        .cookieConsent {
            justify-content: center !important;

            div {
                text-align: center;
            }
        }
    }
`;