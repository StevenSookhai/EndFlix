import React from "react";


export default class MovieShowPage extends React.Component{
    constructor(props){
        super(props)
        this.handleModal = this.handleModal.bind(this)

    }
    handleModal(){
        this.props.showModal()
        this.props.hoveredExit()
    }
        render(){
            return(
            <div className="modal">
                <div className="modal-content">
                    <button onClick={this.handleModal} className="Modal-button">close</button>
                    <h1>Movie Show Page</h1>
                    {/* <img src="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" alt="" /> */}
                        <video autoPlay={true}
                            muted={true} src={this.props.video.video}></video>
                </div>
            </div>
            )
        }
}