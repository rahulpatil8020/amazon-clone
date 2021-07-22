import React, { createContext, useContext, useReducer } from "react";


// Prepare Data Layer

export const StateContext = createContext();

// Wrap the app and provide data
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// use data
export const useStateValue = () => useContext(StateContext);