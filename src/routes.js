import React from 'react'
import { Route, IndexRoute } from 'react-router'

import LoginPage from "component/login/container"
import Dialog from "component/login/dialog"
import LoginDialogBody from "component/login/login"

import Loader from "component/loader"

import MainPage from 'component/main/container'

import DashBoard from 'component/main/dashBoard'
import StoreList from 'component/main/dashBoard/storeList'
import StoreDetail from 'component/main/dashBoard/storeDetail'


import EditMemberInfo from "component/main/updateMemberInfo"
import ReportBug from "component/main/reportBug"
import EditPwd from "component/main/updatePassword"

import store from "reducers"
let dispatch = store.dispatch;

const Chart = require('chart.js')


let compose = () => {
    let fns = arguments;

    return (result) => {
        for (let i = fns.length - 1; i > -1; i--) {
            result = fns[i].call(this, result);
        }

        return result;
    };
};

// class Test extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     componentDidMount() {
//         let ctx = document.getElementById("myChart");
//         let data = {
//             labels: [
//                 "Red",
//                 "Blue",
//                 "Yellow"
//             ],
//             datasets: [{
//                 data: [300, 50, 100],
//                 backgroundColor: [
//                     "#FF6384",
//                     "#36A2EB",
//                     "#FFCE56"
//                 ],
//                 hoverBackgroundColor: [
//                     "#FF6384",
//                     "#36A2EB",
//                     "#FFCE56"
//                 ]
//             }]
//         }
//         let myChart = new Chart(ctx, {
//             type: 'doughnut',
//             data
//         })
//     }
//     render() {
//         return (
//             <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
//                 <div style={{width:"800px",height:"800px"}}>
//                     <canvas id="myChart" width="1px" height="1px"></canvas>
//                 </div>
//             </div>
//         )
//     }
// }

module.exports = (
    <Route>
        <Route component={ LoginPage }>
            <Route path="/" component={ Dialog }>
                <IndexRoute component={ LoginDialogBody }/>
            </Route>
        </Route>
        <Route component={ MainPage }>
            <Route path="/storeList" component={ DashBoard }>
                <IndexRoute component={ StoreList }/>
                <Route path="/storeDetail/:storeId" component={StoreDetail}/>
            </Route>
            <Route path="/edit/memberInfo" component={ EditMemberInfo }/>
            <Route path="/edit/password" component={ EditPwd }/>
            <Route path="/reportBug" component={ ReportBug }/>
        </Route>
    </Route>
)
