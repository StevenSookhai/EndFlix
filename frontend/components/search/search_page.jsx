import React from "react";
import BrowserHeader from "../browse/browser_header";
import GenreListItem from "../browse/genre_list_item";
export default class SearchPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchInput: ''
        }
        this.filteredVideos = this.filteredVideos.bind(this)
    }

    componentDidMount(){
        // () => document.getElementsByClassName("search-input");

    }

    filteredVideos(input){
        const filteredVideos = Object.values(this.props.videos).filter(video => {
            // console.log(video.title)
            if (video.title.toLowerCase().includes(this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/') + 1).toLowerCase())){
                // return  <GenreListItem key={video.id} video={video} />
                return video
            }
        })
        const videoList = filteredVideos.map(video => < GenreListItem video = { video } key = { video.id } />)
        return videoList
    }

    render(){
        // const filteredVideos = Object.values(this.props.videos).filter(video => {
        //     // console.log(video.title)
        //     if (video.title.toLowerCase().includes(this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/') + 1).toLowerCase())){
        //         // return  <GenreListItem key={video.id} video={video} /> 
        //         return video
        //     }
        // })

        // const videoList = filteredVideos.map(video => < GenreListItem video = { video } key = { video.id } />)
        const videoList = this.filteredVideos()

        // console.log(this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/') + 1).toLowerCase())

        // console.log(filteredVideos)
        // console.log(this.state.searchInput)
        // console.log(videoList)
        
        return(
            <div className="search-container">
                < BrowserHeader searchInput={this.state.searchInput} /> 
                <div className="search-results">
                    {/* <h1>Search Results</h1> */}
                    <div className="search-list">
                        {videoList}
                    </div>
                </div>
                {/* <h2 color="white" >{this.state.searchInput}</h2> */}
            </div>
        )
    }
}