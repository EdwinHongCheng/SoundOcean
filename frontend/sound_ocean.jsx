import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

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

    // [TESTING] remove later
    window.store = store;
    

    const root = document.getElementById("root");

    ReactDOM.render(<Root store={store} />, root);
});