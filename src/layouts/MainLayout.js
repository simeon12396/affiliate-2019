import React from 'react';

/** COMPONENTS */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';

const MainLayout = (props) => {
    return(
        <div>
            <Header />
                {props.children}

            <Cookies />
            
            <Footer />
        </div>
    );
};

export default MainLayout;