import React from "react";
import GenreListItem from "./genre_list_item";
export default class Genre extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="genres-container">
                <div className="genre">
                    <h2>Genre 1</h2>
                    <div className="genre-list">
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem />
                    </div>
                </div>
                <div className="genre">
                    <h2>Genre 2</h2>
                    <div className="genre-list">
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem />
                    </div>
                </div>
                <div className="genre">
                    <h2>Genre 3</h2>
                    <div className="genre-list">
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem />
                    </div>
                </div>
                <div className="genre">
                    <h2>Genre 4</h2>
                    <div className="genre-list">
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem />
                    </div>
                </div>
                <div className="genre">
                    <h2>Genre 5</h2>
                    <div className="genre-list">
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem />
                    </div>
                </div>
                <div className="genre">
                    <h2>Genre 6</h2>
                    <div className="genre-list">
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem />
                    </div>
                </div>
                <div className="genre">
                    <h2>Genre 7</h2>
                    <div className="genre-list">
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem /> 
                            <GenreListItem />
                    </div>
                </div>
                {/* <div className="genre">
                    <h2>Genre 2</h2>
                    <ul>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>                
                        <li className="genre-item"> </li>                
                    </ul>
                </div>
                <div className="genre">
                    <h2>Genre 3</h2>
                    <ul>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                    
                    </ul>
                </div> */}
          </div>    
        )
    }
}