import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/SlickSlider';
import { useDataFromAPI as useSliderImages } from '../helpers/useHooks';
import { MainSliderWrapper, SlideContainer, SlideOverlay, ButtonsContainer, Button } from '../styles/SlickSlider';

const SlickSlider = () => {
    const apiURL = 'https://dev.winbet-bg.com/api/bg/sliders';
    const imageURL = 'https://dev.winbet-bg.com/uploads/images/sliders/';

    let sliderImages = useSliderImages(apiURL);
    console.log(sliderImages)
    let sliderSettings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
      <MainSliderWrapper>
        <Slider {...sliderSettings}>
          {
            sliderImages && sliderImages.map((sliderData, index) => {
              return(
                <SlideContainer key={index}>
                  <img src={`${imageURL}${sliderData.image_name}`} className="slide-bck" />

                  <SlideOverlay>
                    <img src={require('../images/slider-winbet-logo.png')} alt="Winbet Slider Logo" className="slide-logo" />

                    <h2 className="slide-title">{sliderData.title_bg}</h2>

                    <div className="slide-line"></div>

                    <p className="slide-description">{sliderData.description_bg}</p>

                    {
                      (sliderData.button_text2_bg) ? (
                        <ButtonsContainer>
                          <Button left>
                            <a href={sliderData.button_1_bg_url} target="_blank">
                              {sliderData.button_text1_bg}
                            </a>
                          </Button>

                          <Button>
                            <a href={sliderData.button_2_bg_url} target="_blank">
                              {sliderData.button_text2_bg}
                            </a>
                          </Button>
                        </ButtonsContainer>
                      ) : (
                        <div>
                          <Button left>
                            <a href={sliderData.button_1_bg_url} target="_blank">
                              {sliderData.button_text1_bg}
                            </a>
                          </Button>
                        </div>
                      )
                    }
                    
                  </SlideOverlay>
                </SlideContainer>
              )
            })
          }
        </Slider>
      </MainSliderWrapper>
    )
};

export default SlickSlider;