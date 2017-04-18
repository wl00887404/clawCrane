import React from 'react'
import Loader from "component/loader"
import { Button } from 'react-mdl'
import { connect } from 'react-redux'
import { cancel } from 'actions/fetch'

if (process.env.BROWSER) {
    require("./style.scss")
}

const Fetching = (props) => {
    let fetchItems
        /*if (props.fetchItems) {
            fetchItems = props.fetchItems.map((el) => {
                return (<div className="fetchItem" key={el.name}><span>{el.name}</span><Dot finish={el.finish}/></div>)
            })
        }*/
    return (
        <div className="isLogin"> 
            <Loader/>
            {fetchItems}
            <Button type="button" id="cancelButton" onClick={props.cancel} raised>取消</Button>
        </div>
    )
}

const mapDispatch = (dispatch) => {
    return {
        cancel:()=>{
            dispatch(cancel());
        }
    }
}


export default connect(null, mapDispatch)(Fetching)

/*
const Dot = (props) => {
    return (
        <span className={props.finish?"dot finish":"dot notFinish"}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </span>
    )
}*/