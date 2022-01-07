import React from "react";
import BrowseHeader from "./browser_header";
import FeaturedMovie from "./featured_movie";
import Genre from "./genre";

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
        // debugger
         if (this.props.currentProfile === undefined) return null
        return(
            <div>
                < BrowseHeader />
                {/* <div className="manage-profile">{this.props.currentProfile.name}</div>
                <p className="manage-profile" >Videos goes here</p>
                <button className="manage-profile" onClick={() => this.props.logout()}>Logout</button> */}
                <FeaturedMovie /> 
                <Genre />
            </div>   
        )
    }
}