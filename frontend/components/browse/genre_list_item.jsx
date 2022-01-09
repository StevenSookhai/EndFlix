import React from "react";
import MovieShowPage from "./movie_show_page";
import MovieShowPageContainer from "./movie_show_page_container";

export default class GenreListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            hovered: false
        }
        this.showModal = this.showModal.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleHoverExit = this.handleHoverExit.bind(this)
    }
    componentDidMount(){
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
        if (!this.state.showModal && !this.state.hovered){
            return(
                <div onClick={this.showModal}
                     className="square one"
                     onMouseEnter={this.handleHover}
                     onMouseLeave={this.handleHoverExit}>
                    {/* <div className="cover"></div> */}
                    <img className="cover" src="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" alt="" />
                    <div className="text">
                        Heh Css
                    </div>
                </div>
            )
        }else if(this.state.showModal && this.state.hovered){
            return (
                < MovieShowPageContainer hoveredExit={this.handleHoverExit} hovered={this.handleHover} showModal={this.showModal} />
            )
        } else if (!this.state.showModal && this.state.hovered){
            return(
            <div onClick={this.showModal}
                className="square one"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHoverExit}>
                {/* <div className="cover"></div> */}
                {/* <img className="cover" src="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" alt="" /> */}
                <video className="cover" autoPlay={true}
                    muted={true} src="https://endflix-seeds.s3.amazonaws.com/TestVid.mp4"></video>
                <div className="text">
                    Heh Css
                </div>
            </div>
            )
        }
    }

}