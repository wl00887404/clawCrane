import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import store from 'reducers'

import { Router, browserHistory } from 'react-router'
import routes from 'routes'
//import { RouteTransition } from 'react-router-transition'


import 'react-mdl/extra/material.js'

//import data from "./testData.js"


if (process.env.BROWSER) {
    require('react-mdl/extra/material.css')
    require("sass/reset.scss")
    require("sass/screen.scss")
    require("sass/animation.scss")
    require("sass/animate.css")
}




class Root extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {}
    render() {
        return (
            <Provider store={store}>
                <Router routes={routes} history={browserHistory}/>
            </Provider>
        )
    }
}


ReactDOM.render((<Root/>), document.getElementById('root'))

