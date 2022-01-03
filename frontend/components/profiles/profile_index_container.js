import { connect } from "react-redux";
import ProfileIndex from "./profile_index";
import { fetchProfiles } from "../../actions/profile._actions";

const mapStateToProps = (state) => {
    return({
        profiles: state.entities.profiles
    })
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProfiles: profiles =>  dispatch(fetchProfiles(profiles))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex)