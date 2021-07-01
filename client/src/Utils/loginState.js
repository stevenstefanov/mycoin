import React, { useContext } from 'react';
const initialState = {
    name: '',
    loggedIn: false
}
const StateContext = React.createContext(initialState)
const ActionContext = React.createContext();
const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

const LoginProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(
        (state, action) => { // action : { type, payload }
            switch (action.type) {
                case types.LOGIN:
                    return {
                        ...state,
                        name: action.payload.name,
                        loggedIn: action.payload.loggedIn
                    };
                case types.LOGOUT:
                    return {
                        ...state,
                        name: '',
                        loggedIn: false
                    } 
                default:
                    return { ...state };
            }
        },
        initialState
    );

    const loginUser = name => {
        dispatch({ type: types.LOGIN, payload: {name, LoggedIn: true}});
    }

    const logoutUser = () => {
        dispatch({ type: types.LOGOUT });
    }

    return(
        <StateContext.Provider value={state}>
            <ActionContext.Provider value = { { loginUser, logoutUser } }>
                {children}
            </ActionContext.Provider>
        </StateContext.Provider>
    )
}

const useLoginState = () => {
    return useContext( StateContext );
};

const useLoginAction = () => {
    return useContext( ActionContext );
}

export {LoginProvider, useLoginState, useLoginAction};

// const {Provider} = isLoggedIn;

// function reducer(state, action) {
//     switch(action.type) {
//         case "":
//     }
// }

// const LoginProvider = ({ value = [], ...props}) => {
//     const [state, distach] = useReducer(reducer, []);
    
//     return <Provider value={[state, dispatch]} {...props} />
// }
// const useIsLoggedIn = () => {
//     return useContext(isLoggedIn)
// }


// export default isLoggedIn;