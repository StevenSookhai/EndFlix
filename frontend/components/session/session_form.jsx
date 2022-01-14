import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            email: this.props.email ? this.props.email : '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this)
        this.handleHomepage = this.handleHomepage.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            // .then(() => this.props.history.push('/signup'));
    }
    handleDemo(e){
        e.preventDefault();
        this.setState({email: "Email", password: "Password"})
        this.props.processForm(this.state)
    }

    handleHomepage(){
        this.props.history.push('/')
    }

    render() {
        const text = this.props.formType === 'signup' ? 'Member?' : 'New to Endflix?   '
        const altText = this.props.formType === 'signup' ? 'Login' : 'Sign up now'
        const link = this.props.formType === 'signup' ? '/login' : '/signup'
        const demoUser = this.props.formType === 'login' ? (
            <button className="demo-button" onClick={this.handleDemo}>Demo User</button>
        ) : null
    
        const errors = this.props.errors.map((error, idx) => <  li key={idx} className="error-li">{error}</li>)
        const bgImg = "https://assets.nflxext.com/ffe/siteui/vlv3/5c235903-02cc-4228-85a2-5fcef1e47627/ca14817e-a9cb-460a-8865-f53dc27950e4/US-en-20211227-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        const logo =  "https://fontmeme.com/permalink/220102/80b2e83ec91311621e8aea703b915905.png"
 
        return (
          <div className="session-container">
              <div>
                    <img onClick={this.handleHomepage} src={logo} className="logo" />
                    {/* <a href="/">LOOSDSAD</a> */}
              </div>
            
            <div className="overlay"></div>
            <img src={bgImg} className="splash-bg" />
            <div className='session-form'>
                <h2>{this.props.action}</h2>
                {/* <Link to={link}>{altText} instead</Link> */}
                <p className="errors">{errors}</p>
                <form className="login-signup-form">
                        <input
                            className="session-email"
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                        <input
                            className="session-password"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    <button className="session-button" onClick={this.handleSubmit}>{this.props.action}</button>
                    {/* <button className="demo-button" onClick="">Demo User</button> */}
                    {demoUser}
                
                    {/* <label className="facebook-login">Login with Facebook</label> */}
                    {/* <label className="google-cap">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</label> */}
                </form>
                    <label className="sign-up-link">{text}   </label>
                    <Link className="sign-up" to={`${link}`}>{altText}.</Link>

            </div>
          </div>
        );
    }

}

export default SessionForm;