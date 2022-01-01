import React from "react";
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
    errors: Object.values(state.errors.session),
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),
    action: 'Sign Up'
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);