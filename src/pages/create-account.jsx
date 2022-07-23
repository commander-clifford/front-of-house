import React from 'react';
import {Button} from '@mui/material';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';


const CreateAccount = props => {

  const history = useHistory();

  console.log("CreateAccount account",props.account);

  const goNext = (e) => {
    e.preventDefault();

    props.account.email = e.target.email.value ? e.target.email.value : props.account.email;
    props.account.password = e.target.password.value ? e.target.password.value : "securepassword123";

    const location = {
      pathname: '/intro-plans'
    }  
    history.push(location);
    
  }


  return (
    <article className="center create-account">

      <section className="breadcrumb">
        Step 1 of 3
      </section>



      <section className="card card-- art__stagger-in art__stagger-out">

        <div className="card__content">
          <h1>Create a password to secure your account</h1>
          <p>This door won't hold itself, set a password and we'll "Hold&nbsp;the&nbsp;Door" for you.</p>
        </div>

        <form action="" className="card__actions" onSubmit={goNext}>
          <TextField className="input" type="email" name="email" label="E-Mail" variant="outlined" value={props.account.email} />
          <TextField className="input" type="password" name="password" label="Password" variant="outlined" />
          <TextField className="input" type="password" name="confirm-password" label="Confirm Password" variant="outlined" />
          <Button type="submit" className="" variant="contained" size="large">Next</Button>
        </form>
      </section>

    </article>
  );

}

export default CreateAccount;
