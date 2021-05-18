import {SET_LOGIN_STATE} from '../types/authTypes'

interface UserI {
  firstName: string,
  lastName: string,
}

interface AuthStateI {
  isLoggedIn: boolean,
  token: string,
  user: UserI,
  users: UserI[]
}

interface AuthActionI {
  type: string,
  payload?: UserI
}
  
  export const initialState: AuthStateI = {
    isLoggedIn: false,
    token: null,
    user: null,
    users: []
    //isLoading: false,
  }
  
 const authReducer = (state: AuthStateI, action: AuthActionI):  AuthStateI => {
    const { type, payload } = action
    switch (type) {
      case SET_LOGIN_STATE:
        return {
          ...state,
          ...payload,
        } 
  
      default:
        return state
    }
  }
  
  export default authReducer
  