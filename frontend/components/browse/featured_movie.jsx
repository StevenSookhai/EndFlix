import React from "react";

export default class FeaturedMovie extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // debugger
        if(this.props.video === undefined) return null
        return(
            <div>
            <div className="featured-movie-container">
                {/* <div> */}
                        <video autoPlay={true}
                        muted={true} src="https://endflix-seeds.s3.amazonaws.com/shangchi2.mp4"></video>
                {/* </div> */}
                <div className="featured-movie-content">
                    <div className="featured-tile-des">
                            <div className="feature-title">
                           Title goes here
                        </div>
                            <div className="feature-description">
                                    Description of movie goes here!
                           </div>
                    </div>

                    <div className="featured-button">
                        <div className="features-play-info">
                            <button className="play-btn">Play</button>
                            <button className="info-btn">More Info</button>
                        </div>

                        <div className="featured-replay">
                            <button>Replay</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}