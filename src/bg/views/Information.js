import React from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { BreadcrumbWrapper} from '../../styles/Breadcrumb';

const Information = () => {
    return(
        <div className="container">
            <BreadcrumbWrapper>
                <Breadcrumb justifyFlexEnd>
                    <Breadcrumb.Item href="/bg">Начало</Breadcrumb.Item>

                    <Breadcrumb.Item>Информация</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbWrapper>

            <BlackTitle>Информация</BlackTitle>

            <HorizontalLine red />

            <p style={{
                color: '#86878b', 
                fontSize: '15px', 
                marginBottom: '45px'
                }}
            >
                В тази категория ще намерите най-важните теми и въпроси, относно нашата Партньорска програма.
                Съветваме Ви редовно да проверявате нашия сайт, защото постоянно пускаме нови промоции и нововъведения.
            </p>
        </div>
    )
};

export default Information;