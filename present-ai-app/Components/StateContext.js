import React, { createContext, useContext, useState, useEffect } from 'react';

const axios = require("axios");
  
const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: "294170ec5852444b9c232140e209d649",
        "content-type": "application/json",
    },
});

const Context = createContext();

export const StateContext = ({ children }) => {

    const [ recording, setRecording ] = useState(false);

    function StartRecording() {
        setRecording(true);
    }

    function StopRecording() {
        setRecording(false);
    }

return(
    <Context.Provider
    value={{
        recording,
        setRecording,
        StartRecording,
        StopRecording,
        assembly,
    }}
    >
      {children}
    </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context);
