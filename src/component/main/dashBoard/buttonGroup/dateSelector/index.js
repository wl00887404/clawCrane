import React from 'react'
import { Button, Card } from 'react-mdl'
import DayPicker from "react-day-picker"
import { connect } from 'react-redux'
import { selectDate } from 'actions/dateSelector'
import PopupMenu from '../popupMenu'

if (process.env.BROWSER) {
    require('react-day-picker/lib/style.css')
    require("./style.scss")
}



const isSameDay = (day1, day2) => {
    if (!day1 || !day2) {
        return false
    } else {
        return day1.getDate() === day2.getDate() && day1.getMonth() === day2.getMonth() && day1.getFullYear() === day2.getFullYear()
    }
}

const onDayClick = (callback, selectDate, e, day, { selected, disabled }) => {
    if (disabled || selected) {
        return;
    } else {
        selectDate(day)
        callback()
    }
}

const disableDay = (day) => {
    let now = new Date();
    if (isSameDay(now, day) || Date.parse(now) > Date.parse(day)) {
        return false
    } else {
        return true
    }
}


const DatePickerContainer = (props) => {

    return (
        <PopupMenu button="選擇日期">
            <DatePicker {...props}/>
        </PopupMenu>
    )

}
const DatePicker = (props) => {
    return (
        <Card shadow={3} className="datePickerContainer">
            <div className="datePicker">
                <DayPicker 
                    initialMonth={ props.dateSelected } 
                    disabledDays={ disableDay }
                    selectedDays={ day => isSameDay(day, props.dateSelected) }
                    onDayClick={ onDayClick.bind(null,props.toggle,props.selectDate) } 
                />
            </div>
        </Card>
    )
}

const mapStore = (store) => {
    return {
        dateSelected: store.dateSelected,
    }
}
const mapDispatch = (dispatch) => {
    return {
        selectDate: (day) => {
            dispatch(selectDate(day))
        }
    }
}
export default connect(mapStore, mapDispatch)(DatePickerContainer)
