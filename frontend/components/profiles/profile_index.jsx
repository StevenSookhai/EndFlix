import React from "react";
import { Link } from "react-router-dom";

export default class ProfileIndex extends React.Component{
    componentDidMount(){
        this.props.fetchProfiles()
    }
    render(){
        // debugger
        return(
            <div>
                <div>
                    <p>Welcome, {this.props.currentUser.email}</p>
                    <p>Hey Hey in profiles </p>
                    <Link to="/">Home</Link>
                    <ul>
                        {
                        this.props.profiles.map(profile => <li>{profile.name}, {profile.user_id}</li>)
                        }

                    </ul>
                    <button onClick={this.props.logout}>Log Out</button>

                    {/* <button>Manage Profiles </button> */}
                    <Link to="/manageprofiles">Manage Profile</Link>
                    <div>Testing</div>
                    <div>Testing</div>
                    <div>Testing</div> 
                    <div>Testing</div> 
                </div>
            </div>
        )
        
    }
}

