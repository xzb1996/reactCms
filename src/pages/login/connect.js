import { loginAsyncAction } from "@actions/login"
import { message } from "antd"

export const mapStateToProps = ()=>({

})



export const mapDispatchToProps = (dispatch)=>({
    handleLogin(username,password){
        let flag = dispatch(loginAsyncAction(username,password));
        // console.log(this)
        if( flag ) {
            message.success("登录成功",1,()=>{
                this.history.push("/home");
            })
        }else{
            message.error("登录失败，请重新登录",1,()=>{
                this.history.push("/login")
            })
        }
    }
})