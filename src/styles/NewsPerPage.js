import styled from 'styled-components';

export const NewsPerPageCnt = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
`;

export const SingleNews = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .router-link-image {
        width: 30%;
        height: 250px;
        overflow: hidden;
        position: relative;
        cursor: pointer;

        img {
            position: absolute;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            margin: auto;
            height: 100%;
            transition: transform .2s linear;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    @media(max-width: 991px) {
        .router-link-image {
            height: 200px;
        }
    }

    @media(max-width: 767px) {
        .router-link-image {
            width: 40%;
        }
    }

    @media(max-width: 500px) {
        .router-link-image {
            height: 150px;
        }
    }

    .news-information {
        width: 68%;
        position: relative;

        &-date {
            font-size: 14px;
            color: #cc2027;
            font-weight: 700;
        }

        &-line {
            height: 1px;
            width: 100%;
            background: #cc2027;
            margin-bottom: 10px;
        }

        &-title {
            color: #cc2027;
            font-weight: 700;
            font-size: 20px;
            line-height: 1;
            margin-bottom: 15px;
            margin-top: 15px;
        }

        &-short-description {
            font-size: 15px;
            line-height: 1.2;
        }

        &-link {
            position: absolute;
            bottom: 0px;
            position: absolute;
            padding: 5px 15px;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            background-color: #cc2027;
            -webkit-transition: ease .3s;
            transition: ease .3s;
            cursor: pointer;

            &:hover {
                color: #fff;
                text-decoration: none;
                background-color: #982016;
            }
        }

        @media(max-width: 991px) {
            &-title {
                font-size: 18px;
                margin-bottom: 10px;
                margin-top: 10px;
            }

            &-short-description {
                font-size: 14px;
            }
        }

        @media(max-width: 767px) {
            &-title {
                font-size: 16px;
                margin-bottom: 10px;
                margin-top: 10px;
            }

            &-short-description {
                font-size: 11px;
            }

            &-link {
                font-size: 14px;
                padding: 4px 10px;
            }
        }

        @media(max-width: 500px) {
            &-title {
                font-size: 14px;
            }

            &-short-description {
                display: none;
            }

            &-link {
                font-size: 13px;
            }
        }
    }

    @media(max-width: 767px) {
        .news-information {
            width: 58%;
        }
    }
`;