import React from "react";
import { Route } from 'react-router-dom';
// import GreetingContainer from "./greeting/greeting_container";
import GreetingContainer from "./greetings/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute, ProtectedProfileRoute } from "../util/route_util";
import { Switch, Redirect } from "react-router-dom";
import ProfileIndexContainer from "./profiles/profile_index_container";
// import NewProfileFormContainer from "./profiles/new_profile_form_container";
import BrowseContainer from "./browse/browse_container";
import VideoWatchPageContainer from "./videos/video_watch_page_container";
import MyListIndex from "./myList/my_list_index";
import SearchPageContainer from './search/search_page_container'

const App = () => (
    <div>
        <header>
        {/* <h1>EndFlix</h1> */}
        {/* <GreetingContainer /> */}
        </header>
        <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path='/profiles' component={ProfileIndexContainer} /> 
        {/* <ProtectedRoute path='/manageprofiles' component={NewProfileFormContainer} />  */}
        <ProtectedRoute path='/browse' component={BrowseContainer} /> 
        <ProtectedRoute path='/watch/:videoId' component={VideoWatchPageContainer} /> 
        <ProtectedRoute path='/my-list' component={MyListIndex} /> 
        <ProtectedRoute path='/search/' component={SearchPageContainer} /> 
        <AuthRoute path="/" component={Splash}/>
        </Switch>
    </div>
);

export default App;