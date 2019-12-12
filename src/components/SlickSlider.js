import React, { useContext } from 'react';

/** SLICK SLIDER PLUGIN */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** HOOKS */
import { useDataFromAPI as useSlidersData } from '../helpers/useHooks';

/** STYLED COMPONENTS */
import { MainSliderWrapper, SlideContainer, SlideOverlay, ButtonsContainer, ButtonContainer, Button } from '../styles/SlickSlider';

/** CONTEXTS */ 
import { languageContext } from '../contexts/languageContext';

const SlickSlider = (props) => {

    const imageURL = 'https://dev.winbet-bg.com/uploads/images/sliders/';

    let slidersData = useSlidersData(props.slidersAPIUrl)

    const { lng } = useContext(languageContext);
  
    const sliderSettings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
      };

    return(
      <MainSliderWrapper>
        <Slider {...sliderSettings}>
          {
            slidersData && slidersData.map((sliderData, index) => {
              return(
                <SlideContainer key={index}>
                  <img src={`${imageURL}${sliderData.image_name}`} className="slide-bck" />

                  <SlideOverlay>
                    <img src={require('../images/slider-winbet-logo.png')} alt="Winbet Slider Logo" className="slide-logo" />

                    {
                      ( lng === 'bg' ) ? 

                      (
                        <>
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
                                <ButtonContainer>
                                  <Button left>
                                    <a href={sliderData.button_1_bg_url} target="_blank">
                                      {sliderData.button_text1_bg}
                                    </a>
                                  </Button>
                                </ButtonContainer>
                              )
                            }
                          </>  
                        ) : 

                        (

                          <>
                            <h2 className="slide-title">{sliderData.title_en}</h2>

                            <div className="slide-line"></div>

                            <p className="slide-description">{sliderData.description_en}</p>

                            {
                              (sliderData.button_text2_en) ? (
                                  <ButtonsContainer>
                                    <Button left>
                                      <a href={sliderData.button_1_en_url} target="_blank">
                                        {sliderData.button_text1_en}
                                      </a>
                                    </Button>

                                    <Button>
                                      <a href={sliderData.button_2_en_url} target="_blank">
                                        {sliderData.button_text2_en}
                                      </a>
                                    </Button>
                                  </ButtonsContainer>
                                ) : (
                                  <ButtonContainer>
                                    <Button left>
                                      <a href={sliderData.button_1_en_url} target="_blank">
                                        {sliderData.button_text1_en}
                                      </a>
                                    </Button>
                                  </ButtonContainer>
                                )
                              }
                          </> 
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