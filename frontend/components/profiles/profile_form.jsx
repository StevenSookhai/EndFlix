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
    }

    handleEdit(e) {
        e.preventDefault()
        let updatedProfile = Object.assign({}, this.props.profile)
        updatedProfile.name = this.state.name
        this.props.updateProfile(updatedProfile)
    }

    render(){
        const profileImg = "https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41"

        // const manage = true
        // debugger
        if(this.props.formType === 'Edit'){
            return(
                <div>
                    <div className="manage-profile">{this.props.profile.name}</div>
                    <form onSubmit={this.handleEdit}>
                        <label className="manage-profile">Name:
                            <input
                                
                                type="text"
                                value={this.state.name}
                                onChange={this.updateInfo('name')}
                            />
                        </label>
                        <input type="submit" onClick={this.props.cancelAddProfile} value="Cancel"/>
                        <input type="submit" onClick={() => this.props.deleteProfile(this.props.profile)} value="Delete"/>
                        <input  type="submit" value="Edit Profile" />
                    </form>
                </div>
            )
        } else if (this.props.formType === 'new'){
            return (
                <div>
                    <div className="manage-profile">{this.props.profile.name}</div>
                    <form onSubmit={this.handleSumbit}>
                        <label className="manage-profile">Name:
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.updateInfo('name')}
                            />
                        </label>
                        <input type="submit" onClick={() => this.props.cancelAddProfile} value="Cancel" />
                        {/* <input type="submit" onClick={() => this.props.deleteProfile(this.props.profile)} value="Delete" /> */}
                        <input type="submit" value="Create Profile" />
                    </form>
                </div>
        )
        }

        // debugger
        
    }
}
export default ProfileForm 