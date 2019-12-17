import React, {Fragment} from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { SpinnerWrapper } from '../../styles/SpinnerWrapper';
import { FAQWrapper } from '../../styles/FAQ';

/** HOOKS */
import { useDataFromAPI as useFAQData } from '../../helpers/useHooks';

const FAQ = () => {
    const [FAQ, loading] = useFAQData('https://dev.winbet-bg.com/api/bg/faq');

    if(loading) {
        return(
          <SpinnerWrapper>
            <Spinner animation="border" variant="danger" />
          </SpinnerWrapper>
        )
      };

    return(
        <FAQWrapper className="container">
            <Breadcrumb>
                <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                <Breadcrumb.Item href="#">Информация</Breadcrumb.Item>

                <Breadcrumb.Item>Често задавани въпроси</Breadcrumb.Item>
            </Breadcrumb>

            <BlackTitle>Често задавани въпроси</BlackTitle>

            <HorizontalLine red />

            {
                FAQ.map((data, index) => {
                    return(
                        <Fragment key={index}>
                            <p dangerouslySetInnerHTML={{__html: data.description_bg}} />
                        </Fragment>
                    )
                })
            }
        </FAQWrapper>
    )
};

export default FAQ;