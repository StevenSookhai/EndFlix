import { connect } from "react-redux";
import { updateProfile } from '../../actions/profile._actions'

const mapStateToProps =(state, ownPorps) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateProfile: profile => dispatch(updateProfile(profile))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(EditProfileForm)
