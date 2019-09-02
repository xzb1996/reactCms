import { handleActions } from "redux-actions"

const defaultState ={
    userInfo:""
}

export default handleActions({
    LOGIN_ACTION:(state,action)=>{
        let userState = Object.assign({},state);
        console.log(action)
        userState.userInfo = action.payload.userInfo;
        sessionStorage.setItem("userInfo",action.payload.userInfo)
        return userState;
    }
},defaultState);