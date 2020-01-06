import React, {useContext, useState} from 'react';
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

/** COMPONENTS */
import Pagination from '../components/Pagination';

const NewsPerPage = (props) => {

    const [newsData, loading] = useNewsData(props.url);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const { lng } = useContext(languageContext);
    
    if(lng === 'bg') {
        localStorage.setItem('newsData', JSON.stringify(newsData));
    } else {
        localStorage.setItem('newsDataEn', JSON.stringify(newsData));
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost);
    
    const newsImgUrl = "https://dev.winbet-bg.com/uploads/images/news/";

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
                currentPosts && currentPosts.map((singleNews, index) => {
                    console.log(singleNews)
                    return(
                        <SingleNews key={index}>
                            {
                                (lng === 'bg') ? 
                                (
                                    <>
                                        <Link to={`/bg/news${singleNews.id}`} className="router-link-image">
                                            <img src={`${newsImgUrl}${singleNews.image_name}`}/>
                                        </Link>
                                    </>
                                ):
                                (
                                    <>
                                        <Link to={`/en/news${singleNews.id}`} className="router-link-image">
                                            <img src={`${newsImgUrl}${singleNews.image_name}`}/>
                                        </Link>
                                    </> 
                                )
                            }

                            <div className="news-information">
                                <span className="news-information-date">{singleNews.date}</span>
                                <div className="news-information-line"></div>
                                {
                                    (lng === 'bg') ? 
                                    (
                                        <>
                                            <h4 className="news-information-title">{singleNews.title_bg}</h4>
                                            <p className="news-information-short-description">{singleNews.short_description_bg}</p>
                                            <Link className="news-information-link" to={`/bg/news${singleNews.id}`}>Прочети ></Link>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <h4 className="news-information-title">{singleNews.title_en}</h4>
                                            <p className="news-information-short-description">{singleNews.short_description_en}</p>
                                            <Link className="news-information-link" to={`/bg/news${singleNews.id}`}>Read ></Link>
                                        </>
                                    )
                                }
                            </div>
                        </SingleNews>
                    )
                })
            }

            <Pagination postsPerPage={postsPerPage} totalPosts={newsData.length} paginate={(pageNumber) => setCurrentPage(pageNumber)}/>
        </NewsPerPageCnt>
    )
};

export default NewsPerPage;