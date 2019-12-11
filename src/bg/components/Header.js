import React from 'react';
import NavBar from '../../components/NavBar'
import IntermediateBar from '../../components/IntermediateBar'

const Header = () => {
    return(
        <header>
            <NavBar 
                home='Начало' 
                news='Новини'
            />
            
            <IntermediateBar />
        </header>
    );
};

export default Header;