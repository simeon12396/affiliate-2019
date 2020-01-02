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
        window.scrollTo(0, 700);

        return () => {
            window.scrollTo(0,0)
        }
    }, []);

    return(
        <>
            <SlickSlider slidersAPIUrl ='https://dev.winbet-bg.com/api/bg/sliders' />

            <CasinoContent />

            <NewsWrapper className="container" id="news-wrapper">
                <BreadcrumbWrapper>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                        <Breadcrumb.Item>Новини</Breadcrumb.Item>
                    </Breadcrumb>
                </BreadcrumbWrapper>

                <h2>Последни новини</h2>

                <HorizontalLine red/>

                <NewsPerPage url="https://dev.winbet-bg.com/api/bg/news" />
            </NewsWrapper>
        </>
    );
};

export default News;