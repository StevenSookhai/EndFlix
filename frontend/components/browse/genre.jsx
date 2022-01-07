import React from "react";

export default class Genre extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="genres-container">
                <div className="genre">
                    <h2>Genre 1</h2>
                    <ul className="genre-list">
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        <li className="genre-item"> </li>
                        
                    </ul>
                </div>
                <div className="genre">
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
                </div>
          </div>    
        )
    }
}