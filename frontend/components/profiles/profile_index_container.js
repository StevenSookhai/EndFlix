import { connect } from "react-redux";
import ProfileIndex from "./profile_index";
import { fetchProfiles } from "../../actions/profile._actions";

const mapStateToProps = (state, ownProps) => {
    return({
        profiles: Object.values(state.entities.profiles),
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProfiles: profiles =>  dispatch(fetchProfiles(profiles)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex)