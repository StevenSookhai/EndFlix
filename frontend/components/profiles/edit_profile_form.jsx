import React from "react";

export default class EditProfileForm extends React.Component{
    constructor(props){
        super(props)
            this.state = this.props.profile
        
    }

    render(){
        return(
            <div>In edit Form </div>
        )
    }
}