import React from "react";
import { Link } from "react-router-dom";

export default class BrowseHeader extends React.Component {
    constructor(props){
        super(props)
    }

    handleManage() {
        this.props.history.push('/manageprofiles')
    }

    render(){
        const logo = "https://fontmeme.com/permalink/220102/80b2e83ec91311621e8aea703b915905.png"
        const bellIcon = "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-bell-basic-ui-elements-flatart-icons-outline-flatarticons.png" 
        const searchIcon = "https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
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
                            <img width='35px' src={searchIcon}>
                            </img>
                            <img width='35px' src={bellIcon}>
                            </img>
                            <div className="dropdown-container">

                            <img width='35px'color="white" src= "https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41">
                            </img>
                            <div className="dropdown">
                                <span
                                    onClick={() => this.handleManage()}>
                                    Manage Profiles
                                </span>
                                <span
                                    onClick={() => this.props.logout()}>
                                    Log out of EndFlix
                                </span>
                            </div>
                            {/* <div className='dropdown-menu'>
                                Porfiles
                            </div> */}
                        {/* </button> */}
                    </div>
                            </div>
                             

                </div>
            </div>
        )
    }
}

