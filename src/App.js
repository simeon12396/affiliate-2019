import React from 'react';
import './App.css';

/** ROUTER */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** BG VERSION */
import Home from './bg/views/Home';
import AboutPage from './bg/views/AboutPage';

/** EN VERSION */
import HomeEn from './en/views/HomeEn';
import AboutPageEn from './en/views/AboutPageEn';

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

                    <Route exact path="/:lng/about" component={AboutPage} />
                  </MainLayout>
                </Switch>
              ) :

              (
                <Switch>
                  <MainLayout>
                    <Route exact path="/:lng" component={HomeEn} />

                    <Route exact path="/:lng/about" component={AboutPageEn} />
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
