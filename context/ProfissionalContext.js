import React, { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const ProfissionalStateProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState({});
    
    const [userLoginState, setUserLoginState] = useState({
        logado: false,
        nome: '',
        tipo: '',
        access_token: ''
    });
    

    return (

        <StateContext.Provider value={{ sharedState, setSharedState, userLoginState, setUserLoginState }}>
            {children}
        </StateContext.Provider>
    );
}


export const useStateContext = () => useContext(StateContext);