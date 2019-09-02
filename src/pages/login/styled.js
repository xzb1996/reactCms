import styled from "styled-components"
import bg from "@static/bg.jpg"

export const LoginWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:url(${bg}) no-repeat ;
    
    &>div{
        width:500px;
        background:rgba(255,255,255,.6);
        border-radius:10px;
        padding:20px;
        .logo{
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                width:170px;
                height:60px;
            }
        }
        form{
            margin-top:10px;
            input{
                height:40px;
            }
        }
    }
`