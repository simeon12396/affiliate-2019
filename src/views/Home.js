import React from 'react';
import SlickSlider from '../components/SlickSlider';
import CasinoContent from '../components/CasinoContent';
import PartnerPrograms from '../components/PartnerPrograms';
import NewsPanel from '../components/NewsPanel';

const Home = () => {
    return(
        <main>
            <SlickSlider />

            <CasinoContent />

            <PartnerPrograms />

            <NewsPanel />
        </main>
    );
};

export default Home;