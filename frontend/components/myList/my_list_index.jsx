import React from "react";
import GenreListItem from "../browse/genre_list_item";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/video_actions";
import { createListItem, fetchlists } from '../../actions/mylist_actions'

class ListIndex extends React.Component{
    constructor(props){
        super(props)

        this.getListVideos = this.getListVideos.bind(this)
    }
    componentDidMount() {
        this.props.fetchAllVideos()
        this.props.fetchlists()
        
    }

    getListVideos(){
        const myVideos = []
        
        Object.values(this.props.lists).forEach( (list) => {
            myVideos.push(this.props.videos[list.video_id])
        }) 
        return myVideos
    }

    render(){
        if (this.props.videos === undefined) return null
        // const mylistVideos = []

        const mylistVideos = this.getListVideos()
        // const mylistVideos = Object.values(this.props.lists).filter(list => this.props.videos[list.video_id])
        const myList= Object.values(mylistVideos).map(video => <GenreListItem video={video} />)

        console.log(myList)
        return(
            <div className="genres-container">
                <div className="genre">
                    <h2>Action</h2>
                    <div className="genre-list">
                        {myList}
                    </div>
                </div>
            </div>
        )

    }
}




const mapStateToProps = (state) => {
    return {
        lists: Object.values(state.entities.myList),
        videos: Object.values(state.entities.videos)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllVideos: videos => dispatch(fetchAllVideos(videos)),
        fetchlists: lists => dispatch(fetchlists(lists))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex)