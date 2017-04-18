import React from 'react'
import {Header} from 'react-mdl'
import { IndexLink } from 'react-router'

if (process.env.BROWSER){
require("./style.scss")
}
const  toggleDraewerOnDesktop=() =>{
        let drawer =  document.querySelector('.mdl-layout__drawer');
        let content =  document.querySelector('.mdl-layout__content');
        if (drawer.className.indexOf("desktopInvisible-drawer") == -1) {
            drawer.className += " desktopInvisible-drawer";
            content.className += " desktopInvisible-content";
        } else {
            drawer.className = drawer.className.replace(" desktopInvisible-drawer", "");
            content.className = content.className.replace(" desktopInvisible-content", "");
        }
    }
const MyHeader =(props)=> {
    let title=(
        <div>
            <div className="headerTitle">
                <IndexLink to="/storeList" ><h1 className="mdl-layout-title logoText">Bolong <small>即時數位資訊站</small></h1></IndexLink>
                <div className="mdl-layout-spacer"></div>
                <div className="datetime"></div>
            </div>
        </div>
    )
    return (
        <Header className="mainHeader" title={title}>
		</Header>
    )
}
export default MyHeader

/*
<Header className="mainHeader" title={title}>
    <div role="button" className="drawerButtonForDesktop" onClick={toggleDraewerOnDesktop}><i className="material-icons"></i></div>
</Header>
*/