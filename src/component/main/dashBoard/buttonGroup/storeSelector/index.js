import React from 'react'
import { Button, Card } from 'react-mdl'
import { connect } from 'react-redux'
import PopupMenu from '../popupMenu'
import { Link } from 'react-router'

if (process.env.BROWSER) {
    require("./style.scss")
}

const StorePickerContainer = (props) => {

    return (
        <PopupMenu button="選擇店面">
            <StorePicker {...props}/>
        </PopupMenu>
    )

}

const StorePicker = (props) => {
    let stores=props.stores||[];
    stores=stores.map((store,index)=>{
        return(
            <Link to={`/storeDetail/${store.storeId}`} key={store.storeId}>
                <div key={index}>
                    <span>{store.name}</span>
                </div>
            </Link>
        )
    })
    return (
        <Card shadow={3} className="storePickerContainer">
            <div className="storePicker">
                {stores}
            </div>
        </Card>
    )
}

const mapStore=(store)=>{
        return {
            stores:store.stores
        }
}
export default connect(mapStore)(StorePickerContainer)
