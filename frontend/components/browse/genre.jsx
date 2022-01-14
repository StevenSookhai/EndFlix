import React from "react";
import GenreListItem from "./genre_list_item";
import MyListIndex from "../myList/my_list_index";
export default class Genre extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // this.props.fetchAllVideos()
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
                    {/* <h2>My List </h2> */}
                    {/* <div className="genre-list"> */}
                        < MyListIndex /> 
                    {/* </div> */}
                </div>
                <div className="genre">
                    <h2>Action</h2>
                    <div className="genre-list">
                        {actions_movies}
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
                        <p>Social links</p>

                        <ul>
                            <li>
                                <a href="">GitHub</a>
                            </li>

                            <li>
                                <a href="">My LinkedIn</a>
                            </li>
                        </ul>
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