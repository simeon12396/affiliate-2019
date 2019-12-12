import React from 'react';

/** COMPONENTS */
import SlickSlider from '../../components/SlickSlider';
import CasinoContent from '../../components/CasinoContent';
import PartnerPrograms from '../../components/PartnerPrograms';
import NewsPanel from '../../components/NewsPanel';
import ContactUs from '../../components/ContactUs';

const Home = (props) => {

    return(
        <main>
            <SlickSlider slidersAPIUrl ='https://dev.winbet-bg.com/api/bg/sliders' />

            <CasinoContent />

            <PartnerPrograms />

            <NewsPanel newsAPIUrl = 'https://dev.winbet-bg.com/api/bg/news' />

            <ContactUs />
        </main>
    );
};

export default Home;