import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { createProfile } from '../../actions/profile._actions'
import { fetchProfiles } from "../../actions/profile._actions";
import { deleteProfile } from "../../actions/profile._actions";
import { updateProfile } from "../../actions/profile._actions";


const mapStateToProps = (state, ownPorps) => {
    // debugger
     return{
        profile:  ownPorps.profile,
        formType: ownPorps.formType,
        profiles: Object.values(state.entities.profiles),
        cancelAddProfile: ownPorps.cancelAddProfile
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processAction: profile => dispatch(createProfile(profile)),
        fetchProfiles: profiles => dispatch(fetchProfiles(profiles)),
        deleteProfile: profile => dispatch(deleteProfile(profile)),
        updateProfile: profile => dispatch(updateProfile(profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)