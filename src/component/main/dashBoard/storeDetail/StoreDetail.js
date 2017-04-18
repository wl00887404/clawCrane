import React from 'react'

/*import d3 from "d3"
import d3Tip from "d3-tip";
d3.tip = d3Tip;*/

if (process.env.BROWSER) {
    require("./StoreDetail.scss")
}

class StoreDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.h2 = document.createElement("h2");
        this.h2.innerHTML = this.props.storeName || "中正大學店";
        this.h2.className = "storeName"
        this.refs.self.parentNode.appendChild(this.h2);
    }
    componentWillUnmount() {
        this.h2.parentNode.removeChild(this.h2);
    }
    render() {
        let data = this.props.route.data;
        return (

            <div className="storeDetail" ref="self">
                <Chart data={data} unit="元" svgParentId="income" title="收入金額時間圖"/>
                <Chart data={data} unit="元" svgParentId="expense_dollar" title="支出金額時間圖"/>
                <Chart data={data} unit="隻" svgParentId="expense_doll" title="收入時間圖"/>
                <NotWorkLog />
            </div>

        )
    }
}

class Chart extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let newData = [];
        for (let i = 0; i < 24; i++) {
            newData[i] = 0;
        }

        let i;
        this.props.data.forEach((o, i) => {
            i = o.hour;
            newData[i]++;
        })

        this.draw(newData, this.props.svgParentId, this.props.unit)

    }

    render() {
        return (
            <div className="chart" >
                <h2>
                    {this.props.title}
                </h2>
                <div id={this.props.svgParentId} className="mdl-card mdl-shadow--2dp">
                </div>
            </div>
        )
    }

    draw(data, id, unit) {
        if (process.env.BROWSER) {


            var margin = { top: 40, right: 30, bottom: 30, left: 70 };
            var width = 900 - margin.left - margin.right;
            var height = 480 - margin.top - margin.bottom;
            var x = d3.scale.ordinal()
                .rangeRoundBands([0, width], .1);

            var y = d3.scale.linear()
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            var tip = d3.tip()
                 .attr('class', 'd3-tip')
                .offset([-10, 0])
               .html(function(d) {
                    return "<strong>投幣:</strong>";
                 })
            var svg = d3.select("#" + id).append("svg")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


            svg.call(tip);


            x.domain(data.map((d, i) => {
                return i
            }));
            y.domain([0, d3.max(data, function(d) {
                return d * 10;
            })]);


            svg.append("g")
                .attr("id", "xa")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                //.style("font-family", "cursive")
                .call(xAxis);

            svg.append("g")
                .attr("id", "ya")
                .attr("class", "y axis")
                //.style("font-family", "cursive")
                .call(yAxis)
                .append("text")
                .attr("x", -10)
                .attr("y", -10)
                //.style("font-family", "Microsoft JhengHei")
                .style("font-size", "20")
                .style("text-anchor", "end")
                .text(unit);


            svg.selectAll("bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("id", "bar")
                .attr("class", "bar")
                .attr("x", function(d, i) {
                    return x(i);
                })
                .attr("width", x.rangeBand())
                .attr("y", height)
                .attr("height", 0)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)
                .transition()
                .duration(1000)
                .attr("y", function(d) {
                    return y(d * 10);
                })
                .attr("height", function(d) {
                    return height - y(d * 10);
                });

            let w = 900
            let h = 480
            document.querySelector("#" + id + " svg").setAttribute("viewBox", "0 0 " + w + " " + h);
        }

    }

}
class NotWorkLog extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = this.props.data || [];
        let content = [];
        if (data.length == 0) {
            content.push((<span key="noData">沒有紀錄</span>))
        } else {
            content.push((
                <div key="header" className="row">
                        <div className="th"></div>
                        <div className="th"></div>
                </div>))
            data.map(() => {
                return (
                    <div className="row">
                    </div>
                )
            })
            content = content.concat(data);
        }
        return (
            <div className="errorLog">
                <h2>故障紀錄</h2>
                <div className="mdl-card mdl-shadow--2dp logList">{content}</div>
            </div>
        )
    }
}
export default StoreDetail
