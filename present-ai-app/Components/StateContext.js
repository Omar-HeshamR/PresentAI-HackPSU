import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

    const [ temp, setTemp ] = useState();

return(
    <Context.Provider
    value={{
        temp,
    }}
    >
      {children}
    </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context);
