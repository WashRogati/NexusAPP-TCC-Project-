import React, { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const ProfissionalStateProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState({});

    return (

        <StateContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </StateContext.Provider>
    );
}


export const useStateContext = () => useContext(StateContext);