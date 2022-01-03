import React from "react";
import GreetingContainer from "../greetings/greeting_container";
import { Link } from "react-router-dom";
import Header from "./header";

class Splash extends React.Component{
    render(){
        const bgImg = "https://assets.nflxext.com/ffe/siteui/vlv3/5c235903-02cc-4228-85a2-5fcef1e47627/ca14817e-a9cb-460a-8865-f53dc27950e4/US-en-20211227-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        return(    
        <div className="splash-content">
                <img src={bgImg} className="splash-bg" />
                {/* <GreetingContainer /> */}
                <Header />
                <div className='splash-modal'>
                    <div className='splash-modal-content'>
                        <h1 className="unlimited-movie">Unlimited movies, TV shows, and more.</h1>
                        <h2 className="watch-anywhere">Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        {/* <label className="sign-up-label"> Hello </label> */}
                        <div className="sign-up-container">
                        <input type="text" className="sign-up-input" value={"Email Address"} />
                        <Link className='greeting-btn' to='/signup'>Get Started </Link>
                        </div>
                         {/* <Link className="login-btn" to="/login">Log In</Link> */}
                    </div>
                 </div>

            {/* <div className="second-splash-section">
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div> */}
        </div>
        )
    }
}

export default Splash;