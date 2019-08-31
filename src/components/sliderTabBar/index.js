import React, { Component } from 'react'
import { Menu } from "antd"
import { layoutRouter } from "@router"
import sliderEach from "@utils/sliderEach"

let sliderComponent = sliderEach(layoutRouter)
export default class SliderTabBar extends Component {
    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline">
                {
                    sliderComponent
                }
            </Menu>
        )
    }
}
