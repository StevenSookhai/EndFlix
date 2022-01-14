import React from "react";
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { clearErrors } from "../../actions/session_actions";


const mapStateToProps = state => ({
    errors: Object.values(state.errors.session),
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()),
    action: 'Log In'
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);