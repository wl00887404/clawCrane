import React from 'react'
import { Button, Card } from 'react-mdl'
if (process.env.BROWSER) {
    require("./style.scss")
}

class PopupMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({ show: !this.state.show })
    }
    render() {
        let children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                toggle: this.toggle
            })
        )
        return (
            <div className="popupMenu">
	            <Button className={this.state.show?"show":""} onClick={this.toggle} >{this.props.button}</Button>
	            <div className={this.state.show?"show menu":"menu"}>
            		{children}
        		</div>
        		<div className={this.state.show?"show obfuscator":"obfuscator"} onClick={this.toggle}/>
	        </div>
        )
    }
}

export default PopupMenu
