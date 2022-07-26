import React from 'react';
import {Button} from '@mui/material';
import { useHistory } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";

const IntroAccount = (props) => {

  const history = useHistory();
  const { account } = props;

  const goNext = (e) => {
    e.preventDefault();
    const location = {
      pathname: '/sign-up/setup-account'
    }
    history.push(location);
  }

  return (
    <article className="center intro-account">
    
      <Breadcrumb step={1}/>
      
      <section className="card card--intro art__stagger-in art__stagger-out">
        <div className="card__content">
          <h1>Great!<br/>Let's create your account</h1>
          <p>Soon you'll be enjoying the best entertainment that HBO&nbsp;Max has to offer.</p>
        </div>
        <div className="card__actions"></div>
        <Button onClick={goNext} className="next" variant="contained" size="large">Next</Button>
      </section>
    </article>
  );

}

export default IntroAccount;
