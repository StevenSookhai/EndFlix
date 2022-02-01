import React from "react";
import Header from '../splash/header'
import { Link } from "react-router-dom";
import ProfilesIndexItem from "./profile_index_item";
import BrowseContainer from "../browse/browse_container";
import { Redirect } from "react-router-dom";
import ProfileFormContainer from "./profile_form_container";
import EditIcon from '@mui/icons-material/Edit';


export default class ProfileIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manage: false,
            profile: {name: ''},
            formType: '',
            show: true
        }
    this.click = this.click.bind(this)
    this.manage = this.manage.bind(this)
    this.cancelAddProfile = this.cancelAddProfile.bind(this)
    this.create = this.create.bind(this)
    }
    handleProfile(){
        this.props.history.push('/browse')
    }

    componentDidMount(){
        this.props.fetchProfiles()
        
    }
    componentDidUpdate(){
        // if (this.props.currentProfile) {
        //     this.props.history.push('/browse')
        // }
    }
    click(profile){
        if(this.state.manage){
            return () => {
                this.setState({ formType: 'Edit', profile: profile})
            }
        }
    }
    manage(){
        this.setState({ manage: !this.state.manage, show: !this.state.show });
    }

    create(){
        if (!this.state.manage) {
                this.setState({ formType: 'new'}) 
        }
    }

    cancelAddProfile(){
        this.setState({ profile: { name: '' }, formType: '', show: true, manage: false })
        //tiny bug when deleting profile, this is a temp fix 
        window.location.reload(true) 
    }

    render(){
        // debugger
        const profileImg = "https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41"
        const profiles = this.props.profiles.map( profile => {
            <li onclick={this.click(profile)}
            key={profile.id}>
             <img src={profileImg} alt="" />
             <p>{profile.name}</p>
            </li>
        })
        const addProfilesButton = this.props.profiles.length === 5 ? null : 

        <div className="add-img" onClick={this.create}>
            <img width="150px" height="150px" src="https://img.icons8.com/emoji/48/000000/plus-emoji.png" />
        </div>

        // console.log(this.props.profiles.length)

        const logo = "https://fontmeme.com/permalink/220102/80b2e83ec91311621e8aea703b915905.png"

        if(this.state.formType === '' && !this.state.manage){
            return (
                <div>

                    <div>
                        <img src={logo} className="logo" />
                    </div>

                    <div className="profile-container">

                        <h1 className="profile-header">Who's Watching?</h1>
                        <div className="profile-list">
                            <div className="ul-list-profile">
                                <ul >
                                    {
                                        this.props.profiles
                                            .map(profile => <li key={profile.id} className="p-lis"><ProfilesIndexItem profile={profile} findProfile={this.props.findProfile} /></li>)
                                    }
                                </ul>
                            </div>
                            
                            {/* <div className="add-img" onClick={this.create}>
                                <img  width="150px" height="150px" src="https://img.icons8.com/emoji/48/000000/plus-emoji.png" />
                            </div> */}
                            {addProfilesButton}

                        </div>

                    </div>
                            <div className="manage-container">
                            <button className="manage-profile " onClick={this.manage}>Manage Profiles</button>
                            </div>
                </div>
            )
        }else if(this.state.manage && this.state.formType !== 'Edit'){
            return(
                <div>
                    <div>
                        <img src={logo} className="logo" />
                    </div>
                    <div className="profile-container">

                    <h1 className="profile-header">Manage Profiles</h1>
                        <div className="profile-list">
                            <div className="ul-list-profile-manage">
                            <ul >
                                {
                                    this.props.profiles.map( profile => 
                                        <li  className="profile-index-item-container"
                                        onClick={this.click(profile)}
                                            key={profile.id}
                                           >
                                            <div className="edit-profile-img">
                                                <div className="edit-gradient">
                                    
                                                </div>
                                                <div className="edit-icon">
                                                <EditIcon  style={{ fontSize: '45px', color: 'white'}} />
                                                </div>
                                                <img width="150px" height="150px" src={profileImg}/>
                                            </div>
                                            <p>{profile.name}</p>
                                        </li>
                                    )
                                }
                                </ul>
                            </div>
                    </div>
                        {/* <button onClick={this.props.logout}>Log Out</button> */}
                    </div>
                        <div className="manage-container">
                        <button className="done-button " onClick={this.manage}>Done</button> 
                         </div>
                </div>
            )
        } else if (this.state.formType === 'Edit') {
            return(
                <ProfileFormContainer 
                profile = {this.state.profile}
                cancelAddProfile = {this.cancelAddProfile}
                formType={this.state.formType}
                />
            )
        } else if (this.state.formType === 'new') {
            return (
                <ProfileFormContainer
                    profile={this.state.profile}
                    cancelAddProfile={this.cancelAddProfile}
                    formType={this.state.formType}
                />
            )
        }
    }
}

