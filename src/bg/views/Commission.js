import React, {Fragment} from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { SpinnerWrapper } from '../../styles/SpinnerWrapper';
import { CommissionWrapper } from '../../styles/Commission';

/** HOOKS */
import { useDataFromAPI as useCommissionData } from '../../helpers/useHooks';

const Commission = () => {

    const [commissionData, loading] = useCommissionData('https://dev.winbet-bg.com/api/bg/commissions');
    
    if(loading) {
        return(
          <SpinnerWrapper>
            <Spinner animation="border" variant="danger" />
          </SpinnerWrapper>
        )
      };
      
    return(
        <CommissionWrapper className="container">
            <Breadcrumb>
                <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                <Breadcrumb.Item href="#">Информация</Breadcrumb.Item>

                <Breadcrumb.Item>Правила и условия</Breadcrumb.Item>
            </Breadcrumb>

            <BlackTitle>Правила и условия</BlackTitle>

            <HorizontalLine red />
        </CommissionWrapper>
    )
};

export default Commission;