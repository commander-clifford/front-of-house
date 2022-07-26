import React from 'react';
import {Button} from '@mui/material';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import {gsap, Power2} from "gsap";
import Breadcrumb from "../../components/breadcrumb";

const SetupPayment = props => {

  const { account } = props;
  const history = useHistory();

  console.log("SetupPayment account",account);

  const goNext = (e) => {
    e.preventDefault();

    account.email = e.target.email.value ? e.target.email.value : account.email;
    account.password = e.target.password.value ? e.target.password.value : "securepassword123";

    const location = {
      pathname: '/sign-up/intro-plans'
    }  
    history.push(location);
    
  }


  return (
    <article className="center create-account">

      <section className="breadcrumb">
        Step 3 of 3
      </section>
      <Breadcrumb step={1}/>

      <section className="card card-- art__stagger-in art__stagger-out">
        SetupPayment
      </section>

    </article>
  );

}

export default SetupPayment;
