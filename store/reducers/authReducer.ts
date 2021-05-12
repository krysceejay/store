import {SET_LOGIN_STATE} from '../types/authTypes'

interface UserState {
  firstName: string,
  lastName: string,
}

interface AuthState {
  isLoggedIn: boolean,
  token: string,
  user: UserState,
}

interface AuthAction {
  type: string,
  payload?: UserState
}
  
  const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
    user: null,
    //isLoading: false,
  }
  
  const authReducer = (state: AuthState = initialState, action: AuthAction) => {
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
  