import React from 'react'
import { Card } from 'react-mdl'
import { connect } from 'react-redux'

if (process.env.BROWSER) {
    require("./style.scss")
}
const Overview = (props) => {
    return (
      <div className="overviewContainer">
        <h2>當日總和</h2>
        <div className="overview">
          <OverviewComponent className="income" header="賺進金額" data={[{amount:props.incomeSum||10000,unit:'元'}]}/>
          <OverviewComponent className="expense"  header="夾走金額和娃娃" data={[{amount:props.takenDollwithPrice||10000,unit:'元'},{amount:props.takenDollwithoutPrice||10000,unit:'隻'}]}/>
          <OverviewComponent className="error" header="發生錯誤" data={[{amount:props.errorNum||10000,unit:'則'}]}/>
        </div>
      </div>
    )
}
const OverviewComponent = (props) => {
    let dataItem = props.data.map((el, i) => {
        return (<div className="item" key={i}><span>{el.amount}</span><span className="unit">{el.unit}</span></div>)
    })

    return (
        <Card shadow = { 1 } className={"overviewComponent "+props.className}>
        <div className="icon" />
        <div className="data">
          <h3>{props.header}</h3>
          <div className="items">
            {dataItem}
          </div>
        </div>
      </Card>
    )
}

const mapStore = (store) => {
    return {
        dateSelected: store.dateSelected,
        /*stores: store.stores,
        incomeSum:store.income[store.selectedDate.toLocaleDateString()].length*10,
        takenDollwithPrice:store.takenDoll[store.selectedDate.toLocaleDateString()].reduce((before,after)=>{
          return before+after.sellingPrice
        },0),
        takenDollwithoutPrice:store.takenDoll[store.selectedDate.toLocaleDateString()].filter((el)=>{
          if(el.sellingPrice){
            return false
          }
          else{
            return true;
          }
        }).length*/
    }
}
export default connect(mapStore)(Overview)
