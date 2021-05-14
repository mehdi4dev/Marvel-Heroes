import {FETCH_USER, LOGIN_USER,LOG_OUT_USER} from "../const/const"
const initialState={
    users:{},
    isLogin:false
}
export const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER:{
            return {
                ...state,
                users:action.payload,
                isLogin:action.isLogin
                
            }
        }
        case LOGIN_USER:
            return {
                ...state,
                isLogin:action.payload
            }
        case LOG_OUT_USER:
            return {
                ...state,
                isLogin:action.payload
            }
    
        default:
            return state
    }
}