import React from 'react';
import {Button} from '@mui/material';
import { useHistory } from "react-router-dom";

const IntroPayment = props => {

  const history = useHistory();

  const monthlyBasicPrice = "$9.99";
  const monthlyPremiumPrice = "$14.99";
  const yearlyBasicPrice = "$99.99";
  const yearlyPremiumPrice = "$149.99";

  console.log("IntroPayment account",props.account);

  const getPrice = (recurance, plan) => {
    console.log("IntroPayment getPrice",recurance, plan);
    switch(plan) {
      case "premium":
        switch(recurance) {
          case "yearly":
            props.account.price = yearlyPremiumPrice;
            break;
          case "monthly":
            props.account.price = monthlyPremiumPrice;
            break;
        }
        break;
      case "basic":
        switch(recurance) {
          case "yearly":
            props.account.price = yearlyBasicPrice;
            break;
          case "monthly":
            props.account.price = monthlyBasicPrice;
            break;
        }
        break;
      default:
        // code block
    }
    console.log("IntroPayment getPrice account",props.account);
  }
  getPrice(props.account.recurance, props.account.plan);

  const goNext = (e) => {

    e.preventDefault();

    const location = {
      pathname: '/'
    }
    history.push(location);
    
    
  }

  return (
    <article className="center intro-account">
      <section className="breadcrumb">
        Step 3 of 3
      </section>
      <section className="card card--intro art__stagger-in art__stagger-out">
        <div className="card__content">
          <h1>Set up your payment method</h1>
          <p>Start watching as soon as your payment is set up.</p>
          <ul>
            <li>No commitments</li>
            <li>Cancel anytime</li>
          </ul>
        </div>
        <div className="card__actions">
          <form action="" onSubmit={goNext}>
            <Button type="submit" className="next" variant="contained" size="large">Credit or Debit</Button>
          </form>
          <p className='small'>{props.account.price} {props.account.recurance}<br/> for the "{props.account.plan} plan"</p>

        </div>
        
      </section>
    </article>
  );

}

export default IntroPayment;
