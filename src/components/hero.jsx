import React from "react";
import "./hero.scss";
import TextField from '@mui/material/TextField';
import {Button, Container} from '@mui/material';
import { useHistory, useParams } from "react-router-dom";
import DoubleReel from "./double-reel";

const Hero = (props) => {

  const history = useHistory();

  const signUpSubmit = (e) => {

    e.preventDefault();

    console.log("Home Hero signUpSubmit email.value",e.target.email.value);

    props.account.email = e.target.email.value ? e.target.email.value : "newUser123@email.com";

    console.log("Home Hero signUpSubmit account",props.account);
  
    const location = {
      pathname: '/intro-account'
    }
  
    history.push(location);
  
  }

  return (
    <section id="page7818-band378014" className="band sc-pGacB gwxSTX max-section-hero-dbl-scroll-parent">
      <div className="container-fluid p-0 max-section-hero-dbl-scroll">
        <div className="sc-jrAFXE heoMYS layout row d-flex">
          <div className="d-flex flex-column col-md-12 align-items-center justify-content-center my-3 pb-5 sc-bqyKOL gIEupW">

            <div className="sc-iqHYmW dhpKCs text rich-text w-100 w-100" id="page7818-band378014-Text378016">
              <div className="text-center">
                <h1>Now streaming blockbuster movies, epic originals, and addictive series</h1>
              </div>
            </div>

            <div id="page7818-band378014-Code378017" className="rich-text">
              <div>
                <DoubleReel/>
              </div>
            </div>

            <div className="">
              <p>Let's get started! Enter your email to start your account.</p>
              <Container className="" maxWidth="">
                <form action="" className="hero-sign-up-cta" onSubmit={signUpSubmit}>
                  <TextField className="email-input" name="email" label="E-Mail" variant="outlined" />
                  <Button type="submit" className="email-submit" variant="contained" size="large">Start</Button>
                </form>
              </Container>
              <p className="small">Plans start at $9.99/month</p>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
