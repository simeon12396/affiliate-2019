import styled from 'styled-components';

export const MainSliderWrapper = styled.section`
    max-height: 85vh;
    overflow: hidden;

    .slick-dots {
        bottom: 70px;

        li button:before {
            color: #fff;
            font-size: 12px;
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
    transform: translate (-12%, -18%);

    .slide-logo {
        width: 280px;
    }

    .slide-title {
        font-size: 42px;
        font-weight: 100;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
        max-width: 500px;
        font-weight: 300;
        margin: 25px 0 25px 10px;
    }

    .slide-line {
        width: 88px;
        height: 2px;
        background-color: #fff;
        margin-left: 13px;
    }

    .slide-description {
        max-width: 450px;
        font-size: 17px;
        font-weight: 300;
        line-height: 1.43;
        margin: 25px 0 25px 10px;
    }
`;

export const ButtonsContainer = styled.div`
    margin: 35px 0 25px 10px;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 17px;
    font-weight: 600;
    width: 125px;
    height: 50px
    min-width: 174px;
    padding: 0;
    background: ${ props => props.left ? '#c91f25' : 'transparent'};
    border: ${ props => props.left ? '1px solid transparent' : '1px solid white'};
    margin-right: ${ props => props.left ? '10px' : '0'};
    transition: all .2s linear;

    &:hover {
        background: ${ props => props.left ? '#940f14' : 'white'}
    }

    a {
        color: white;
        height: 100%;
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