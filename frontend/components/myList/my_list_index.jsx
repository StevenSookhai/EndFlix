import React from "react";
import GenreListItem from "../browse/genre_list_item";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/video_actions";
import { createListItem, fetchlists } from '../../actions/mylist_actions'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class ListIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            moveItem : 0 
        }

        this.getListVideos = this.getListVideos.bind(this)
        this.handleArrow = this.handleArrow.bind(this)

    }
    componentDidMount() {
        // this.props.fetchAllVideos()
        // this.props.fetchlists()
        
    }

    handleArrow(arrow) {
     return (e) => {
        //  console.log(e.target.parentElement)
        const myListContainer = document.getElementById('myList')
        const currentPosition = myListContainer.getBoundingClientRect().x - 59.5
        console.log(currentPosition)

        if (arrow === 'right' && this.state.moveItem < 5){
            let num = this.state.moveItem += 1 
            this.setState({ moveItem: num })

            console.log('moving left arrow')
            const leftArrow = document.getElementsByClassName("sliderArrow")[0]
            console.log(leftArrow)
            const myListContainer = document.getElementById('myList')
            // console.log(myListContainer)
            myListContainer.style.transform = `translateX(${-250 + currentPosition}px)`
        }
        
        else if(arrow === 'left' && this.state.moveItem > 0){
            let num = this.state.moveItem -= 1 
            this.setState({moveItem: num})
            const rightArrow = document.getElementsByClassName("sliderArrow-right")[0]
            const myListContainer = document.getElementById('myList')
            // console.log(myListContainer)
            myListContainer.style.transform = `translateX(${250 + currentPosition}px)`
            // console.log(rightArrow)
        }
    }

    }
    

    getListVideos(){
        const myVideos = []
        
        Object.values(this.props.lists).forEach( (list) => {
            myVideos.push(this.props.videos[list.video_id - 1])
            // console.log(list)
        }) 
        return myVideos
    }

    render(){
        if (this.props.videos === undefined) return null
        // const mylistVideos = []

        const mylistVideos = this.getListVideos()
        // debugger
        // const mylistVideos = Object.values(this.props.lists).filter(list => this.props.videos[list.video_id])
        const myList = Object.values(mylistVideos).map(video => <GenreListItem video={video}  />)

        // console.log(myList)
        return(
            <div className="genres-container">
                        <div onClick={this.handleArrow('left')} className="sliderArrow">
                        < ArrowBackIosIcon   style={{ fontSize: '75px', color: 'white' }} /> 
                        </div>
                <div className="genre">
                    <h2>MyList</h2>
                    <div id="myList" className="genre-list">


                        {myList}
                        

                    </div>
                </div>
                    <div className="sliderArrow-right" >
                    <ArrowForwardIosIcon onClick={this.handleArrow('right')} style={{ fontSize: '75px', color: 'white' }} />
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