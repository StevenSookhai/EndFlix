import React from "react";
import GreetingContainer from "../greetings/greeting_container";
import { Link } from "react-router-dom";
import Header from "./header";

class Splash extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            goToSignUp: false
        }
    this.handleSignUp = this.handleSignUp.bind(this)
    }
    updateEmail(type) {
        return e => this.setState({ [type]: e.target.value })
    }
    handleSignUp(){
        this.props.history.push({ pathname: `/signup`, email: this.state.email })
    }
    render(){
        const bgImg = "https://assets.nflxext.com/ffe/siteui/vlv3/5c235903-02cc-4228-85a2-5fcef1e47627/ca14817e-a9cb-460a-8865-f53dc27950e4/US-en-20211227-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        return(    
            <div>
                <Header />
                <img src={bgImg} className="splash-bg" />
                <div className="overlay"></div>
                <div className="splash-content">
                    {/* <GreetingContainer /> */}
                    <div className='splash-modal'>
                        <div className='splash-modal-content'>
                            <h1 className="unlimited-movie">Unlimited movies,TV          shows, and more.</h1>
                            <h2 className="watch-anywhere">Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            {/* <label className="sign-up-label"> Hello </label> */}
                            <div className="sign-up-container">
                                <input type="text" className="sign-up-input" placeholder="Email Address" onChange={this.updateEmail('email')}/>
                                <button className='greeting-btn' onClick={this.handleSignUp}>Get Started </button>
                            
                            </div>
                            {/* <Link className="login-btn" to="/login">Log In</Link> */}
                        </div>
                    </div>
                    <div className="second-splash-section">
                                <div className="splash-second-contents">
                                    <h1 className="enjoy-tv">Enjoy on your TV.</h1>
                                    <h2 className="smart-tv">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                                </div>

                                <div className="vid-con"> 
                                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video>
                                </div>
                    </div>
                    <div className="third-splash-section">
                        <div className="splash-third-contents">
                            {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video> */}
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className="smart-tv">Download your shows to watch offline.</h1>
                            <h2 className="smart-tv">Save your favorites easily and always have something to watch.</h2>
                        </div>
                    </div>

                    <div className="fourth-splash-section">
                        <div className="splash-fourth-contents">
                            {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video> */}
                            <h1 className="enjoy-tv">Watch everywhere.</h1>
                            <h2 className="smart-tv">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                        </div>
                        <div className="vid-con">
                            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"></video>
                        </div>
                    </div>
                    <div className="fifth-splash-section">
                        <div className="splash-fifth-contents">
                            {/* <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video> */}
                            <img src="https://occ-0-448-444.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="" />
                        </div>
                        <div className="text-section">
                            <h1 className="smart-tv">Create profiles for kids.</h1>
                            <h2 className="smart-tv">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                        </div>
                    </div>
                    <footer>
                        <div className='splash-footer'>
                            <p>Social links</p>

                            <ul>
                                <li>
                                    <a href="">GitHub</a>
                                </li>

                                <li>
                                    <a href="">My LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Splash;