import {SET_LOGIN_STATE} from '../types/authTypes'

interface IUser {
  firstName: string,
  lastName: string,
}

export interface IAuthState {
  isLoggedIn: boolean,
  token: string,
  user: IUser,
  users: IUser[]
}

export interface IAuthAction {
  type: string,
  payload?: IUser
}
  
  export const initialState: IAuthState = {
    isLoggedIn: false,
    token: null,
    user: null,
    users: []
    //isLoading: false,
  }
  
 const authReducer = (state: IAuthState, action: IAuthAction):  IAuthState => {
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
  