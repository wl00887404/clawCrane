import React from 'react'
import { Link } from 'react-router'
import { Card } from 'react-mdl'
import { connect } from 'react-redux'
const Chart = require('chart.js')

if (process.env.BROWSER) {
    require("./style.scss")

}

/*改變排序？！*/

class StoreList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let stores = this.props.stores || []

        stores = stores.map((store) => {
            return (
                <Store name={store.name} address={store.address} gpsX={store.gpsX} gpsY={store.gpsY} key={store.storeId} storeId={store.storeId} />
            )
        })

        return (
            <div className="storeListContainer">
                <h2>各店狀況</h2>
                <Card shadow={1} className="storeList">
                    {stores}
                </Card>
            </div>
        )
    }
}

class Store extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let r = 0
        if (r) {
            r = " notZero"
        }
        return (
            <div className="store">
                <Link to={`/storeDetail/${this.props.storeId}`}>
                    <div className="info">
                        <div>
                            <div className="name">{this.props.name}</div>
                            <div className={ "error"+r}>
                                0則錯誤訊息
                            </div>
                        </div>
                        <div className="address">{this.props.address}</div>
                    </div>
                    <div className="data">
                        <div className="income">
                            <div className="title">賺進</div>
                            <div className="statics">
                                <div>
                                    <div>
                                        <div className="value">100000<span className="unit">元</span></div>
                                        <Pie percent="0.6" />
                                    </div>
                                    <div className="percent">佔50%</div>
                                </div>
                            </div>
                        </div>
                        <div className="expense">
                            <div className="title">被夾走</div>
                            <div className="statics">
                                <div>
                                    <div>
                                        <div className="value">100000<span className="unit">元</span></div>
                                        <Pie percent="0.6" />
                                    </div>
                                    <div className="percent">佔50%</div>
                                </div>
                                <div>
                                    <div>
                                        <div className="value">100000<span className="unit">元</span></div>
                                        <Pie percent="0.6" />
                                    </div>
                                    <div className="percent">佔50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

const Static = () => {
    return (
        <div></div>
    )
}

class Pie extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let ctx = this.refs.canvas
        let data = {
            datasets: [{
                data: [60, 40],
                backgroundColor: [
                    "#A5BE00",
                    "#f3ffa5"
                ]
            }]
        }
        let options = {
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            events: [],
            cutoutPercentage: 75
        }
        let myChart = new Chart(ctx, {
            type: 'doughnut',
            data,
            options
        })
    }
    render() {
        return (
            <div className="pie">
                <canvas ref="canvas"/>
            </div>
        )
    }
}

const mapStore = (store) => {
    return {
        stores: store.stores,
    }
}
export default connect(mapStore)(StoreList)
