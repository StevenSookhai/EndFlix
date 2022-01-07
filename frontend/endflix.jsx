import React  from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import { login, logout } from "./actions/session_actions";
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    let preloadedState;
    if (window.currentUser) {
         preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        // store = configureStore(preloadedState);
        // delete window.currentUser;
    } 
    // debugger
    if (window.current_profile){
        preloadedState.session.currentProfile = window.current_profile
    }
    store = configureStore(preloadedState)
    const root = document.getElementById('root')
    // const store = configureStore();
    ReactDOM.render(<Root store={store} />, root)

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login
    window.logout = logout

    // document.addEventListener()
})
