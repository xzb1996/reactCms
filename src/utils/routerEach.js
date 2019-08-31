import React from "react"
import { Route } from "react-router-dom"

export default (routes)=>{
    const fn = (children)=>{
        return children.map((item,index)=>(
            <Route path={item.path} key={index} render={()=>(
                <item.component />
            )} />
        ))
    }

    return routes.map((item,index)=>{
        if(item.children){
            return fn(item.children);
        }else{
            return <Route path={item.path} key={index} render={()=>(
                <item.component />
            )} />
        }
    })
}