import React from "react";
import GreetingContainer from "../greetings/greeting_container";
import { Link } from "react-router-dom";

class Splash extends React.Component{
    render(){
        const bgImg = "https://assets.nflxext.com/ffe/siteui/vlv3/5c235903-02cc-4228-85a2-5fcef1e47627/ca14817e-a9cb-460a-8865-f53dc27950e4/US-en-20211227-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        return(    
        <div className="splash-content">
                <img src={bgImg} className="splash-bg" />
                {/* <GreetingContainer /> */}
                <div className='splash-modal'>
                    <div className='splash-modal-content'>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch?</h3>
                        <Link className='greeting-btn' to='/signup'>Get Started</Link>
                        <Link className="login-btn" to="/login">Log In</Link>
                    </div>
                 </div>
        </div>
        )
    }
}

export default Splash;