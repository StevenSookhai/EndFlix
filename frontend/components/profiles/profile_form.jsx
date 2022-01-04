import React from "react";

class ProfileForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
        this.handleSumbit = this.handleSumbit.bind(this)
    }
    updateInfo(type){
        return e => this.setState({ [type]: e.target.value})
    }

    handleSumbit(e){
        debugger
    e.preventDefault()
        this.props.processAction(this.state)
    }

    render(){
        return(
            <div>
                <div>Where hello there</div>
                <form onSubmit={this.handleSumbit}>
                <label >Name: 
                        <input
                            // className="session-password"
                            type="text"
                            value={this.state.password}
                            onChange={this.updateInfo('name')}
                        />
                </label>
                    <input type="submit" value="Create s Profile" />
                </form>
                </div>
        )
    }
}
export default ProfileForm 