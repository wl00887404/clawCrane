import React from 'react'
import { connect } from 'react-redux'
import Fetching from "../fetching";

if (process.env.BROWSER) {
    require("./style.scss")
}
const LoginPage = (props) => {
    return (
        <div className="login">
            <div className="logo"></div>
            {props.children}
            {props.isFetching?(<Fetching/>) :undefined}
        </div>
    )
}


const mapState = (store) => {
    return {
        isFetching: store.isFetching
    }
}

export default connect(mapState)(LoginPage)
