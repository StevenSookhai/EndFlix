import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        this.props.processForm(user);
    }

    render() {
        // const text = this.props.formType === 'signup' ? 'Sign Up!' : 'Login'
        const altText = this.props.formType === 'signup' ? 'Login' : 'Sign up'
        const link = this.props.formType === 'signup' ? '/login' : '/signup'

        const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)

        return (
            <div className='session-form'>
                <h2>{this.props.action}</h2>
                <Link to={link}>{altText} instead</Link>
                <ul>{errors}</ul>
                <form>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>

                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>

                    <button onClick={this.handleSubmit}>{this.props.action}</button>
                </form>

            </div>
        );
    }

}

export default SessionForm;