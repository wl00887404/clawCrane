import React from 'react'
import { Drawer, Navigation } from 'react-mdl'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'

if (process.env.BROWSER){
require("./style.scss")
}
const DrawerBack = () => {
    if (window.innerWidth < 1025) {
        document.querySelector(".mdl-layout__drawer-button").click()
    }
}


const MyDrawer = (props) => {
    return (
        <Drawer title={props.username||"未知使用者"}>
			<Navigation className="mdl-navigation">
				<IndexLink to="/storeList" onClick={DrawerBack}  activeClassName="activeLink">店面總攬</IndexLink>
				<Link to="/" onClick={DrawerBack} activeClassName="activeLink">店面、機器修改</Link>
				<Link to="/edit/memberInfo" onClick={DrawerBack} activeClassName="activeLink">修改會員資料</Link>
				<Link to="/edit/password" onClick={DrawerBack} activeClassName="activeLink">更改密碼</Link>
				<Link to="/reportBug" onClick={DrawerBack} activeClassName="activeLink">系統問題回報</Link>
				<Link to="/">登出</Link>
			</Navigation>
		</Drawer>
    )
}
const mapStore = (store) => {
    return {
        username: store.user.name
    }
}

export default connect(mapStore)(MyDrawer)
