import { createAction } from "redux-actions"
import { loginApi } from "@api/users"


// 登录
export const loginAction = createAction("LOGIN_ACTION",val=>val)

export const loginAsyncAction = (username,password)=>{
    return async (dispatch)=>{
        let data = await loginApi(username,password);
        console.log(data,"data")
        if(data.code === 200){
            // 存储token，顺便告诉组件跳转
            sessionStorage.setItem("token",data.data.token)
            dispatch(loginAction(data.data));
            return true;
        }else{
            return false;
        };
        
    }
}