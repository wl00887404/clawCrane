import React from 'react'
import { Button} from 'react-mdl'
import StoreSelector from './storeSelector'
import DateSelector from './dateSelector'
import PopupMenu from './popupMenu/'
if (process.env.BROWSER){
	require("./style.scss")
}
class ButtonGroup extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="buttonGroup">
				<StoreSelector/>
				<DateSelector />
			</div>
		)
	}
}

export default ButtonGroup