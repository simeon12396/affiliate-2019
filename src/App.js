import React from 'react';
import './App.css';

/** ROUTER */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** BG VERSION */
import Home from './bg/views/Home';
import AboutUs from './bg/views/AboutUs';
import TermsAndConds from './bg/views/TermsAndConds';
import Commission from './bg/views/Commission';
import Faq from './bg/views/FAQ';
import RespBetting from './bg/views/RespBetting';
import Contacts from './bg/views/Contacts';
import Information from './bg/views/Information';

/** EN VERSION */
import HomeEn from './en/views/HomeEn';
import AboutUsEn from './en/views/AboutUsEn';
import TermsAndCondsEn from './en/views/TermsAndCondsEn';
import CommissionEn from './en/views/CommissionEn';
import FaqEn from './en/views/FAQEn';
import RespBettingEn from './en/views/RespBettingEn';
import ContactsEn from './en/views/ContactsEn';
import InformationEn from './en/views/InformationEn';

/** LAYOUTS */
import MainLayout from './layouts/MainLayout';

/** CONTEXTS */
import { languageContext } from './contexts/languageContext';

/** HOOKS */
import { useChangeLanguage } from './helpers/useHooks';

const App = () => {
  const [lng, handlerOnClickBg, handlerOnClickEn] = useChangeLanguage();
  
  return (
    <languageContext.Provider value={{lng, handlerOnClickBg, handlerOnClickEn}}>
      <div className="App">
          <Router>
            { lng === 'bg' ?
            
              (
                <Switch>
                  <MainLayout>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/:lng" component={Home} />

                    <Route exact path="/:lng/about" component={AboutUs} />

                    <Route exact path="/:lng/terms-and-conditions" component={TermsAndConds}/>

                    <Route exact path="/:lng/commission" component={Commission} />

                    <Route exact path="/:lng/f-a-q" component={Faq} />

                    <Route exact path="/:lng/responsible-betting" component={RespBetting} />

                    <Route exact path="/:lng/contacts" component={Contacts} />

                    <Route exact path="/:lng/information" component={Information} />
                  </MainLayout>
                </Switch>
              ) :

              (
                <Switch>
                  <MainLayout>
                    <Route exact path="/:lng" component={HomeEn} />

                    <Route exact path="/:lng/about" component={AboutUsEn} />

                    <Route exact path="/:lng/terms-and-conditions" component={TermsAndCondsEn}/>

                    <Route exact path="/:lng/commission" component={CommissionEn} />

                    <Route exact path="/:lng/f-a-q" component={FaqEn} />

                    <Route exact path="/:lng/responsible-betting" component={RespBettingEn} />

                    <Route exact path="/:lng/contacts" component={ContactsEn} />

                    <Route exact path="/:lng/information" component={InformationEn} />
                  </MainLayout>
                </Switch>
              )
            }
          </Router>
      </div>
    </languageContext.Provider>
  );
};

export default App;
