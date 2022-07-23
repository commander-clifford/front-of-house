import React, { Component } from 'react';
import {Button} from '@mui/material';
import { useHistory } from "react-router-dom";

const IntroAccount = props => {

  const history = useHistory();

  console.log("IntroAccount account",props.account);

  const goNext = (e) => {
    e.preventDefault();
    const location = {
      pathname: '/create-account'
    }
    history.push(location);
  }

  return (
    <article className="center intro-account">
      <section className="breadcrumb">
        Step 1 of 3
      </section>
      <section className="card card--intro art__stagger-in art__stagger-out">
        <div className="card__content">
          <h1>Great!<br/>Let's finish creating your account</h1>
          <p>You're one step closer to enjoying the best entertainment that HBO&nbsp;Max has to offer.</p>
        </div>
        <div className="card__actions"></div>
        <Button onClick={goNext} className="next" variant="contained" size="large">Next</Button>
      </section>
    </article>
  );

}

export default IntroAccount;
