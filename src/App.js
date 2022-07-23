import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/
import Header from "./components/header";
import AppRoutes from "./Routes";
import './App.scss';

import Home from './pages/home';

// import { createBrowserHistory } from 'history'

// const newHistory = createBrowserHistory();

function App() {
  return (

        <Router>

          {/* <Header path={location.pathname}/> */}
          <Header />

          <main className="main">            
    
            <div className="gallery-window">
              <Route path="/" component={AppRoutes}/>
            </div>

          </main>

          {/* <Footer path={location.pathname} sitePaths={sitePaths} /> */}

        </Router>

  );
}

export default App;
