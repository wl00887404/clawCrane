import React from 'react'
import { Card, CardTitle } from 'react-mdl';
import { connect } from 'react-redux'

if (process.env.BROWSER) {
    require('./style.scss')
}

const Dialog = (props) => {
    let error;
    if (props.error) {
        error = (<div className="error"><span>{props.error}</span></div>)
    }
    return (
        <Card shadow={3} className={props.isFetching?"dialog page-slideDown":"dialog"}>
			<CardTitle className="header">
				<h1 className="logoText">Bolong <small>即時數位資訊站</small></h1>
			</CardTitle>
			{error}
			{props.children}
		</Card>
    )
}

const mapState = (store) => {
    return {
        isFetching: store.isFetching,
        error: store.error
    }
}

export default connect(mapState)(Dialog)
