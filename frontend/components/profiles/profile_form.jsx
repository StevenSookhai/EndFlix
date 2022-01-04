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

    render(){
        const manage = true
        // debugger
        if(manage){
            return(
                <div>
                    <div>Why hello there</div>
                    <form onSubmit={this.handleSumbit}>
                        <label className="manage-profile" >Name:
                            <input
                                
                                type="text"
                                value={this.state.name}
                                onChange={this.updateInfo('name')}
                            />
                        </label>
                        <input  type="submit" value="Create Profile" />
                    </form>
                </div>
            )
        } else{
            return (
            <div>
                <ul>
                    {
                            // this.props.profiles.map(profile => <li><ProfilesIndexItem profile={profile} /></li> )
                    }
                </ul>
            </div>
        )
        }

        // debugger
        
    }
}
export default ProfileForm 