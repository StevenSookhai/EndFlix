import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, profileSelected, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            // loggedIn ? <Redirect to="/profiles" /> : profileSelected ? <Redirect to="/browse" /> : <Component {...props} />
            loggedIn ? (profileSelected ? <Redirect to="/browse" /> : <Redirect to="/profiles" /> ) :  <Component {...props} />
        }
    />
);

const Protected = ({ loggedIn, path, component: Component }) => {
    return (<Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to='/login' />
        )}
    />
    )
}

const profileAuth = ({ loggedIn, profileSelected, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? (profileSelected ? <Component {...props} /> : <Redirect to="/profiles" />) : <Redirect to="/profiles" />
        )}
    />
);

const mapStateToProps = (state) => {
    // debugger
    return{
    loggedIn: Boolean(state.session.id),
    profileSelected: Boolean(state.session.currentProfile)
    }
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))
export const ProtectedProfileRoute = withRouter(connect(mapStateToProps)(profileAuth));