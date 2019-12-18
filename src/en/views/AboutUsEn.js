import React, {Fragment} from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { AboutUsWrapper } from '../../styles/AboutUs';
import { SpinnerWrapper } from '../../styles/SpinnerWrapper';
import { BreadcrumbWrapper} from '../../styles/Breadcrumb';

/** HOOKS */
import { useDataFromAPI as useAboutUsData } from '../../helpers/useHooks';

const AboutUsEn = () => {
    const [aboutUsData, loading] = useAboutUsData('https://dev.winbet-bg.com/api/en/aboutUs');

    if(loading) {
        return(
          <SpinnerWrapper>
            <Spinner animation="border" variant="danger" />
          </SpinnerWrapper>
        )
      };

    return(
        <AboutUsWrapper className="container">
            <BreadcrumbWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                    <Breadcrumb.Item>About us</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapper>

            <BlackTitle>About us</BlackTitle>

            <HorizontalLine red />

            {
                aboutUsData.map((data, index) => {
                    return(
                        <Fragment key={index}>
                            <p className="description" dangerouslySetInnerHTML={{__html: data.description_en}} />
                        </Fragment>
                    )
                })
            }
        </AboutUsWrapper>
    )
};

export default AboutUsEn;