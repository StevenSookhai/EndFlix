import React from "react";
import MovieShowPage from "./movie_show_page";
import MovieShowPageContainer from "./movie_show_page_container";

export default class GenreListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            hovered: false,
            playVideo: false
        }
        this.showModal = this.showModal.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleHoverExit = this.handleHoverExit.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
    }
    componentDidMount(){
        // this.props.fetchAllVideos()
    }
    handlePlay(){
        this.setState({ playVideo: true })

    }
    handleHover(){
        
        // setTimeout(() => {
            
            // }, 500);
            // console.log(this.state.hovered)
                this.setState({hovered: true})
    }
    handleHoverExit(){
        this.setState({ hovered: false })

    }
    showModal(){
        this.setState({showModal: !this.state.showModal} )
    }
    render(){
        if(this.props.video === undefined) return null

        if (this.state.playVideo && this.props.hovered) {
            debugger
            return <Redirect to={`/watch/${this.props.video.id}`} />
        }
        // debugger
        // const img = this.props.video.thumbnailURL ? this.props.video.thumbnailURL : "https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg"
        const img = "http://www.simpleimageresizer.com/_uploads/photos/5b203fd6/sq_914x514.jpg"
        const playButton = "https://img.icons8.com/ios-filled/50/000000/play--v1.png"
        if (!this.state.showModal && !this.state.hovered){
            return(
                <div onClick={this.showModal}
                     className="square"
                     onMouseEnter={this.handleHover}
                     onMouseLeave={this.handleHoverExit}>
                    {/* <div className="cover"></div> */}
                    <img className="cover" src={img}  />
                    <div className="text">
                        <button>P</button>
                        <button>+</button>

                        <div>
                            <button>-</button>
                        </div>
                    </div>
                    
                </div>
            )
        }else if(this.state.showModal && this.state.hovered){
            return (
                < MovieShowPageContainer video={this.props.video} hoveredExit={this.handleHoverExit} hovered={this.handleHover} showModal={this.showModal} />
            )
        } else if (!this.state.showModal && this.state.hovered){
            return(
            <div onClick={this.showModal}
                className="square"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHoverExit}>
                {/* <div className="cover"></div> */}

                {/* <img className="cover" src="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" alt="" /> */}
                {/* comment this back in */}
                {/* <video className="cover" autoPlay={true}
                        muted={true} src={this.props.video.videoURL} alt="https://endflix-seeds.s3.amazonaws.com/MugenTrain.mp4"></video> */}
                    <img className="cover" src={img} alt="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" />

                <div className="text">
                    <div className="movie-card-buttons">
                        <div className="right-btns">
                        {/* <button className="play-card-btn">P</button> */}
                        <img  onClick={this.handlePlay} className="play-card-btn" src={playButton} alt="" />
                                <img className="play-card-btn" src="https://img.icons8.com/ios/50/000000/plus-math.png" alt="" />
                        {/* <img className="add-to-list-btn">+</button>     */}
                        </div>
                        <div>
                            <button className="movie-show-page-btn">-</button>
                        </div>
                    </div>
                    <div className="movie-card-genre-list">
                        <ul className="genre-movie-card-list"> 
                            <li>
                                    {this.props.video.genre}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            )
        }
    }

}