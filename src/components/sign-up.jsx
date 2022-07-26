import React from "react";
import {Button, TextField } from '@mui/material';
import "./sign-up.scss";

const SignUp = props => {

  console.log("SignUp props", props);

  const { signUpSubmit, expanded } = props;

  const emailInput = () => {
    if(expanded){
      return (
        <TextField className="email-input" name="email" label="E-Mail" variant="outlined" />
      )
    } else {
      return (
        <TextField name="email" style={{display: "none"}}/>
      )
    }
  }

  return (
    <>
      <form action="" className={`hero-sign-up-cta ${expanded ? 'expanded' : ''}`} onSubmit={signUpSubmit}>
        {emailInput()}
        <Button type="submit" className="email-submit" variant="contained" size="large">Get Started</Button>
      </form>
    </>
  );
};

export default SignUp;
