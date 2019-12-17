import React, {Fragment} from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { SpinnerWrapper } from '../../styles/SpinnerWrapper';
import { RespBettingWrapper } from '../../styles/RespBetting';

/** HOOKS */
import { useDataFromAPI as useRespBettingData } from '../../helpers/useHooks';

const RespBetting = () => {
    const [responsibleBetting, loading] = useRespBettingData('https://dev.winbet-bg.com/api/en/bettings');

    if(loading) {
        return(
          <SpinnerWrapper>
            <Spinner animation="border" variant="danger" />
          </SpinnerWrapper>
        )
      };

    return(
        <RespBettingWrapper className="container">
            <Breadcrumb>
                <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                <Breadcrumb.Item href="#">Information</Breadcrumb.Item>

                <Breadcrumb.Item>Responsible betting</Breadcrumb.Item>
            </Breadcrumb>

            <BlackTitle>Responsible betting</BlackTitle>

            <HorizontalLine red />

            {
                responsibleBetting.map((data, index) => {
                    return(
                        <Fragment key={index}>
                            <p dangerouslySetInnerHTML={{__html: data.description_en}} />
                        </Fragment>
                    )
                })
            }
        </RespBettingWrapper>
    )
};

export default RespBetting;