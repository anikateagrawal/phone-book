import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';


const initialContacts={
    contacts:[{
        id: 1,
        name: "Anikate Agrawal",
        imgURL:
          "https://avatars.githubusercontent.com/u/73731879?v=4",
        phone: "+91 9358817798",
        email: "anikateag7316@gmail.com"
      },
      {
        id: 2,
        name: "Ishika Chaturvedi",
        imgURL:
          "https://avatars.githubusercontent.com/u/80108033?v=4",
        phone: "8273226054",
        email: "cishika104@gmail.com"
      }]
}

export const GlobalContext=createContext(initialContacts);

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialContacts);

    const deleteContact=(id)=>{
        dispatch({
            type:'deleteContact',
            payload:id
        })
    }
    const addContact=(contact)=>{
        dispatch({
            type:'addContact',
            payload:contact
        })
    }

    return <GlobalContext.Provider value={{contacts:state.contacts,deleteContact,addContact}}>
    {children}
    </GlobalContext.Provider>
}