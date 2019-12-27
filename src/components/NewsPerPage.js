import React, {Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';

/** STYLED COMPONENTS */
import { NewsPerPageCnt, SingleNews } from '../styles/NewsPerPage';
import { SpinnerWrapper } from '../styles/SpinnerWrapper';

/** HOOKS */
import { useDataFromAPI as useNewsData } from '../helpers/useHooks';

/** REACT BOOTSTRAP */
import Spinner from 'react-bootstrap/Spinner';

/** CONTEXTS */
import { languageContext } from '../contexts/languageContext';

const NewsPerPage = (props) => {

    const [newsData, loading] = useNewsData(props.url);

    console.log(newsData)
    const newsImgUrl = "https://dev.winbet-bg.com/uploads/images/news/";

    const { lng } = useContext(languageContext);

    if(loading) {
        return(
          <SpinnerWrapper>
            <Spinner animation="border" variant="danger" />
          </SpinnerWrapper>
        )
      };

    return(
        <NewsPerPageCnt>
            {
                newsData && newsData.map((singleNews, index) => {
                    return(
                        <SingleNews key={index}>
                            <Link to="#" className="router-link-image">
                                <img src={`${newsImgUrl}${singleNews.image_name}`}/>
                            </Link>

                            <div className="news-information">
                                <span className="news-information-date">{singleNews.date}</span>
                                <div className="news-information-line"></div>
                                {
                                    (lng === 'bg') ? 
                                    (
                                        <>
                                            <h4 className="news-information-title">{singleNews.title_bg}</h4>
                                            <p className="news-information-short-description">{singleNews.short_description_bg}</p>
                                            <Link className="news-information-link" to="#">Прочети ></Link>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <h4 className="news-information-title">{singleNews.title_en}</h4>
                                            <p className="news-information-short-description">{singleNews.short_description_en}</p>
                                            <Link className="news-information-link" to="#">Read ></Link>
                                        </>
                                    )
                                }
                            </div>
                        </SingleNews>
                    )
                })
            }

        </NewsPerPageCnt>
    )
};

export default NewsPerPage;