import React from "react";
import { Link } from "react-router-dom";

export default class BrowseHeader extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const logo = "https://fontmeme.com/permalink/220102/80b2e83ec91311621e8aea703b915905.png" 
        return(
            <div className="header-main-container">
                <div className="header-content">
                    <div className="logo-links-container">
                        <img width="100px"src={logo} alt="" />

                        <div className="header-links">
                            <a href="#">Home</a>
                            <a href="#">TV Shows</a>
                            <a href="#">Movies</a>
                            <a href="#">New & Popular</a>
                            {/* <a href="#">My List</a> */}
                            <Link to="/my-list">My List</Link>
                        </div>

                    </div>

                    <div className="settings-container">
                        {/* <button onClick={this.props.logout}> */}
                            <img width='35px' src= "https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41">
                            </img>
                            {/* <div className='dropdown-menu'>
                                Porfiles
                            </div> */}
                        {/* </button> */}
                    </div>
                </div>
            </div>
        )
    }
}

