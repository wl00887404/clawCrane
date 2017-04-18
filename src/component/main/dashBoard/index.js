import React from 'react'
import SreachBox from './sreachField'
import Overview from './overview'
import ButtonGroup from './buttonGroup'
import Date from './date'
if (process.env.BROWSER){
	require("./style.scss")
}

class DashBoard extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		//<SreachBox/>
		return(
			<div className="dashBoard">
				<h2>DashBoard <small>version 1.0.0</small></h2>
				<ButtonGroup />
				<Date/>
				<Overview/>
				{this.props.children}
			</div>
		)
	}
}


export default DashBoard
