import React from "react";
import { Route } from 'react-router-dom';
// import GreetingContainer from "./greeting/greeting_container";
import GreetingContainer from "./greetings/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <div>
        <header>
        <h1>EndFlix</h1>
        <GreetingContainer />
        </header>
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;