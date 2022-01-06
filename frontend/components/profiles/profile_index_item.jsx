import React from "react";
import {receiveCurrentProfile} from "../../actions/session_actions"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ProfilesIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }
    click(){
        this.props.findProfile(this.props.profile)
        this.props.history.push('/browse')
    }
    render() {
        // debugger
        return (
            <div className="profile-index-item-container" onClick={this.click}>
                <img width="144px" height="144px" src="https://occ-0-444-448.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41" alt="profile icon" />
                <p>{this.props.profile.name}</p>
            </div>
        )
    }
}

export default withRouter(connect()(ProfilesIndexItem)) ;


