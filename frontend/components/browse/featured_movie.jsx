import React from "react";
import { Redirect } from "react-router-dom";
import VideoWatchPageContainer from "../videos/video_watch_page_container";
import MovieShowPageContainer from "./movie_show_page_container";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import VideoWatchPage from "../videos/video_watch_page";
// VideoWatchPageContainer


export default class FeaturedMovie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playVideo: false,
            showPage: false,
            muted: true
        }
        this.handlePlay = this.handlePlay.bind(this)
        this.handleshow = this.handleshow.bind(this)
        this.handleMuted = this.handleMuted.bind(this)
    }

    componentDidMount(){
        
    }
    componentWillUnmount(){
        
    }
    handlePlay(){       
        console.log("hereeeee")

        this.setState({playVideo: true})
    }

    handleshow(){
        console.log("here")
        this.setState({ showPage: !this.state.showPage })

    }
    
    handleMuted(){
        // document.getElementById("feature-movie").muted = this.state.muted
        this.setState({muted: !this.state.muted})
    }

    render(){

        const muted = this.state.muted
        const mutedButton = this.state.muted ? < VolumeOffIcon style={{ fontSize: '32px' }} /> : < VolumeUpIcon style={{ fontSize: '32px' }}/> 
        
        // debugger
        const img = "http://www.simpleimageresizer.com/_uploads/photos/5b203fd6/sq_914x514.jpg"
        // debugger
        if(this.props.video === undefined) return null

        if (this.state.playVideo) {
            // debugger
            return <Redirect to={`/watch/${this.props.video.id}`} />
        }

        if (this.state.showPage) {
            return (
                < MovieShowPageContainer video={this.props.video} showModal={this.handleshow} hoveredExit={() => null}/>
            )
        }

        if(!this.state.playVideo){
            return(
                <div>
                <div className="featured-movie-container">
                    {/* <div> */}
                            <video className="feature-movie" autoPlay={true}
                            muted={muted} loop src={this.props.video.videoURL}></video>
                        {/* <img className="cover" src={img}  /> */}
    
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
                                <div>
                                    <button onClick={ this.handlePlay} className="play-btn">
                                            <  PlayArrowIcon style={{ fontSize: '32px' }}/>
                                        <span>Play</span>
                                    </button>
                                </div>
                                    <div onClick={this.handleshow} >
                                    <button   className="info-btn">
                                            <InfoOutlinedIcon style={{ fontSize: '32px' }}/>
                                        <span>More Info</span>
                                    </button>
                                </div>
                            </div>
    
                            <div className="featured-replay">
                                <button onClick={this.handleMuted}>
                                    {mutedButton }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
        // }else if(this.state.playVideo && !this.props.showPage){
        //     return(
        //         <VideoWatchPageContainer video={this.props.video} handlePlay={this.handlePlay}/> 
        //     )
        
        }
    }
}