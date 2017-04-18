import React from 'react'
import { connect } from 'react-redux'

if (process.env.BROWSER){
	require("./style.scss")
}

class Date extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		let date=this.props.dateSelected;
		return(
			<div className="date">
				<div><span>{`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`}</span></div>
				<div><span>營業報告</span></div>
			</div>
		)
	}
}



const mapStore = (store) => {
    return {
        dateSelected: store.dateSelected,
    }
}


export default connect(mapStore)(Date)