import React from 'react';
import UpperFooter from './UpperFooter';
import LowerFooter from './LowerFooter';
import { languageContext } from '../contexts/languageContext';

const Footer = () => {
    
    return(

                <footer>
                    <UpperFooter />
                
                    <LowerFooter /> 
                </footer>

    )
};

export default Footer;