import styled from 'styled-components';

export const CommissionWrapper = styled.section`
    padding: 20px 0 40px;

    .breadcrumb {
        justify-content: flex-end;
        background: none;
        width: 95%;

        .breadcrumb-item {
            cursor: pointer;
            font-size: 17px;

            &::before {
                font-weight: normal;
            }

            &:last-of-type {
                font-weight: 600;
            }

            a {
                color: gray;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }

    ul {
        list-style: disc;
        padding-left: 20px;
    }
`;

export const ProgressBarsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 55px;

    @media(max-width: 440px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ProgressBarItem = styled.div`
    position: relative;
    width: 150px;
    margin-right: 20px;

    @media(max-width: 991px) {
        width: 130px;
        margin-right: 10px;
    }

    @media(max-width: 767px) {
        width: 100px;
        margin-right: 5px;
    }

    @media(max-width: 440px) {
        width: 120px;
    }
    
    p:first-of-type {
        position: absolute;
        top: 90px;
        padding-left: 18px;
        font-size: 11px;
        font-weight: bold;
        width: 100%;
        color: white;

        @media(max-width: 991px) {
            top: 74px;
        }

        @media(max-width: 767px) {
            padding-left: 8px;
            top: 60px;
            font-size: 9px;
        }

        @media(max-width: 440px) {
            padding-left: 15px;
            top: 74px;
        }
    }

    p:last-of-type {
        margin-top: 10px;
        text-align: center;
        opacity: .6;
        font-size: 15px;

        @media(max-width: 991px) {
            font-size: 12px;
        }

        @media(max-width: 440px) {
            font-size: 12px;
        }
    }
`;
