import React from "react";

export default class Browse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentProfile: this.props.currentProfile
        }
    }

    componentDidMount(){

    }
    render(){
        debugger
        return(
            <div>
                <div className="manage-profile">{this.props.currentProfile.name}</div>
                <button className="manage-profile" onClick={() => this.props.logout()}>Logout</button>
            </div>
            
        )
    }
}