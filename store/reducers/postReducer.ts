import {SET_LOGIN_STATE, GET_POST} from '../types/authTypes'

interface PostI {
    title: string,
    body: string,
  }

interface PostStateI {
  post: PostI
}

interface PostActionI {
  type: string,
  payload?: PostStateI
}
  
  export const postInitialState: PostStateI = {
    post: null
    //isLoading: false,
  }
  
  const postReducer = (state: PostStateI, action: PostActionI): PostStateI => {
    const { type, payload } = action
    switch (type) {
      case GET_POST:
        return {
          ...state,
          ...payload,
        } 
  
      default:
        return state
    }
  }
  
  export default postReducer
  