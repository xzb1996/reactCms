import React, { Component } from 'react'
import "./index.css";
export default class Loading extends Component {
    render() {
        return (
            <figure>
                <div className="dot white"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </figure>
        )
    }
}
