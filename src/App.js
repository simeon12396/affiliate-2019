import React from 'react';
import './App.css';

/** ROUTER */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** BG VERSION */
import Home from './bg/views/Home';
import AboutUs from './bg/views/AboutUs';
import TermsAndConds from './bg/views/TermsAndConds';
import Commission from './bg/views/Commission';

/** EN VERSION */
import HomeEn from './en/views/HomeEn';
import AboutUsEn from './en/views/AboutUsEn';
import TermsAndCondsEn from './en/views/TermsAndCondsEn';

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
                  </MainLayout>
                </Switch>
              ) :

              (
                <Switch>
                  <MainLayout>
                    <Route exact path="/:lng" component={HomeEn} />

                    <Route exact path="/:lng/about" component={AboutUsEn} />

                    <Route exact path="/:lng/terms-and-conditions" component={TermsAndCondsEn}/>
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
