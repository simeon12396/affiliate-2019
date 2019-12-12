import React, { useContext } from 'react';

/** STYLED COMPONENTS */
import { NewsPanelWrapper, NewsButton } from '../styles/NewsPanel';
import { HorizontalLine } from '../styles/HorizontalLine';

/** HOOKS */
import { useDataFromAPI as useNews } from '../helpers/useHooks';

/** SLICK SLIDER PLUGIN */
import NewsSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** ROUTER */
import { Link } from "react-router-dom";


/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

const NewsPanel = (props) => { 
    const news = useNews(props.newsAPIUrl);

    const { lng } = useContext(languageContext);

    const sliderSettings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000
      };

    return(
        <NewsPanelWrapper className="wrapper">
            {
                ( lng === 'bg') ?
                
                (
                    <>
                        <h2>Последни новини</h2>

                        <HorizontalLine />

                        <NewsSlider {...sliderSettings}>
                            {
                                news.map((news, index) => {
                                    return(
                                        <div key={index} >
                                            <div>
                                                <h4 dangerouslySetInnerHTML={{__html: news.date}} />
                                            </div>

                                            <div>
                                                <p dangerouslySetInnerHTML={{__html: news.short_description_bg}} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </NewsSlider>

                        <NewsButton>
                            <Link to="#">Всички новини</Link>
                        </NewsButton>
                    </>
                ) : 

                (
                    <>
                        <h2>Latest news</h2>

                        <HorizontalLine />

                        <NewsSlider {...sliderSettings}>
                            {
                                news.map((news, index) => {
                                    return(
                                        <div key={index} >
                                            <div>
                                                <h4 dangerouslySetInnerHTML={{__html: news.date}} />
                                            </div>

                                            <div>
                                                <p dangerouslySetInnerHTML={{__html: news.short_description_en}} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </NewsSlider>

                        <NewsButton>
                            <Link to="#">All news</Link>
                        </NewsButton>
                    </>
                )
            }
        </NewsPanelWrapper>
    )
};

export default NewsPanel;