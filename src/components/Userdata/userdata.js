import React, { Component } from 'react';
import './userdata.css';

class Userdata extends Component {
  constructor(props) {
      super(props);
      this.state =  {company:[{companyName:"Mobiloitte",Role:"SE",Location:"Delhi Okhla"},{companyName:"KIWI Tech",Role:"Manager",Location:"Noida Sec-16"},{companyName:"Newgen",Role:"AVP",Location:"Noida Sec-144"},{companyName:"Infosys",Role:"SSE",Location:"Gurugram"}]};   
      this.applyJob = this.applyJob.bind(this);
  }

  applyJob() {
      alert('You have successfully applied for this job.');
  }

  render() {
    return (
        <div className="container userPrnt"> 
            <table>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Location</th>
                    <th>Status</th>
                </tr>
                {
                    this.state.company.map((item) => (
                        <tr>
                            <td>{item.companyName}</td>
                            <td>{item.Role}</td>
                            <td>{item.Location}</td>   
                            <td><a className="aaply" onClick={this.applyJob}>Apply</a></td> 
                        </tr>
                    ))
                }
            </table>
      </div>
    );
  }
}
export default Userdata;
