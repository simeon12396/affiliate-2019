import React from 'react';
import NavBar from '../../components/NavBar'
import IntermediateBar from '../../components/IntermediateBar'

const Header = () => {
    return(
        <header>
            <NavBar 
                home='Home' 
                news='News'
            />
            
            <IntermediateBar />
        </header>
    );
};

export default Header;