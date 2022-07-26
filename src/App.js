import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/header";
import AppFlows from "./AppFlows";
import './App.scss';

const App = () => {
  return (

    <Router>

      <Header />

      <main>            
        <Route path="/" component={AppFlows}/>
      </main>

    </Router>

  );
}

export default App;
