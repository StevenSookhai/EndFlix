import React from "react";
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return{
        errors: Object.values(state.errors.session),
        formType: 'signup',
        email: ownProps.location.email
    }
};

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),
    clearErrors: () => dispatch(clearErrors()),
    action: 'Sign Up'
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);