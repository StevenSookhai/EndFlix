import { connect } from "react-redux";
import ProfileIndex from "./profile_index";
import { fetchProfiles, updateProfile, deleteProfile,createProfile } from "../../actions/profile._actions";
import { findProfile } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        profiles: Object.values(state.entities.profiles),
        currentUser: state.entities.users[state.session.id],
        currentProfile: state.session.currentProfile
    })
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProfiles: profiles => dispatch(fetchProfiles(profiles)),
        createProfile: profile => dispatch(createProfile(profile)),
        updateProfile: profile => dispatch(updateProfile(profile)),
        deleteProfile: profile => dispatch(deleteProfile(profile)),
        findProfile: profile => dispatch(findProfile(profile)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex)