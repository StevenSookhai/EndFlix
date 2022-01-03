import React from "react";

export default class ProfileIndex extends React.Component{
    componentDidMount(){
        this.props.fetchProfiles()
    }
    render(){
        return(
            <div>
                <ul>
                    {
                    this.props.profiles.map(profile => <li>{profile.name}, {profile.user_id}</li>)
                    }
                </ul>
            </div>
        )
        
    }
}

