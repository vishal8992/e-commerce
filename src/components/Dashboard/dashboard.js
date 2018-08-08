import React, { Component } from 'react';
import './dashboard.css';
import chart1 from '../../img/chart1.jpg';
import chart2 from '../../img/chart2.png';
import chart3 from '../../img/chart3.png';
import chart4 from '../../img/chart4.png';

class Dashboard extends Component {
   render() {
      return (
         <div className="dashPrnt">
            <div>
                <div className="dashColsR">
                    <img src={chart1} className="dashChartImg" alt="logo" />
                </div>
                <div className="dashColsL">
                    <img src={chart2} className="dashChartImg" alt="logo" />
                </div>
            </div>
            <div>
                <div className="dashColsR">
                    <img src={chart3} className="dashChartImg" alt="logo" />
                </div>
                <div className="dashColsL">
                    <img src={chart4} className="dashChartImg" alt="logo" />
                </div>
            </div>
         </div>
      );
   }
}
export default Dashboard;