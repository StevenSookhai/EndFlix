import React from "react";
import Header from '../splash/header'
import { Link } from "react-router-dom";
import ProfilesIndexItem from "./profile_index_item";
import BrowseContainer from "../browse/browse_container";
import { Redirect } from "react-router-dom";


export default class ProfileIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manage: false,
            profile: null,
            formType: 'new'
        }
    this.click = this.click.bind(this)
    this.manage = this.manage.bind(this)
    this.cancelAddProfile = this.cancelAddProfile.bind(this)
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
    click(profile){
        if(this.state.manage){
            return () => {
                this.setState({ formType: 'Edit', profile: profile})
            }
        }
    }
    manage(){
        this.setState({ manage: !this.state.manage });
    }

    cancelAddProfile(){
        this.setState({ profile: null, formType: 'new' })
    }

    render(){
        const profileImg = "https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41"
        const profiles = this.props.profiles.map( profile => {
            <li onclick={this.click(profile)}
            key={profile.id}>
             <img src={profileImg} alt="" />
             <p>{profile.name}</p>
            </li>
        })

        // console.log(Object.values(profiles))

        const logo = "https://fontmeme.com/permalink/220102/80b2e83ec91311621e8aea703b915905.png"

        if(!this.state.manage){
            return (
                <div>

                    <div>
                        <img src={logo} className="logo" />
                        {/* <a href="/">LOOSDSAD</a> */}
                    </div>
                    <div className="profiles-bg"></div>
                    <div className="profile-container">
                        <h1 className="profile-header">Who's Watching?</h1>
                        <p>Welcome, {this.props.currentUser.email}</p>
                        <ul className="profile-list">
                            {

                                this.props.profiles
                                    .map(profile => <li className="p-lis"><ProfilesIndexItem profile={profile} findProfile={this.props.findProfile} /></li>)
                            }
                        </ul>
                        <button onClick={this.props.logout}>Log Out</button>

                        {/* <button>Manage Profiles </button> */}
                        <div className="manage-container">
                            <button onClick={this.manage}>Manage Profiles</button>
                            {/* <Link className="manage-profile" to="/manageprofiles">Manage Profiles</Link> */}
                            {/* <Link className="manage-profile" to="/manageprofiles">Manage Profiles</Link> */}
                        </div>
                    </div>
                </div>
            )
        }else if(this.state.manage){
            return(
                <div>

                    <div>
                        <img src={logo} className="logo" />
                        {/* <a href="/">LOOSDSAD</a> */}
                    </div>
                    <div className="profiles-bg"></div>
                    <div className="profile-container">
                        <h1 className="profile-header">Who's Watching?</h1>
                        <ul className="profile-list">
                            {
                                this.props.profiles.map( profile => 
                                    <li className="profile-index-item-container" onClick={this.click(profile)}
                                        key={profile.id}>
                                        <img src={profileImg}/>
                                        <p>{profile.name}</p>
                                    </li>
                                )
                            }
                        </ul>
                        <button onClick={this.props.logout}>Log Out</button>
                        <div className="manage-container">
                            <button onClick={this.manage}>Done</button> 
                         </div>
                    </div>
                </div>
            )
        }  
    }
}

