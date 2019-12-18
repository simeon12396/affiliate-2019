import React from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { BreadcrumbWrapper} from '../../styles/Breadcrumb';

const InformationEn = () => {
    return(
        <div className="container">
            <BreadcrumbWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                    <Breadcrumb.Item>Information</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapper>

            <BlackTitle>Information</BlackTitle>

            <HorizontalLine red />

            <p style={{
                color: '#86878b', 
                fontSize: '15px', 
                marginBottom: '45px'
                }}
            >
            In this category, you will find the most useful information regarding our Affiliate program.
            We kindly advise you to check regularly our site for new promotions and implementations.
            </p>
        </div>
    )
};

export default InformationEn;