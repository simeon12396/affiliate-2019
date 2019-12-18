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
import 'react-circular-progressbar/dist/styles.css';

const CommissionEn = () => {

    const [commissionData, loading] = useCommissionData('https://dev.winbet-bg.com/api/en/commissions');
    
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
                <Breadcrumb.Item href="/en">Home</Breadcrumb.Item>

                <Breadcrumb.Item href="#">Information</Breadcrumb.Item>

                <Breadcrumb.Item>Commission plan</Breadcrumb.Item>
            </Breadcrumb>

            <BlackTitle>Commission plan</BlackTitle>

            <HorizontalLine red />

            {
              commissionData ?

              (
                <>
                  <ProgressBarsWrapper className="row justify-content-center">
                    <ProgressBarItem className="progress-bar-item">
                      <CircularProgressbar 
                        value={`${commissionData[0].procent1}`} 
                        text={`${`${commissionData[0].procent1}`}%`}
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

                    <ProgressBarItem className="progress-bar-item">
                      <CircularProgressbar 
                        value={`${commissionData[0].procent2}`} 
                        text={`${`${commissionData[0].procent2}`}%`}
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

                    <ProgressBarItem className="progress-bar-item">
                      <CircularProgressbar 
                        value={`${commissionData[0].procent3}`} 
                        text={`${`${commissionData[0].procent3}`}%`}
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

                    <ProgressBarItem className="progress-bar-item">
                      <CircularProgressbar 
                        value={`${commissionData[0].procent4}`} 
                        text={`${`${commissionData[0].procent4}`}%`}
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

                    <ProgressBarItem className="progress-bar-item">
                      <CircularProgressbar 
                        value={`${commissionData[0].procent5}`} 
                        text={`${`${commissionData[0].procent5}`}%`}
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
                  </ProgressBarsWrapper>

                  <p dangerouslySetInnerHTML={{__html: commissionData[0].description_en}} />
                </>
              ) : null
            }

        </CommissionWrapper>
    )
};

export default CommissionEn;