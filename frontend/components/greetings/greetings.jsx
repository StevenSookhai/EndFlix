import React from "react";
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Welcome, {currentUser.email}</p>
            <p>Hey Hey </p>
            <Link to="/">Home</Link>

            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            {/* <Link  to="/signup">Sign Up</Link>
            <Link className= "login-btn" to="/login">Log In</Link> */}
        </div>
    );

    return (
        <div>
            {display}
        </div>
    );
};