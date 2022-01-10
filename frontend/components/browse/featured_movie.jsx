import React from "react";
import { Redirect } from "react-router-dom";
import VideoWatchPageContainer from "../videos/video_watch_page_container";
// import VideoWatchPage from "../videos/video_watch_page";
// VideoWatchPageContainer


export default class FeaturedMovie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playVideo: false
        }
        this.handlePlay = this.handlePlay.bind(this)
    }

    componentDidMount(){
        
    }
    componentWillUnmount(){
        
    }
    handlePlay(){        

        this.setState({playVideo: !this.state.playVideo})
    }

    render(){
        
        
        const img = "http://www.simpleimageresizer.com/_uploads/photos/5b203fd6/sq_914x514.jpg"
        // debugger
        if(this.props.video === undefined) return null

        if (this.state.playVideo && this.props.video) {
            debugger
            return <Redirect to={`/watch/${this.props.video.id}`} />
        }
        if(!this.state.playVideo){
            return(
                <div>
                <div className="featured-movie-container">
                    {/* <div> */}
                            {/* <video autoPlay={true}
                            muted={true} src={this.props.video.videoURL}></video> */}
                        <img className="cover" src={img}  />
    
                    {/* </div> */}
                    <div className="featured-movie-content">
                        <div className="featured-tile-des">
                                <div className="feature-title">
                               {this.props.video.title}
                            </div>
                                <div className="feature-description">
                                        {this.props.video.description}
                               </div>
                        </div>
    
                        <div className="featured-button">
                            <div className="features-play-info">
                                <button onClick={this.handlePlay} className="play-btn">Play </button>
                                <button className="info-btn">More Info</button>
                            </div>
    
                            <div className="featured-replay">
                                <button>M</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
        }else{
            return(
                <VideoWatchPageContainer video={this.props.video} handlePlay={this.handlePlay}/> 
            )
        }
    }
}