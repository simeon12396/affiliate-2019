import React, {Fragment} from 'react';

/** REACT BOOTSTRAP */
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Spinner from 'react-bootstrap/Spinner';

/** STYLED COMPONENTS */
import { HorizontalLine } from '../../styles/HorizontalLine';
import { BlackTitle } from '../../styles/BlackTitle';
import { SpinnerWrapper } from '../../styles/SpinnerWrapper';
import { CommissionWrapper, ProgressBarsWrapper, ProgressBarItem } from '../../styles/Commission';

/** HOOKS */
import { useDataFromAPI as useCommissionData } from '../../helpers/useHooks';

/** CIRCULAR PROGRESS BAR PLUGIN */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from "../../components/ChangingProgressProvider";
import 'react-circular-progressbar/dist/styles.css';

const Commission = () => {

    const [commissionData, loading] = useCommissionData('https://dev.winbet-bg.com/api/bg/commissions');
    
    if(commissionData.length !== 0) {
      console.log(commissionData[0].procent1)
    }

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

                <Breadcrumb.Item>Комисионна</Breadcrumb.Item>
            </Breadcrumb>

            <BlackTitle>Комисионна</BlackTitle>

            <HorizontalLine red />

            {
              commissionData ?

              (
                <>
                  <ProgressBarsWrapper className="row justify-content-center">
                    <ChangingProgressProvider values={[0, `${commissionData[0].procent1}`]}>
                      {percentage => (
                        <ProgressBarItem className="progress-bar-item">
                          <CircularProgressbar 
                            value={percentage} 
                            text={`${percentage}%`}
                            background
                            backgroundPadding={4}
                            styles={buildStyles({
                              backgroundColor: "rgb(174, 19, 24)",
                              textColor: "#fff",
                              pathColor: "#fff",
                              trailColor: "transparent"
                            })} 
                          />
                          <p>on Total Revenue</p>

                          <p>up to 20 000BGN</p>
                        </ProgressBarItem>
                      )}
                    </ChangingProgressProvider>

                    <ChangingProgressProvider values={[0, `${commissionData[0].procent2}`]}>
                      {percentage => (
                        <ProgressBarItem className="progress-bar-item">
                          <CircularProgressbar 
                            value={percentage} 
                            text={`${percentage}%`}
                            background
                            backgroundPadding={4}
                            styles={buildStyles({
                              backgroundColor: "rgb(174, 19, 24)",
                              textColor: "#fff",
                              pathColor: "#fff",
                              trailColor: "transparent"
                            })} 
                          />
                          <p>on Total Revenue</p>

                          <p>20 001 - 40 000BGN</p>
                        </ProgressBarItem>
                      )}
                    </ChangingProgressProvider>

                    <ChangingProgressProvider values={[0, `${commissionData[0].procent3}`]}>
                      {percentage => (
                        <ProgressBarItem className="progress-bar-item">
                          <CircularProgressbar 
                            value={percentage} 
                            text={`${percentage}%`}
                            background
                            backgroundPadding={4}
                            styles={buildStyles({
                              backgroundColor: "rgb(174, 19, 24)",
                              textColor: "#fff",
                              pathColor: "#fff",
                              trailColor: "transparent"
                            })} 
                          />
                          <p>on Total Revenue</p>

                          <p>40 001 - 80 000BGN</p>
                        </ProgressBarItem>
                      )}
                    </ChangingProgressProvider>

                    <ChangingProgressProvider values={[0, `${commissionData[0].procent4}`]}>
                      {percentage => (
                        <ProgressBarItem className="progress-bar-item">
                          <CircularProgressbar 
                            value={percentage} 
                            text={`${percentage}%`}
                            background
                            backgroundPadding={4}
                            styles={buildStyles({
                              backgroundColor: "rgb(174, 19, 24)",
                              textColor: "#fff",
                              pathColor: "#fff",
                              trailColor: "transparent"
                            })} 
                          />
                          <p>on Total Revenue</p>

                          <p>80 001 - 100 000BGN</p>
                        </ProgressBarItem>
                      )}
                    </ChangingProgressProvider>

                    <ChangingProgressProvider values={[0, `${commissionData[0].procent5}`]}>
                      {percentage => (
                        <ProgressBarItem className="progress-bar-item">
                          <CircularProgressbar 
                            value={percentage} 
                            text={`${percentage}%`}
                            background
                            backgroundPadding={4}
                            styles={buildStyles({
                              backgroundColor: "rgb(174, 19, 24)",
                              textColor: "#fff",
                              pathColor: "#fff",
                              trailColor: "transparent"
                            })} 
                          />
                          <p>on Total Revenue</p>

                          <p>over 100 000BGN</p>
                        </ProgressBarItem>
                      )}
                    </ChangingProgressProvider>
                  </ProgressBarsWrapper>

                  <p dangerouslySetInnerHTML={{__html: commissionData[0].description_bg}} />
                </>
              ) : null
            }

        </CommissionWrapper>
    )
};

export default Commission;