import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <MainLayout>
            <Route exact path="/" component={Home} />
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
