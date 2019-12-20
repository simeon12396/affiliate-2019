import React, {useEffect} from 'react';

/** COMPONENTS */
import SlickSlider from '../../components/SlickSlider';
import CasinoContent from '../../components/CasinoContent';
import NewsPerPage from '../../components/NewsPerPage';

/** STYLED COMPONENTS */
import { BreadcrumbWrapper } from '../../styles/Breadcrumb';
import { NewsWrapper} from '../../styles/News';
import { HorizontalLine } from '../../styles/HorizontalLine';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 1100);

        return () => {
            window.scrollTo(0,0)
        }
    }, []);

    return(
        <>
            <SlickSlider slidersAPIUrl ='https://dev.winbet-bg.com/api/en/sliders' />

            <CasinoContent />

            <NewsWrapper className="container" id="news-wrapper">
                <BreadcrumbWrapper>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                        <Breadcrumb.Item>News</Breadcrumb.Item>
                    </Breadcrumb>
                </BreadcrumbWrapper>

                <h2>Latest news</h2>

                <HorizontalLine red/>

                <NewsPerPage url="https://dev.winbet-bg.com/api/en/news" />
            </NewsWrapper>
        </>
    );
};

export default News;