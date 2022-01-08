import React from "react";

export default class GenreListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
        this.showModal = this.showModal.bind(this)
    }
    showModal(){
        this.setState({showModal: !this.state.showModal} )
    }
    render(){
        if(!this.state.showModal){
            return(
                <div onClick={this.showModal} className="square one">
                    {/* <div className="cover"></div> */}
                    <img className="cover" src="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" alt="" />
                    <div className="text">
                        Heh Css
                    </div>
                </div>
            )
        }else{
            return (
                <div className="modal">
                    <div className="modal-content">
                        <button onClick={this.showModal} className="Modal-button">close</button>
                        <h1>Movie Show Page</h1>
                        <img src="https://endflix-seeds.s3.amazonaws.com/tempthumbnail.jpg" alt="" />
                    </div>
                </div>
            )
        }
    }

}