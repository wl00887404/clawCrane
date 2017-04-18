import React from 'react'
import {Card} from 'react-mdl'
if (process.env.BROWSER){
require("./style.scss");
}
class SreachBox extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Card shadow={1} className="sreachBox">
				<div>
					<input type="text" className="inputText"/>
				</div>
			</Card>
			)
	}
}

export default SreachBox 