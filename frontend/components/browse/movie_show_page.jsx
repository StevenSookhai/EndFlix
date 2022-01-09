import React from "react";


export default class MovieShowPage extends React.Component{
    constructor(props){
        super(props)
        this.handleModal = this.handleModal.bind(this)

    }
    componentDidMount(){
        const body = document.getElementsByTagName('body')[0]
        body.setAttribute("style", "overflow: hidden")
    }

    componentWillUnmount(){
        const body = document.getElementsByTagName('body')[0]
        body.setAttribute("style", "overflow: scroll")
        body.setAttribute("style", "margin: 0")
    }
    handleModal(){
        this.props.showModal()
        this.props.hoveredExit()
    }
        render(){
            if(!this.props.video) return null
            return(
            <div className="modal">
                <div className="modal-content">
                        <div className="overlay-gradient"></div>
                        <div className="movie-exit-button">
                            
                        <button  onClick={this.handleModal} className="Modal-button">X</button>
                        </div>
                    
                    {/* <img src="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" alt="" /> */}
                   
                        <video autoPlay={true}
                            muted={true} src={this.props.video.video}>
                        </video>
                        <div className="movie-title-play">
                                <div className="movie-show-title">
                                    <h1>Movie Show Page</h1>
                                </div>
                                
                                <div className="movie-show-buttons">
                                    <button className="play-movie-button">Play</button>
                                    <button className="add-to-list-button">+</button>
                                </div>
                        </div>
                        <div className="movie-show-description">
                            <span>{this.props.video.description}sadssssssssss lore</span> 
                            {/* <p>snkjasnkass Lorem,</p> */}
                        </div>
                </div>
            </div>
            )
        }
}