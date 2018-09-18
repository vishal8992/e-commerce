import React, { Component } from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";
import './dashboard.css';
import dbRefObject from '../../databaseDB';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[
            {
              label: "Series 1",
              data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
              label: "Series 2",
              data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
          ]};
      }

   render() {
      return (
         <div className="dashPrnt">
            <div>
                <div className="dashColsR">
                    <Chart data={this.state.data}>
                        <Axis primary type="time" />
                        <Axis type="linear" />
                        <Series type={Line} />
                    </Chart>
                </div>
                <div className="dashColsL">
                    <Chart data={this.state.data}>
                        <Axis primary type="time" />
                        <Axis type="linear" />
                        <Series type={Line} />
                    </Chart>
                </div>
            </div>
            <div>
                <div className="dashColsR">
                    <Chart data={this.state.data}>
                        <Axis primary type="time" />
                        <Axis type="linear" />
                        <Series type={Line} />
                    </Chart>
                </div>
                <div className="dashColsL">
                    <Chart data={this.state.data}>
                        <Axis primary type="time" />
                        <Axis type="linear" />
                        <Series type={Line} />
                    </Chart>
                </div>
            </div>
         </div>
      );
   }
}
export default Dashboard;