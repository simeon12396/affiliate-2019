import React, {Fragment} from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { TermsAndCondsWrapper } from '../../styles/TermsAndConds';
import { SpinnerWrapper } from '../../styles/SpinnerWrapper';
import { BreadcrumbWrapper} from '../../styles/Breadcrumb';

/** HOOKS */
import { useDataFromAPI as useTermsAndCondData } from '../../helpers/useHooks';

const TermsAndConds = () => {

    const [termsAndCond, loading] = useTermsAndCondData('https://dev.winbet-bg.com/api/en/terms');
    
    if(loading) {
        return(
          <SpinnerWrapper>
            <Spinner animation="border" variant="danger" />
          </SpinnerWrapper>
        )
      };

    return(
        <TermsAndCondsWrapper className="container">
            <BreadcrumbWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                    <Breadcrumb.Item href="#">Information</Breadcrumb.Item>

                    <Breadcrumb.Item>Terms and conditions</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapper>

            <BlackTitle>Terms and conditions</BlackTitle>

            <HorizontalLine red />

            {
                termsAndCond.map((data, index) => {
                    return(
                        <Fragment key={index}>
                            <p dangerouslySetInnerHTML={{__html: data.description_en}} />
                        </Fragment>
                    )
                })
            }
        </TermsAndCondsWrapper>
    )
};

export default TermsAndConds;