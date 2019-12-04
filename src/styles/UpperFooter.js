import styled from 'styled-components';

export const UpperFooterWrapper = styled.div`
    background: linear-gradient(to top, #840000, #cc2027);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SocialButtons = styled.a`
    font-size: 26px;
    background: #d9d9d9;
    width: 42px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 100px;
    transition: all .2s linear;
    margin: 32px 10px 37px 0;

    &:hover {
        cursor: pointer
        opacity: .7;
    }

    & > * {
        color: #cf000d;
    }
`;

export const Information = styled.div`
    margin: 0 auto;
    padding-bottom: 44px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
    section {
        display: flex;
        flex-direction: column;

        h4 {
            color: white;
            font-size: 14px;
            font-weight: bold;
        }

        a {
            color: white;
            text-decoration: none;
            font-size: 13px;
        }
    }
`;

