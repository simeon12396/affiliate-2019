import React, {Fragment} from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { SpinnerWrapper } from '../../styles/SpinnerWrapper';
import { TermsAndCondsWrapper } from '../../styles/TermsAndConds';
import { BreadcrumbWrapper} from '../../styles/Breadcrumb';

/** HOOKS */
import { useDataFromAPI as useTermsAndCondData } from '../../helpers/useHooks';

const TermsAndConds = () => {

    const [termsAndCond, loading] = useTermsAndCondData('https://dev.winbet-bg.com/api/bg/terms');
    
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
                    <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                    <Breadcrumb.Item href="/bg/information">Информация</Breadcrumb.Item>

                    <Breadcrumb.Item>Правила и условия</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapper>

            <BlackTitle>Правила и условия</BlackTitle>

            <HorizontalLine red />

            {
                termsAndCond.map((data, index) => {
                    return(
                        <Fragment key={index}>
                            <p dangerouslySetInnerHTML={{__html: data.description_bg}} />
                        </Fragment>
                    )
                })
            }
        </TermsAndCondsWrapper>
    )
};

export default TermsAndConds;