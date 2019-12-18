import React, {Fragment} from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { SpinnerWrapper } from '../../styles/SpinnerWrapper';
import { FAQWrapper } from '../../styles/FAQ';
import { BreadcrumbWrapper} from '../../styles/Breadcrumb';

/** HOOKS */
import { useDataFromAPI as useFAQData } from '../../helpers/useHooks';

const FAQEn = () => {
    const [FAQ, loading] = useFAQData('https://dev.winbet-bg.com/api/en/faq');

    if(loading) {
        return(
          <SpinnerWrapper>
            <Spinner animation="border" variant="danger" />
          </SpinnerWrapper>
        )
      };

    return(
        <FAQWrapper className="container">
            <BreadcrumbWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                    <Breadcrumb.Item href="#">Information</Breadcrumb.Item>

                    <Breadcrumb.Item>FAQ</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapper>

            <BlackTitle>FAQ</BlackTitle>

            <HorizontalLine red />

            {
                FAQ.map((data, index) => {
                    return(
                        <Fragment key={index}>
                            <p dangerouslySetInnerHTML={{__html: data.description_en}} />
                        </Fragment>
                    )
                })
            }
        </FAQWrapper>
    )
};

export default FAQEn;