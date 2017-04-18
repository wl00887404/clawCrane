import React from 'react'
import {Spinner} from 'react-mdl'
import {browserHistory} from 'react-router'

if (process.env.BROWSER){
require("./Loader.scss")
}
class Loader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="loaderContainer">
                <Spinner className="loader" singleColor/>
            </div>
        )
    }
}
export default Loader