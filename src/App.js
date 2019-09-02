import React, { Component } from 'react'

import LayoutWrapper from "@layout"
import { Switch, Redirect } from "react-router-dom"

import { layoutRouter } from "@router"
import routerEach from "@utils/routerEach"
import authRouter from "@common/authRouter"

let routerEachComponent = routerEach(layoutRouter)
class App extends Component {
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

export default authRouter(App)

