import React from 'react';
import "./home.scss";
import Hero from "../components/hero";
import CtaBand from "../components/cta-band";
import WatchBand from "../components/watch-band";
import { useHistory } from "react-router-dom";


const Home = (props) => {

  const { account } = props;
  console.log("Home => account",account);

  const history = useHistory();

  const signUpSubmit = (e) => {

    e.preventDefault();

    account.email = e.target.email.value ? e.target.email.value : null;

    console.log("Home Hero signUpSubmit account",account);
  
    const location = {
      pathname: '/sign-up'
    }
  
    history.push(location);
  
  }

    return (
      <article className="home">
 
        <Hero signUpSubmit={signUpSubmit}/>
        <CtaBand signUpSubmit={signUpSubmit}/>
        <WatchBand signUpSubmit={signUpSubmit}/>

      </article>
    );

};

export default Home;
