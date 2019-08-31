import React, { Component } from 'react'

import LayoutWrapper from "@layout"
import { Switch, Redirect } from "react-router-dom"
// import { baseConfig } from "@router"
import { layoutRouter } from "@router"
import routerEach from "@utils/routerEach"

// let routerEachComponent = routerEach(baseConfig)
let routerEachComponent = routerEach(layoutRouter)
export default class App extends Component {
  render() {
    return (
      <Switch>
        <LayoutWrapper>
          <Redirect from="/" to="/home" exact/>
          {
            routerEachComponent
          }
        </LayoutWrapper>
      </Switch>
    )
  }
}

