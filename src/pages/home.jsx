import React from 'react';
import "./home.scss";
import Hero from "../components/hero";


const Home = (props) => {




  console.log("Home props",props);
  console.log("Home account",props.account);


    return (
      <article className="home">
 

        <Hero account={props.account}/>


      </article>
    );

};

export default Home;
