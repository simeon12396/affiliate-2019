import React from 'react';

/** COMPONENTS */
import SlickSlider from '../../components/SlickSlider';
import CasinoContent from '../../components/CasinoContent';

/** STYLED COMPONENTS */
import { BreadcrumbWrapper } from '../../styles/Breadcrumb';
import { NewsWrapper} from '../../styles/News';
import { HorizontalLine } from '../../styles/HorizontalLine';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const News = () => {
    return(
        <>
            <SlickSlider slidersAPIUrl ='https://dev.winbet-bg.com/api/bg/sliders' />

            <CasinoContent />

            <NewsWrapper className="container">
                <BreadcrumbWrapper>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                        <Breadcrumb.Item>Новини</Breadcrumb.Item>
                    </Breadcrumb>
                </BreadcrumbWrapper>

                <h2>Последни новини</h2>

                <HorizontalLine red/>
            </NewsWrapper>
        </>
    );
}

export default News;