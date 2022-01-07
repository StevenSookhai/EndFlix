import React from "react";
import BrowseHeader from "./browser_header";
// import FeaturedMovie from "./featured_movie";
import Genre from "./genre";
import FeaturedMovieContainer from "./featured_movie_container";


export default class Browse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentProfile: this.props.currentProfile
        }
    }

    componentDidMount(){
        this.props.fetchAllVideos()
    }
    render(){
         if (this.props.currentProfile === undefined) return null
        // debugger
        return(
            <div>
                < BrowseHeader />
                {/* <div className="manage-profile">{this.props.currentProfile.name}</div>
                <p className="manage-profile" >Videos goes here</p>
                <button className="manage-profile" onClick={() => this.props.logout()}>Logout</button> */}
                <FeaturedMovieContainer /> 
                <Genre />
                <button className="manage-profile" onClick={() => this.props.logout()}>Logout</button>
            </div>   
        )
    }
}