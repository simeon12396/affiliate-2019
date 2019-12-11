import React from 'react';
import Header from '../en/components/Header';
import Footer from '../en/components/Footer';

const MainLayoutEn = (props) => {
    return(
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    );
};

export default MainLayoutEn;