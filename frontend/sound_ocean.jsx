import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

// Testing (remove later)
import { signup, login, logout } from "./actions/session_actions"


document.addEventListener("DOMContentLoaded", () => {

    let store;

    // Preloaded State (BenchBnB Part 1 + aAO W11D4 - Front End Auth)
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");

    // Testing (remove later)
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login
    window.signup = signup
    window.logout = logout

    ReactDOM.render(<Root store={store} />, root);
});