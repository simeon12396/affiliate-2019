import React from 'react';
import Header from '../bg/components/Header';
import Footer from '../bg/components/Footer';

const MainLayout = (props) => {
    return(
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    );
};

export default MainLayout;