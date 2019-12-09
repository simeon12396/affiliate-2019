import React from 'react';
import { NewsPanelWrapper, NewsButton } from '../styles/NewsPanel';
import { HorizontalLine } from '../styles/common/HorizontalLine';
import { useDataFromAPI as useNews } from '../helpers/useHooks';
import NewsSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const NewsPanel = () => { 
    const news = useNews('https://dev.winbet-bg.com/api/bg/news');
    
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
        <NewsPanelWrapper>
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
        </NewsPanelWrapper>
    )
};

export default NewsPanel;