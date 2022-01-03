import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const logo = "https://fontmeme.com/permalink/220102/80b2e83ec91311621e8aea703b915905.png"
    return(
        <div className="header-container">
            <img className="logo" src={logo} />
            <div className="sign-up-button-container">
                <Link className="splash-login-btn" to='/login'> Sign In </Link>
            </div>
        </div>
    )
}

export default Header