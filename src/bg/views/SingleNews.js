import React, {useState} from 'react';
import { Link } from 'react-router-dom';

/** STYLED COMPONENTS */
import { BreadcrumbWrapper } from '../../styles/Breadcrumb';
import { SocialButtons } from '../../styles/UpperFooter';
import { SingleNewsWrapper } from '../../styles/SingleNews';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'

/** FONT AWESOME */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faViber, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

/** SLICK SLIDER PLUGIN */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** Image viewer */
import Viewer from 'react-viewer';

const SingleNews = (props) => {
    const getNewsFromLS = JSON.parse(localStorage.getItem('newsData'));
    const currentNewsID = props.match.params.id;

    const newsImgUrl = "https://dev.winbet-bg.com/uploads/images/news/";
    const newsSliderImg = "https://dev.winbet-bg.com/uploads/images/newsImages/";

    const [ visible, setVisible ] = useState(false);
    const [ currentlyImgSrc, setCurrentlyImgSrc ] = useState('');

    const isOpen = (src) => {
        setVisible(true);
        setCurrentlyImgSrc(src);
    }
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

    return (
        <>
            {
                getNewsFromLS.map(singleNews => {
                    if(singleNews.id === currentNewsID) {
                        return (
                            <SingleNewsWrapper key={singleNews.id} className="container">
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
                                        <Link to="#">{`< Обратно`}</Link>

                                        <Link to="#">{`Следваща >`}</Link>
                                    </div>

                                    <div className="single-news-social-media">
                                       <SocialButtons>
                                            <FontAwesomeIcon icon={faFacebookF} />
                                       </SocialButtons>

                                       <SocialButtons>
                                            <FontAwesomeIcon icon={faTwitter} />
                                       </SocialButtons>

                                       <SocialButtons>
                                            <FontAwesomeIcon icon={faViber} />
                                       </SocialButtons>

                                       <SocialButtons>
                                            <FontAwesomeIcon icon={faGoogle} />
                                       </SocialButtons>
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
                                        />
                            
                                        <p dangerouslySetInnerHTML={{__html: singleNews.description_bg}} />

                                        <Slider {...sliderSettings}>
                                            {
                                                (singleNews.photos[0] !== "") ?
                                                (
                                                    singleNews.photos.map( photo => {
                                                        return(
                                                            <div className="slide">
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

                                    <div className="single-news-latest col-md-3">
                                        <span>dadsladasldasldal</span>
                                    </div>
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
