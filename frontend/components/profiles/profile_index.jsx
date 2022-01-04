import React from "react";
import { Link } from "react-router-dom";
import ProfilesIndexItem from "./profile_index_item";

export default class ProfileIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProfiles()
    }
    click(){
        // return console.log()
    }
    render(){
        // debugger
        // debugger
        return(
            <div>
                <div className="profiles-bg"></div>
                <div className="profile-container">
                    <h1 className="profile-header">Who's Watching?</h1>
                    <p>Welcome, {this.props.currentUser.email}</p>
                    <ul className="profile-list">
                        {
                        this.props.profiles
                                .map(profile => <li className="p-lis"><ProfilesIndexItem profile={profile} /></li> )
                        }
                    </ul>
                    <button onClick={this.props.logout}>Log Out</button>

                    {/* <button>Manage Profiles </button> */}
                    <div className="manage-container">
                    <Link className="manage-profile" to="/manageprofiles">Manage Profile</Link>
                    </div>
                </div>
            </div>
        )
        
    }
}

