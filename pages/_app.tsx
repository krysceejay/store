import '../styles/globals.css'
import { createContext, useReducer, useEffect, Reducer } from 'react'
import reducers from '../store/reducers'

const DataContext = createContext(null)

const DataProvider = ({children}) => {
  const initialState = {}

  const [state, dispatch] = useReducer<Reducer<any, any>>(reducers, initialState)

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

  return(
      <DataContext.Provider value={{state, dispatch}}>
          {children}
      </DataContext.Provider>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
     <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
