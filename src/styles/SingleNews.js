import styled from 'styled-components';

export const SingleNewsWrapper = styled.section`
    .react-viewer-toolbar li:nth-of-type(3) {
        display: none;
    }

    @media(max-width: 767px) {
        .breadcrumb {
            justify-content: flex-start;

            .breadcrumb-item:last-of-type {
                width: 70%;
            }
        }
    }

    @media(max-width: 575px) {
        .breadcrumb {
            justify-content: flex-start;

            .breadcrumb-item:last-of-type {
                width: 62%;
            }
        }
    }

    @media(max-width: 375px) {
        .breadcrumb {
            justify-content: flex-start;

            .breadcrumb-item:last-of-type {
                width: 50%;
            }
        }
    }

    .single-news-date {
        border-bottom: solid 1px #cc2027;
        padding: 3px 0;
        margin: 20px 0 10px;

        span {
            font-size: 14px;
            color: #cc2027;
            font-weight: 600;
        }
    }

    .single-news-navigation {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    .single-news-buttons a {
        background-color: #cc2027;
        color: #fff;
        padding: 4px 10px;
        font-size: 15px;
        margin-right: 5px;
        cursor: pointer;
        -webkit-transition: ease .2s;
        transition: ease .2s;

        @media(max-width: 767px) {
            font-size: 12px;
        }

        @media(max-width: 360px) {
            padding: 3px 6px;
        }

        &:hover {
            color: #fff;
            background-color: #a31a20;
            text-decoration: none;
        }
    }

    .single-news-social-media  {
        display: flex;
        align-items: flex-start;
        
        button {
            margin-right: 3px;

            @media(max-width: 575px) {
                margin-right: 0;
            }
            
            circle {
                fill: #cc2027;
                transition: all .1s linear;

                &:hover {
                    fill: #a31a20;
                    opacity: .7;
                }

                @media(max-width: 575px) {
                    cx: 31;
                    cy: 31;
                    r: 27;
                    }      
                }
            }
        }
    }

    .single-news-heading {
        color: #cc2027;
        font-weight: 600;
        font-size: 30px;
        max-width: 750px;
        line-height: 1;

        @media(max-width: 991px) {
            font-size: 22px;
            max-width: 500px;
        }

        @media(max-width: 767px) {
            font-size: 18px;
        }
    }

    .single-news-subheading-date{
        color: #212121;
        font-size: 15px;
        font-weight: 600;
        max-width: 750px;
        margin: 10px 0 40px;
    }

    .single-news-content {
        .general-img {
            width: 100%;
            margin-bottom: 35px;
            cursor: pointer;
        }

        .slick-slider {
            max-width: 750px;
            margin: 35px auto 35px 20px;

            .slick-track {
                width: 550px !important;
                margin-left: 0;

                .slick-slide {
                    margin-right: 5px;

                    .slide { 
                        overflow: hidden;
                        width: 230px;
                        height: 230px;
                        position: relative;

                        @media(max-width: 991px) {
                            height: 150px;
                        }

                        @media(max-width: 575px) {
                            height: 100px;
                        }

                        img {
                            cursor: pointer;
                            position: absolute;
                            top: -50%;
                            left: -50%;
                            right: -50%;
                            bottom: -50%;
                            margin: auto;
                            height: 100%!important;
                            width: auto!important;
                        }
                    }
                }
            }
        }

        .single-news-about-winbet {
            margin-bottom: 50px;

            h4 {
                font-size: 15px;
                font-weight: 600;
                color: #212121;
                margin-bottom: 12px;
            }

            P {
                font-size: 13px;
                font-style: italic;
                color: #212121;
                line-height: 1.3;
                font-family: 'Open Sans', sans-serif;
            }
        }
    }

    .latest-news-sidebar {
        text-decoration: none;
        color: #212121;
    }

    .latest-news {
        border-bottom: solid 1px #cc2027;

        &-date {
            font-size: 13px;
            color: #cc2027;
            font-weight: 600;
        }

        &-heading {
            margin: 5px 0 10px;
            font-size: 14px;
            line-height: 1.1;
        }
    }

`;