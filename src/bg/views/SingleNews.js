import React, { useState } from 'react';
import { Link  } from 'react-router-dom';

/** STYLED COMPONENTS */
import { BreadcrumbWrapper } from '../../styles/Breadcrumb';
import { SocialButtons } from '../../styles/UpperFooter';
import { SingleNewsWrapper } from '../../styles/SingleNews';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'

/** SLICK SLIDER PLUGIN */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** Image viewer */
import Viewer from 'react-viewer';

/** SOCIAL ICONS SHARE */
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, ViberShareButton, ViberIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

const SingleNews = (props) => {

    const getNewsFromLS = JSON.parse(localStorage.getItem('newsData'));

    const paramsId = props.match.params.id;
    
    const newsImgUrl = "https://dev.winbet-bg.com/uploads/images/news/";

    const newsSliderImg = "https://dev.winbet-bg.com/uploads/images/newsImages/";

    const [ visible, setVisible ] = useState(false);

    const [ currentlyImgSrc, setCurrentlyImgSrc ] = useState('');

    const changePreviousNews = (actualId, length) => {
        if(actualId > 1) {
            props.history.replace(`/bg/news${actualId - 1}`);
        } else {
            props.history.replace(`/bg/news${length}`)
        }
    };

    const changeNextNews = (actualId, length) => {
        if(actualId < length) {
            props.history.replace(`/bg/news${actualId + 1}`);
        } else {
            props.history.replace(`/bg/news1`);
        }
    };

    const isOpen = (src) => {
        setVisible(true);
        setCurrentlyImgSrc(src);
    };

    const sliderSettings = {
        dots: false,
        fade: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        pauseOnHover: false
      };

      const latestThreeNews = getNewsFromLS.slice(0, 3);

    return (
        <>
            {
                getNewsFromLS.map(singleNews => {
                    if(singleNews.actualId == paramsId) {
                        return (
                            <SingleNewsWrapper key={singleNews.actualId} className="container">
                                <BreadcrumbWrapper>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                                        <Breadcrumb.Item href="/bg/news">Новини</Breadcrumb.Item>

                                        <Breadcrumb.Item>{singleNews.title_bg}</Breadcrumb.Item>
                                    </Breadcrumb>
                                </BreadcrumbWrapper>
                                
                                <div className="single-news-date">
                                    <span>{singleNews.date}</span>
                                </div>

                                <div className="single-news-navigation">
                                    <div className="single-news-buttons">
                                        <Link to="#" onClick={() => changePreviousNews(singleNews.actualId, getNewsFromLS.length)}>{`< Обратно`}</Link>

                                        <Link to="#" onClick={() => changeNextNews(singleNews.actualId, getNewsFromLS.length)}>{`Следваща >`}</Link>
                                    </div>

                                    <div className="single-news-social-media">
                                        <FacebookShareButton url="https://www.facebook.com/winbet.bg.online/">
                                            <FacebookIcon size={32}round />
                                        </FacebookShareButton>

                                        <TwitterShareButton url="https://twitter.com/dwinbet">
                                            <TwitterIcon size={32}round />
                                        </TwitterShareButton>

                                        <ViberShareButton url="https://twitter.com/dwinbet">
                                            <ViberIcon size={32}round />
                                        </ViberShareButton>

                                        <LinkedinShareButton url="https://www.linkedin.com/company/casino-solutions-ltd/">
                                            <LinkedinIcon size={32}round />
                                        </LinkedinShareButton>
                                    </div>
                                </div>

                                <h2 className="single-news-heading">{singleNews.title_bg}</h2>

                                <h4 className="single-news-subheading-date">{singleNews.subtitle_bg}</h4>

                                <section className="single-news-details row">
                                    <div className="single-news-content col-md-9">
                                        <img src={`${newsImgUrl}${singleNews.image_name}`} className="general-img" onClick={ (e) => isOpen(e.target.src)}/>

                                        <Viewer
                                            visible={visible}
                                            onClose={() => { setVisible(false) } }
                                            images={[{src: currentlyImgSrc}]}
                                            downloadable = {false}
                                        />
                            
                                        <p dangerouslySetInnerHTML={{__html: singleNews.description_bg}} />

                                        <Slider {...sliderSettings}>
                                            {
                                                (singleNews.photos[0] !== "") ?
                                                (
                                                    singleNews.photos.map( (photo, index) => {
                                                        return(
                                                            <div className="slide" key={index}>
                                                                <img src={`${newsSliderImg}${photo}`} onClick={ (e) => isOpen(e.target.src)}/>
                                                            </div>
                                                        )
                                                    })
                                                ) : (
                                                    null
                                                )
                                            }
                                        </Slider>

                                        <div className="single-news-about-winbet">
                                            <h4>За Winbet</h4>

                                            <p>Winbet е българска верига казина и лицензиран букмейкър. Игралните зали са с двадесетгодишна история зад гърба си, като към момента общият им брой е 37, а от 2015 година фирмата успешно развива и своята онлайн платформа. Основна мисия на мениджмънта и персонала на Winbet е не само да оправдае, но и да надмине очакванията на клиентите, а в основата на успеха на марката стои непрекъснатото усъвършенстване на предлаганите продукти и услуги.</p>
                                        </div>
                                    </div>

                                    <section className="col-md-3 mb-5" >
                                        {
                                            latestThreeNews.map((news, index) => {
                                                return(
                                                    <Link to={`/bg/news${news.actualId}`} className="latest-news-sidebar" key={index}>
                                                        <div className="latest-news">
                                                            <span className="latest-news-date">{news.date}</span>
                                                            <h4 className="latest-news-heading">{news.title_bg}</h4>
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </section>
                                </section>
                            </SingleNewsWrapper>
                        )
                    }
                })
            }
        </>
    );
};

export default SingleNews;
