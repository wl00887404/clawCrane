import React from 'react'
import { Layout, Content } from 'react-mdl'
import Header from './header'
import Drawer from './drawer'

/* for test */
import { connect } from 'react-redux'
import data from "testData"


if (process.env.BROWSER) {
    require("./style.scss")
}

let getUserAndStore = () => {
    return (dispatch, getState) => {
        dispatch({ type: "receiveUser", user: data.user })
        dispatch({ type: "receiveStores", stores: data.stores })

        dispatch({
            type: "receiveData",
            date: getState().dateSelected,
            data
        })
    }
}

class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout fixedHeader fixedDrawer>
				<Header/>
				<Drawer/>
				<Content>
					<div className="mainPage">
						{this.props.children}
					</div>
				</Content>
			</Layout>

        )
    }
    componentDidMount() {
        console.log("dev: fetch Data from <MainPage/> CDM")
        this.props.dispatch(getUserAndStore())
    }
}



const mapDispatch = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(null, null)(MainPage)
