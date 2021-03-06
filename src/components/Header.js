import React from 'react';

/** COMPONENTS */
import NavBar from './NavBar';
import IntermediateBar from './IntermediateBar';

const Header = () => {
    
    return(
        <header>
            <NavBar />
            
            <IntermediateBar />
        </header>
    );
};

export default Header;