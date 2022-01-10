import React from "react";

export default class VideoWatchPage extends React.Component{
    constructor(props){
        super(props)

        this.handleBack = this.handleBack.bind(this)
    }
    componentDidMount(){
        this.props.fetchAllVideos()
    }
    handleBack(){
        // this.props.handleplay()
        this.props.history.push('/browse')
    }
    render(){
        if (this.props.video === undefined) {
            return(
                <div color="white">HI</div>
            )
            
        }
       
        // debugger
        return(
            <div className="watch-container">
                <video src={this.props.video.videoURL} autoPlay={true} progress="true" controls></video>
                <div className="back-btn">
                    <button onClick={this.handleBack}> Back </button>
                </div>
            </div>
            
        )
    }
}