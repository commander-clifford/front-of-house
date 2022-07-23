import React, {useState} from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch, useParams } from "react-router-dom";

// Route Components
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import IntroAccount from "./pages/intro-account";
import CreateAccount from "./pages/create-account";
import IntroPlans from "./pages/intro-plans";
import PlanPicker from "./pages/plan-picker";
import IntroPayment from "./pages/intro-payment";

import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/

// const completeCall = target => {
//   gsap.set(target, { clearProps: "position, width" });
// };



const prevPathname = null;

const AppRoutes = (props) => {



  const [newAccountData, setNewAccountDataState] = useState({
    email: "",
    password: "",
    recurance: "",
    plan: "",
    price: "",
  });


  

  // Get the New Account Data
  // let account = props.location.state.account;

  console.log("AppRoutes newAccountData",newAccountData);


  return (
  <TransitionGroup>
    <Transition
      key={props.location.pathname}
      timeout={500}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={(node) => enter(node, props.location.pathname, prevPathname)}
      onExit={(node) => exit(node, props.location.pathname, prevPathname)}
    >
      <Switch location={props.location}>

        {/* <Route exact path="/config" component={Config} /> */}
        <Route exact path="/">
          <Home account={newAccountData}/>
        </Route>
        <Route exact path="/intro-account">
          <IntroAccount account={newAccountData}/>
        </Route>
        <Route exact path="/create-account">
          <CreateAccount account={newAccountData}/>
        </Route>
        <Route exact path="/intro-plans">
          <IntroPlans account={newAccountData}/>
        </Route>
        <Route exact path="/plan-picker">
          <PlanPicker account={newAccountData}/>
        </Route>
        <Route exact path="/intro-payment">
          <IntroPayment account={newAccountData}/>
        </Route>
        {/* <Route exact path="/payment-setup" component={PaymentSetup} data={newAccountData}/> */}


        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </Transition>
  </TransitionGroup>
  );
  };

export default AppRoutes;
