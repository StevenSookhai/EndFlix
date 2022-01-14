import React from "react";
import MovieShowPage from "./movie_show_page";
import MovieShowPageContainer from "./movie_show_page_container";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/video_actions";
import { createListItem, fetchlists, deleteMylist } from '../../actions/mylist_actions'



 class GenreListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            hovered: false,
            playVideo: false,
            inlist: false
        }
        this.showModal = this.showModal.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleHoverExit = this.handleHoverExit.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
        this.onList = this.onList.bind(this)
        this.handleAddToList = this.handleAddToList.bind(this)
    }
    componentDidMount(){
        // this.props.fetchAllVideos()
        // this.props.fetchlists()
    }
    handlePlay(){
        console.log("clicked")
        this.setState({ playVideo: true })

    }
     handleAddToList() {
         // return console.log("clicked")
         const inList = Object.values(this.props.lists).filter(listItem => listItem.video_id === this.props.video.id);
         if (inList.length === 0) {
             this.setState({ inlist: true })
            //  debugger
             return this.props.createListItem(this.props.video.id, this.props.currentProfile.id)
         } else {
             const mylist = Object.values(this.props.lists).find(listItem => listItem['video_id'] === this.props.video.id);
             this.setState({ inlist: false })
            //  debugger
             return this.props.deleteMylist(mylist.id)
         }
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

    onList() {
        const inList = Object.values(this.props.lists).filter(listItem => listItem.video_id === this.props.video.id);
        return inList.length > 0
    }
    render(){
        if(this.props.video === undefined) return null

        if (this.state.playVideo ) {
            // debugger
            return <Redirect to={`/watch/${this.props.video.id}`} />
        }

        const text = this.onList() ? '✓' : '+'
        // debugger
        const img = this.props.video.thumbnailURL ? this.props.video.thumbnailURL : "https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg"
        // const img = "https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg"
        const playButton = "https://img.icons8.com/ios-filled/50/000000/play--v1.png"
        if (!this.state.showModal && !this.state.hovered){
            return(
                <div onClick={this.showModal}
                     className="square"
                     onMouseEnter={this.handleHover}
                     onMouseLeave={this.handleHoverExit}>
                    {/* <div className="cover"></div> */}
                    <img onClick={this.handlePlay} className="cover" src={img}  />
                    <div className="text">
                        <button>P</button>
                        <button>+</button>

                        <div>
                            <button>-</button>
                        </div>
                    </div>
                    
                </div>
            )
        } else if (this.state.showModal && this.state.hovered && !this.state.playVideo){
            return (
                < MovieShowPageContainer video={this.props.video} hoveredExit={this.handleHoverExit} hovered={this.handleHover} showModal={this.showModal} />
            )
        } else if (!this.state.showModal && this.state.hovered){
            return(
            <div 
                // onClick={this.showModal}
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
                        <img  onClick={this.handlePlay} className="play-card-btn" src={playButton} alt="" />
                                {/* <img className="play-card-btn" src="https://img.icons8.com/ios/50/000000/plus-math.png" alt="" /> */}
                                <button onClick={this.handleAddToList} className="movie-show-page-btn">{text}</button>
                        {/* <img className="add-to-list-btn">+</button>     */}
                        </div>
                        <div>
                                <button onClick={this.showModal} className="add-to-list-btn">-</button>
                        </div>
                    </div>
                    <div className="movie-card-genre-list">
                        <ul className="genre-movie-card-list"> 
                            <li key={this.props.video.id}>
                                    {this.props.video.genre}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            )
        } 
        // else if (!this.state.showModal && this.state.hovered && this.state.playVideo) {

        // }
    }

}

const MapStateToProps = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos),
        lists: state.entities.myList,
        currentProfile: state.session.currentProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllVideos: videos => dispatch(fetchAllVideos(videos)),
        createListItem: (movieId, profileId) => dispatch(createListItem(movieId, profileId)),
        fetchlists: lists => dispatch(fetchlists(lists)),
        deleteMylist: listId => dispatch(deleteMylist(listId))
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(GenreListItem)
