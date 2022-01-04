import { connect } from "react-redux";
import ProfileForm from "./profile_form";
import { createProfile } from '../../actions/profile._actions'

const mapStateToProps = (state, ownPorps) => {
    // debugger
     return{
        profile:  ownPorps.profile
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processAction: profile => dispatch(createProfile(profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)