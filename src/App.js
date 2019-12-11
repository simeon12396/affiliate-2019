import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** BG VERSION */
import Home from './bg/views/Home';
import AboutPage from './bg/views/AboutPage';

/** EN VERSION */
import HomeEn from './en/views/HomeEn';
import AboutPageEn from './en/views/AboutPageEn';

/** LAYOUTS */
import MainLayout from './layouts/MainLayout';
import MainLayoutEn from './layouts/MainLayoutEn';

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

                  <Route exact path="/:lng/about" component={AboutPage} />
                </MainLayout>
              </Switch>
              ) :

              (
                <Switch>
                  <MainLayoutEn>
                    <Route exact path="/:lng" component={HomeEn} />

                    <Route exact path="/:lng/about" component={AboutPageEn} />
                  </MainLayoutEn>
              </Switch>
              )
            }
          </Router>
      </div>
    </languageContext.Provider>
  );
};

export default App;
