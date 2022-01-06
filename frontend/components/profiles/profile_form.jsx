import React from "react";
import ProfileIndexContainer from "./profile_index_container";
import ProfilesIndexItem from "./profile_index_item";
class ProfileForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
            // manage: true
        }
        this.updateProfile = this.updateProfile.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        this.props.fetchProfiles();
    }

    updateProfile(e){
        e.preventDefault();
        this.setState({manage: true, name: e.target.value})
        // debugger
    }

    updateInfo(type){
        return e => this.setState({ [type]: e.target.value})
    }

    handleSumbit(e){
    e.preventDefault()
        this.props.processAction(this.state)
        this.props.cancelAddProfile()

    }
    handleDelete(){
        this.props.deleteProfile(this.props.profile)
        this.props.cancelAddProfile()
    }

    handleEdit(e) {
        e.preventDefault()
        let updatedProfile = Object.assign({}, this.props.profile)
        updatedProfile.name = this.state.name
        this.props.updateProfile(updatedProfile) 
        this.props.cancelAddProfile()
        // }, 0);
    }

    render(){
        const profileImg = "https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41"

        // const manage = true
        // debugger
        if(this.props.formType === 'Edit'){
            return(
                <div className="edit-container">
                    {/* <div className="manage-profile">{this.props.profile.name}</div> */}
                    <div className="edit-content">
                        <div className="edit-title">
                            <h1>Edit Profile</h1>
                        </div>

                        <form className="profile-form" onSubmit={this.handleEdit}>
                            {/* <div className="img-label"> */}
                            <div className="input-container">
                                <img width="144px" height="144px" src={profileImg} alt="" />
                                    <input className="form-input"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.updateInfo('name')}
                                    />
                            </div>
                        <div className="form-buttons">
                            <input className="save-button" type="submit" value="Save" />
                            <input className="cancel-button" type="submit" onClick={this.props.cancelAddProfile} value="Cancel"/>
                            <input className="delete-button" type="submit" onClick={this.handleDelete} value="Delete Profile"/>
                        </div>
                            {/* </div> */}
                        </form>

                    
                    </div>
                </div>
            )
        } else if (this.props.formType === 'new'){
            return (
                <div className="create-profile-container">
                    <div className="create-container">

                        <div className="edit-title">
                            <h1>Add Profile</h1>
                        </div>

                        <form className="profile-form" onSubmit={this.handleSumbit}>
                            <div className="input-container">
                            <img width="144px" height="144px" src={profileImg} alt="" />
                                <input  className="form-input"   
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.updateInfo('name')}
                                    />
                            </div>
                            <div className="form-buttons">
                            <input className="create-button" type="submit" value="Create Profile" />
                            <input className="cancel-button" type="submit" onClick={ this.props.cancelAddProfile} value="Cancel" />
                            </div>
                        </form>

                    </div>
                </div>
        )
        }

        // debugger
        
    }
}
export default ProfileForm 