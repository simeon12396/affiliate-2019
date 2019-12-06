import styled from 'styled-components';

export const MainSliderWrapper = styled.section`
    max-height: 85vh;
    overflow: hidden;
    position: relative;

    .slick-slider slick-initialized,
    .slick-list,
    .slick-slider {
        position: static;
    }
    
    .slick-dots {
        bottom: 30px;

        @media(max-width: 700px) {
            bottom: 20px;
        }

        @media(max-width: 500px) {
            bottom: 15px;
        }

        li {
            margin: 0 1px;

            button:before {
                color: #fff;
                font-size: 12px;
    
                @media(max-width: 700px) {
                    font-size: 9px;
                }
    
                @media(max-width: 500px) {
                    font-size: 8px;
                }
            }
        }
    }
`;

export const SlideContainer = styled.div`
    position: relative;

    .slide-bck {
        z-index: 1000;
        width: 100%;
    }
`;

export const SlideOverlay = styled.div`
    position: absolute;
    top: 15%;
    left: 9%;
    z-index: 2000;
    color: white;

    @media(max-width: 1400px) {
        top: 12%;
        left: 8.5%;
    }

    @media(max-width: 1100px) {
        top: 9.5%;
        left: 1.5%;
    }

    @media(max-width: 700px) {
        top: 14.5%;
    }

    @media(max-width: 500px) {
        top: 18%;
    }

    .slide-logo {
        width: 280px;
        margin-left: 5px;

        @media(max-width: 1400px) {
            width: 200px;
        }

        @media(max-width: 1100px) {
            width: 160px;
        }

        @media(max-width: 900px) {
            width: 100px;
        }
    }

    .slide-title {
        font-size: 42px;
        font-weight: 100;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
        max-width: 500px;
        font-weight: 300;
        margin: 25px 0 25px 10px;

        @media(max-width: 1400px) {
            font-size: 30px;
            max-width: 330px;
        }

        @media(max-width: 1100px) {
            font-size: 26px;
            max-width: 280px;
        }
        
        @media(max-width: 900px) {
            font-size: 17px;
            max-width: 200px;
            margin-top: 10px;
            margin: 15px 0 15px 9px;
        }

        @media(max-width: 500px) {
            font-size: 14px;
            max-width: 145px;
        }
    }

    .slide-line {
        width: 88px;
        height: 2px;
        background-color: #fff;
        margin-left: 13px;

        @media(max-width: 700px) {
            display: none;
        }
    }

    .slide-description {
        max-width: 450px;
        font-size: 17px;
        font-weight: 300;
        line-height: 1.43;
        margin: 25px 0 25px 12px;

        @media(max-width: 1400px) {
            max-width: 360px;
            font-size: 15px;
        }

        @media(max-width: 1100px) {
            max-width: 330px;
            font-size: 14px;
        }

        @media(max-width: 900px) {
            max-width: 275px;
            font-size: 13px;
            margin-top: 15px;
            margin-bottom: 10px;
        }

        @media(max-width: 700px) {
            display: none;
        }
    }
`;

export const ButtonsContainer = styled.div`
    margin: 20px 0 25px 12px;

    @media(max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 15px;
    margin-left: 12px;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 17px;
    font-weight: 600;
    width: 125px;
    height: 50px;
    padding: 0;
    min-width: 174px;
    background: ${ props => props.left ? '#c91f25' : 'transparent'};
    border: ${ props => props.left ? '1px solid transparent' : '1px solid white'};
    margin-right: ${ props => props.left ? '10px' : ''};
    transition: all .2s linear;

    @media(max-width: 1400px) {
        min-width: 160px;
        font-size: 15px;
        height: 45px;
    }

    @media(max-width: 1100px) {
        min-width: 150px;
        font-size: 14px;
        height: 45px;
    }

    @media(max-width: 900px) {
        min-width: 120px;
        font-size: 13px;
        height: 38px;
    }

    @media(max-width: 700px) {
        min-width: 130px;
        margin-bottom: 10px;
    }

    @media(max-width: 500px) {
        display: none;
    }

    &:hover {
        background: ${ props => props.left ? '#940f14' : 'white'}
    }

    a {
        color: white;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .2s linear;

        &:hover {
            color: ${ props => props.left ? 'white' : 'black'}
            text-decoration: none;
        }
    }
`;