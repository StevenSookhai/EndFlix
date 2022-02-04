import React from "react";
import GenreListItem from "../browse/genre_list_item";
import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/video_actions";
import { createListItem, fetchlists } from '../../actions/mylist_actions'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BrowserHeader from "../browse/browser_header";
import { withRouter } from "react-router-dom";

class ListIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            moveItem : 50,
            itemCount: 0
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
        const leftArrowHide = document.getElementsByClassName("sliderArrow-right")[0]
        const rightArrowHide = document.getElementsByClassName("sliderArrow")[0]
        //  rightArrowHide.style.visibility = "hidden"

        // console.log(myListContainer.childElementCount)
        //  console.log(myListContainer.lastChild.previousElementSibling)
        const currentPosition = myListContainer.getBoundingClientRect().x - 50
        //  console.log(window.innerWidth)
         if (((window.innerWidth - myListContainer.lastChild.getBoundingClientRect().x) >= 100) && arrow === 'right' ){
             leftArrowHide.style.visibility = "hidden"
            //  console.log('not return fasle')
             return false
         }

         if (this.state.itemCount === 1){
         rightArrowHide.style.visibility = "hidden"

         }

         if (arrow === 'right'){
             const leftArrow = document.getElementsByClassName("sliderArrow")[0]
             rightArrowHide.style.visibility = "visible"

            //  console.log(leftArrow.disabled)
            // setTimeout(() => {
            // //   document.getElementsByClassName("sliderArrow")[0].click = null 
            // }, 1000);
            if(leftArrow.disabled !== false){
                leftArrow.disabled = false
                // console.log(leftArrow.disabled)

                //  this.setState({ moveItem: this.state.moveItem += 260 + currentPosition })
                //  console.log(this.state.moveItem)
            // console.log('moving left arrow')
            this.setState({itemCount: this.state.itemCount + 1 })
            // const leftArrow = document.getElementsByClassName("sliderArrow")[0]
            // console.log(leftArrow)
            const myListContainer = document.getElementById('myList')
            // console.log(myListContainer)
            myListContainer.style.transform = `translateX(${-260 + currentPosition}px)`
                setTimeout(() => {
                    leftArrow.disabled = true
                    //   document.getElementsByClassName("sliderArrow")[0].click = null
                }, 1000);
            }
             


            

        }
        
        else if(arrow === 'left' && this.state.itemCount !== 0){
            const rightArrow = document.getElementsByClassName("sliderArrow-right")[0]
             leftArrowHide.style.visibility = "visible"

            //  console.log(this.state.itemCount)
             if(rightArrow.disabled !== false){
                 rightArrow.disabled = false

                 this.setState({ itemCount: this.state.itemCount - 1 })
    
                //  let num = this.state.moveItem += 260 + currentPosition
                 this.setState({ moveItem: this.state.moveItem += -260 + currentPosition})
                // const myListContainer = document.getElementById('myList')
                // console.log(myListContainer)
                myListContainer.style.transform = `translateX(${260 + currentPosition}px)`
                // console.log(rightArrow)
                 rightArrow.disabled = false
    
                 setTimeout(() => {
                     rightArrow.disabled = true
                     //   document.getElementsByClassName("sliderArrow")[0].click = null
                 }, 1000);
             }
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
        const id = this.props.location.pathname === '/my-list' ? "myList-page" : "myList"
        const classNam = this.props.location.pathname === '/my-list' ? "search-list" : "genre-list"
        const classCon = this.props.location.pathname === '/my-list' ? "search-container" : "genres-container"
        const classWrap = this.props.location.pathname === '/my-list' ? "search-results" : "genre"
        const head = this.props.location.pathname !== '/my-list' ? <h2>MyList</h2> : null
        const header = this.props.location.pathname === '/my-list' ? < BrowserHeader /> : null
        const rightArrow = this.props.location.pathname !== '/my-list' ? < ArrowBackIosIcon style={{ fontSize: '75px', color: 'white' }} /> 
                           : null
        const leftArrow = this.props.location.pathname !== '/my-list' ? <ArrowForwardIosIcon onClick={this.handleArrow('right')} style={{ fontSize: '75px', color: 'white' }} />
                           : null
        
        // debugger
        const mylistVideos = this.getListVideos()
        // debugger
        // const mylistVideos = Object.values(this.props.lists).filter(list => this.props.videos[list.video_id])
        const myList = Object.values(mylistVideos).map(video => <GenreListItem video={video}  />)

        // console.log(myList)
        return(
          <div>
                   
                <div className="genres-container">
                    {header}
                        <div onClick={this.handleArrow('left')} className="sliderArrow">
                        {/* < ArrowBackIosIcon   style={{ fontSize: '75px', color: 'white' }} />  */}
                        {rightArrow}
                        </div>
                    <div className={classWrap}>
                    {head}
                        <div id={id} className={classNam}>
                        {myList}
                    </div>
                </div>
                    <div className="sliderArrow-right" >
                    {/* <ArrowForwardIosIcon onClick={this.handleArrow('right')} style={{ fontSize: '75px', color: 'white' }} /> */}
                        {leftArrow}
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

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ListIndex))