import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import IntroAccount from './intro-account';
import SetupAccount from "./setup-account";
import IntroPlans from "./intro-plans";
import SetUpPlan from "./setup-plan";
import IntroPayment from "./intro-payment";
import PaymentSetup from "./setup-payment";

const SignUpFlow = (props) => {

  const { account } = props;
  const { path } = useRouteMatch();

  return (
    
    <Switch location={props.location}>
      <Route exact path={path}>
        <IntroAccount account={account}/>
      </Route>
      <Route path={`${path}/setup-account`}>
        <SetupAccount account={account}/>
      </Route>
      <Route path={`${path}/intro-plans`}>
        <IntroPlans account={account}/>
      </Route>
      <Route path={`${path}/setup-plan`}>
        <SetUpPlan account={account}/>
      </Route>
      <Route path={`${path}/intro-payment`}>
        <IntroPayment account={account}/>
      </Route>
      <Route path={`${path}/setup-payment`}>
        <PaymentSetup account={account}/>
      </Route>
    </Switch>
  );
}

export default SignUpFlow;