import React, { createContext, useReducer, useEffect } from 'react'
import authReducer , {initialState} from './reducers/authReducer'
import postReducer, {postInitialState} from './reducers/postReducer'

export const DataContext = createContext<any>({})

export const DataProvider = ({children}) => {

    const [authstate, authDispatch] = useReducer<React.Reducer<any, any>>(authReducer, initialState)
    const [poststate, postDispatch] = useReducer<React.Reducer<any, any>>(postReducer, postInitialState)
  
    // useEffect(() => {
    //     const firstLogin = localStorage.getItem("firstLogin");
    //     if(firstLogin){
    //         getData('auth/accessToken').then(res => {
    //             if(res.err) return localStorage.removeItem("firstLogin")
    //             dispatch({ 
    //                 type: "AUTH",
    //                 payload: {
    //                     token: res.access_token,
    //                     user: res.user
    //                 }
    //             })
    //         })
    //     }
        
    // },[])
  
    const stateAndDispatch = {
      authstate, 
      poststate, 
      authDispatch, 
      postDispatch
    }
  
    return(
        <DataContext.Provider value={stateAndDispatch}>
            {children}
        </DataContext.Provider>
    )
  }