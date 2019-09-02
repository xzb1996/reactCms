import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

export default (WrapperComponent) => {
    return class extends Component {
        render() {
            let token = sessionStorage.getItem("token");
            if(token) {
                return <WrapperComponent />
            }
            return <Redirect to="/login" />
        }


    }
}
