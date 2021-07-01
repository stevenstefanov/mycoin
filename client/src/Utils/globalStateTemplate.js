import React, { useContext } from 'react';
const initialState = {}

const StateContext = React.createContext( initialState )
const ActionContext = React.createContext( {} );

const types = {}

const Provider = ({children}) => {
    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                default:
                    return { ...state };
            }
        },
        initialState
    );

    // action functions

    return(
        <StateContext.Provider value={state}>
            <ActionContext.Provider value = { { /* action functions */ } }>
                {children}
            </ActionContext.Provider>
        </StateContext.Provider>
    )
}

const useState = () => {
    return useContext( StateContext );
};

const useAction = () => {
    return useContext( ActionContext );
}

export {Provider, useState, useAction};