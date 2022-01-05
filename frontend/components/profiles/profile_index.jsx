import React from "react";
import { Link } from "react-router-dom";
import ProfilesIndexItem from "./profile_index_item";
import BrowseContainer from "../browse/browse_container";
import { Redirect } from "react-router-dom";

export default class ProfileIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manage: false
        }
    }
    handleProfile(){
        this.props.history.push('/browse')
    }

    componentDidMount(){
        this.props.fetchProfiles()
        
    }
    componentDidUpdate(){
        if (this.props.currentProfile) {
            this.props.history.push('/browse')
        }
    }
    click(){
        // return console.log()
    }
    render(){
        // if (this.props.currentProfile){
        //     this.handleProfile()
        // }
        // debugger
        // const profiles = this.props.profiles.map(profile => 
        //     <li className="p-lis"><ProfilesIndexItem profile={profile} /></li>
        // )
        const test = this.props.location.pathname === '/profiles' ? "Yes!" : "No!"
        // debugger
        // debugger
        // if (!this.props.currentProfile) {
            return (
                <div>
                    <div className="profiles-bg"></div>
                    <div className="profile-container">
                        <h1 className="profile-header">Who's Watching?</h1>
                        <p>Welcome, {this.props.currentUser.email}</p>
                        <div className="manage-profile">{test}</div>
                        <ul className="profile-list">
                            {
                                // {profiles}
                                this.props.profiles
                                    .map(profile => <li className="p-lis"><ProfilesIndexItem profile={profile} findProfile={this.props.findProfile}/></li>)
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
        
        // } else{
        //     return null
            
        // }
       
        
    }
}

