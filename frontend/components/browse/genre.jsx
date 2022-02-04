import React from "react";
import GenreListItem from "./genre_list_item";
import MyListIndex from "../myList/my_list_index";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default class Genre extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            moveItem: 50,
            itemCount: 0
        }
        this.handleArrow = this.handleArrow.bind(this)
    }
    componentDidMount(){
        // this.props.fetchAllVideos()
    }

    handleArrow(arrow) {
        return (e) => {
            const myListContainer = document.getElementsByClassName("sliderArrow")[0].parentElement
            const currentPosition = myListContainer.getBoundingClientRect().x - 59.5
            if (((window.innerWidth - myListContainer.lastChild.getBoundingClientRect().x) >= 100) && arrow === 'right') {
                return false
            }

            if (arrow === 'right') {
                const leftArrow = document.getElementsByClassName("sliderArrow")[0]
                if (leftArrow.disabled !== false) {
                    leftArrow.disabled = false
                    this.setState({ itemCount: this.state.itemCount + 1 })
                    const myListContainer = document.getElementById('myList')
                    myListContainer.style.transform = `translateX(${-260 + currentPosition}px)`
                    setTimeout(() => {
                        leftArrow.disabled = true
                    }, 1000);
                }





            }

            else if (arrow === 'left' && this.state.itemCount !== 0) {
                const rightArrow = document.getElementsByClassName("sliderArrow-right")[0]
                if (rightArrow.disabled !== false) {
                    rightArrow.disabled = false
                    this.setState({ itemCount: this.state.itemCount - 1 })
                    this.setState({ moveItem: this.state.moveItem += -260 + currentPosition })
                    myListContainer.style.transform = `translateX(${260 + currentPosition}px)`
                    rightArrow.disabled = false
                    setTimeout(() => {
                        rightArrow.disabled = true
                    }, 1000);
                }
            }
        }

    }



    render(){
        // debugger
        if(this.props.videos === undefined) return null
        // const actions_movies = Object.values(this.props.videos).filter( video => 
        //     video.genre === 'Action'
        //     )
        // const actions = actions_movies.map(video => <GenreListItem movie={video} )
         const actions = Object.values(this.props.videos).filter(video => video.genre === 'Action')
        const actions_movies = Object.values(actions).map(video => <GenreListItem video={video} key={video.id} />)

        const anime = Object.values(this.props.videos).filter(video => video.genre === 'Anime')
        const anime_movies = Object.values(anime).map(video => <GenreListItem video={video} key={video.id}/>)

        const foreign = Object.values(this.props.videos).filter(video => video.genre === 'Foreign')
        const foreign_movies = Object.values(foreign).map(video => <GenreListItem video={video} key={video.id}/>)

        const horror = Object.values(this.props.videos).filter(video => video.genre === 'Horror')
        const horror_movies = Object.values(horror).map(video => <  GenreListItem video={video} key={video.id} />)
         
        // const video = (Object.values(this.props.videos)[1])
        // console.log(actions_movies)
        return(
            <div className="genres-container">
                <div className="genre">
                    {/* < ArrowBackIosIcon style={{ fontSize: '32px', color: 'white' }} />  */}
                    {/* <h2>My List </h2> */}
                    {/* <div className="genre-list"> */}
                    {/* < ArrowBackIosIcon style={{ fontSize: '32px', color: 'white' }} />  */}

                        < MyListIndex /> 
                        {/* <ArrowForwardIosIcon   /> */}
                    {/* </div> */}
                </div>
                <div className="genre">
                    <h2>Action</h2>
                    <div onClick={this.handleArrow('left')} className="sliderArrow">
                        {/* < ArrowBackIosIcon style={{ fontSize: '75px', color: 'white' }} /> */}
                    </div>
                    <div className="genre-list">
                        {/* < ArrowBackIosIcon style={{ fontSize: '32px', color: 'white' }} className="sliderArrow"/>  */}

                        {actions_movies}
                        {/* <ArrowForwardIosIcon style={{ fontSize: '32px', color: 'white' }}/> */}

                    </div>
                    <div className="sliderArrow-right" >
                        {/* <ArrowForwardIosIcon onClick={this.handleArrow('right')} style={{ fontSize: '75px', color: 'white' }} /> */}
                    </div>
                </div>
                <div className="genre">
                    <h2 className="genre-title">Anime</h2>
                    <div className="genre-list">
                        {anime_movies }
                    </div>
                </div>
                <div className="genre">
                    <h2>Foreign</h2>
                    <div className="genre-list">
                        {foreign_movies}
                    </div>
                </div>
                <footer>
                    <div className='splash-footer'>
                        
                    </div>
                </footer>
                {/* <div className="genre">
                    <h2>Horror</h2>
                    <div className="genre-list">
                        {horror_movies}
                        <GenreListItem />
                        <GenreListItem /> 
                    </div>
                </div> */}
                
                
          </div>    
        )
    }
}