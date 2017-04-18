import fetch from 'isomorphic-fetch'
//import data from 'database.js'
import { browserHistory } from 'react-router'


const isFetching = () => {
    return {
        type: "isFetching"
    }
}

const complete = () => {
    return (dispatch) => {
        dispatch({ type: "completeFetch" })
            //browserHistory.push("/storeList")
    }
}



export const cancel = () => {
    return {
        type: "cancelFetch"
    }
}


export const login = (account, password) => {
    return (dispatch, getState) => {
        if (!getState().isFetching) {
            dispatch(isFetching())
            setTimeout(() => {
                if (getState().isFetching) {
                    dispatch(complete())
                    browserHistory.push('/storeList');
                }
            }, 2500)

        }
    }
}
/*
export const fetchData = () => {
    return (dispatch, getState) => {
        dispatch(isFetching()) //alert(1)
    }
}*/
