import React from "react";
import { Route } from 'react-router-dom';
// import GreetingContainer from "./greeting/greeting_container";
import GreetingContainer from "./greetings/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Splash from "./splash/splash";
import { AuthRoute } from "../util/route_util";
import { Switch, Redirect } from "react-router-dom";

const App = () => (
    <div>
        <header>
        {/* <h1>EndFlix</h1> */}
        <GreetingContainer />
        </header>
        <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/" component={Splash}/>
        </Switch>
    </div>
);

export default App;