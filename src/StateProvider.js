import React, { createContext, useContext, useReducer} from "react";

//Prepares Data Layer
export  const StateContext=createContext();

//Wraps the app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
<StateContext.Provider value={useReducer (reducer, initialState)}>
 {children}
</StateContext.Provider>

);

//pull information from data layer

export const useStateValue = () => useContext(StateContext);