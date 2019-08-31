import React from 'react'
import { Menu, Icon } from "antd"
const { SubMenu } = Menu;

export default (routes) => {
    let fn = (child) => {
        return <SubMenu
                    key={child.key}
                    title={
                        <span>
                            <Icon type={child.icon} />
                            <span>{child.name}</span>
                        </span>
                    }
                >{
                    child.children.map((item,index)=>{
                        if(item.children){
                            return fn(item)
                        }else{
                            return <Menu.Item key={item.key}>{item.name}</Menu.Item>
                        }
                    })
                }
                </SubMenu>
    }
    return routes.map((child) => {
        if (child.children) {
            return fn(child)
        } else {
            return  <Menu.Item key={child.key}>
                        <Icon type={child.icon} />
                        <span>{child.name}</span>
                    </Menu.Item>
        }
    })
}
