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

const NewsEn = () => {
    return(
        <>
            <SlickSlider slidersAPIUrl ='https://dev.winbet-bg.com/api/en/sliders' />

            <CasinoContent />

            <NewsWrapper className="container">
                <BreadcrumbWrapper>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                        <Breadcrumb.Item>News</Breadcrumb.Item>
                    </Breadcrumb>
                </BreadcrumbWrapper>

                <h2>Latest news</h2>

                <HorizontalLine red/>
            </NewsWrapper>
        </>
    );
}

export default NewsEn;