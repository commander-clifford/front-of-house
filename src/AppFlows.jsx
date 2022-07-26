import React, {useState} from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch, useParams } from "react-router-dom"; // https://v5.reactrouter.com/web/example/nesting

// Route Components
import Home from "./pages/home";
import SignUpFlow from "./pages/sign-up-flow/_sign-up-flow";

import { enter, exit } from './timelines'; // https://css-tricks.com/animating-between-views-in-react/

const prevPathname = null;

const AppFlows = (props) => {

  const [newAccountData, setNewAccountDataState] = useState({
    email: "",
    password: "",
    recurance: "",
    plan: "",
    price: "",
  });

  console.log("AppFlows newAccountData",newAccountData);

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

        {/* <Route exact path="/config">
          <Config />
        </Route> */}

        <Route exact path="/">
          <Home account={newAccountData}/>
        </Route>

        <Route path="/sign-up">
          <SignUpFlow account={newAccountData}/>
        </Route>

      </Switch>
    </Transition>
  </TransitionGroup>
  );
  };

export default AppFlows;
