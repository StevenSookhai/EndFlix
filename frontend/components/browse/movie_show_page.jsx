import React from "react";
import VideoWatchPageContainer from "../videos/video_watch_page_container";
import { Redirect } from "react-router-dom";

export default class MovieShowPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playVideo: false
        }
        this.handleModal = this.handleModal.bind(this)
        this.handlePlay = this.handlePlay.bind(this)

    }
    componentDidMount(){
        const body = document.getElementsByTagName('body')[0]
        body.setAttribute("style", "overflow: hidden")
    }

    componentWillUnmount(){
        const body = document.getElementsByTagName('body')[0]
        body.setAttribute("style", "overflow: scroll")
        body.setAttribute("style", "margin: 0")
    }
    handlePlay(){
        this.setState({playVideo: true})
    }
    handleModal(){
        this.props.showModal()
        this.props.hoveredExit()
    }
        render(){
            const img = "http://www.simpleimageresizer.com/_uploads/photos/5b203fd6/sq_914x514.jpg"

            if(!this.props.video) return null

            if (this.state.playVideo && this.props.video) {
                debugger
                return <Redirect to={`/watch/${this.props.video.id}`} />
            }
            return(
            <div className="modal">
                <div className="modal-content">
                        <div className="overlay-gradient"></div>
                        <div className="movie-exit-button">
                            
                        <button  onClick={this.handleModal} className="Modal-button">X</button>
                        </div>
                    
                    {/* <img src="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" alt="" /> */}
                   
                        {/* <video autoPlay={true}
                            muted={false} src={this.props.video.videoURL}
                            alt="https://endflix-seeds.s3.amazonaws.com/MugenTrain.mp4">
                        </video> */}
                        <img className="cover" src={img}  />
                        <div className="movie-title-play">
                                <div className="movie-show-title">
                                    <h1>{this.props.video.title}</h1>
                                </div>
                                
                                <div className="movie-show-buttons">
                                    <div className="left-btns">
                                    <button  onClick={this.handlePlay} className="play-movie-button">Play</button>
                                    <button className="add-to-list-button">+</button>
                                    </div>

                                </div>
                                <div className="movie-show-description">
                                    <h3>{this.props.video.description}</h3> 
                                    {/* <p>snkjasnkass Lorem,</p> */}
                                </div>
                        </div>
                                    <div className="right-btnss">
                                    <button className="mutee-btn">M</button>
                                    </div>
                </div>
            </div>
            )
        }
}