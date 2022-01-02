import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "Email",
            password: "Password"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        // const text = this.props.formType === 'signup' ? 'Sign Up!' : 'Login'
        const altText = this.props.formType === 'signup' ? 'Login' : 'Sign up'
        const link = this.props.formType === 'signup' ? '/login' : '/signup'

        const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)
        const bgImg = "https://assets.nflxext.com/ffe/siteui/vlv3/5c235903-02cc-4228-85a2-5fcef1e47627/ca14817e-a9cb-460a-8865-f53dc27950e4/US-en-20211227-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 

        return (
          <div className="session-container">
            <img src={bgImg} className="splash-bg" />
            <div className='session-form'>
                <h2>{this.props.action}</h2>
                {/* <Link to={link}>{altText} instead</Link> */}
                <ul>{errors}</ul>
                <form className="login-signup-form">
                        <input
                            className="session-email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                        <input
                            className="session-password"
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    <button className="session-button" onClick={this.handleSubmit}>{this.props.action}</button>
                    <label className="remember-me" >Remember me</label>
                    <label className="need-help" >Need help?</label>

                    <label className="facebook-login">Login with Facebook</label>
                    <label className="sign-up-link">New to Netflix? </label>
                    <Link className="sign-up" to="/signup">Sign up now.</Link>
                    <label className="google-cap">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</label>
                </form>

            </div>
          </div>
        );
    }

}

export default SessionForm;