import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { createProfile } from '../../actions/profile._actions'
import { fetchProfiles } from "../../actions/profile._actions";


const mapStateToProps = (state, ownPorps) => {
    // debugger
     return{
        profile:  ownPorps.profile,
        profiles: Object.values(state.entities.profiles),
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processAction: profile => dispatch(createProfile(profile)),
        fetchProfiles: profiles => dispatch(fetchProfiles(profiles))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)