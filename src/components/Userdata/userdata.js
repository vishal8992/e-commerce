import React, { Component } from 'react';
import './userdata.css';
import userProfile1 from '../../img/defaultUserIcon.png';

class Userdata extends Component {
    constructor(props) {
        super(props);
        this.state =  {data:[
            {"userImg":userProfile1,"firstName":"Vishal","lastName":"Jain","mobile":"9716682259","email":"vishal.jain@newgen.co.in","UserType":"Premium","Address":"Delhi","userId":"001","joinDat":"20/08/2018","totalShopingCost":"52575"},
            {"userImg":userProfile1,"firstName":"Akshay","lastName":"Bansal","mobile":"9877854655","email":"akshay.bansal@newgen.co.in","UserType":"Non Premium","Address":"Noida","userId":"001","joinDat":"20/08/2018","totalShopingCost":"1145"},
            {"userImg":userProfile1,"firstName":"Ankit","lastName":"Mittal","mobile":"9467567675","email":"ankit.mittal@newgen.co.in","UserType":"Non Premium","Address":"Panjab","userId":"001","joinDat":"20/08/2018","totalShopingCost":"2252"},
        ],"userDetailsData":""}
    }
  
    userDetail(userData) {
        let userDetailData = this.state.userDetailsData;
        userDetailData = userData;
        this.setState({userDetailsData:userDetailData});
    }

    render() {
        return (
            <div>
                <div className="itemPrnt">
                    <ul>{this.state.data.map((user) => (
                        <li class="itemList">
                            <img src={user.userImg} className="userListImg" alt="logo" />
                            <span className="itemList-order">{user.firstName+' '+user.lastName}</span>
                            <span className="itemList-order">{user.mobile}</span>
                            <span className="itemList-order">{user.Address}</span>
                            <span className="itemList-order">{user.email}</span>
                            <span className="itemList-order">{user.joinDat}</span>
                            <a data-toggle="modal" data-target="#userModal" href="#" className="prdtDtl" onClick={()=>this.userDetail(user)}>User Detail</a>
                            
                        </li>
                    ))    
                    }</ul>
                </div>
                <div className="container">
                    <div className="modal fade" id="userModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content prodPopMain">
                                <div className="itemMdlHdr">
                                <h4 className="modal-title prodctItemPophdr">{this.state.userDetailsData.firstName+' '+this.state.userDetailsData.lastName}</h4>
                                <button style={{marginTop:-80}} type="button" className="close clsbtn" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <img src={this.state.userDetailsData.userImg} className="itemDetailImg" alt="logo" />
                                    <div className="prcItem">
                                        <span>Mobile: {this.state.userDetailsData.mobile}</span>
                                        <span style={{float:'right',marginRight:50}}>Email: {this.state.userDetailsData.email}</span>
                                        <br/><br/>
                                        <span>Address: {this.state.userDetailsData.Address}</span>
                                        <span style={{float:'right',marginRight:50}}>Total Shoping: {this.state.userDetailsData.totalShopingCost}</span>
                                        <br/><br/>
                                        <span>User Status: {this.state.userDetailsData.UserType}</span>
                                        <span style={{float:'right',marginRight:50}}>Created On: {this.state.userDetailsData.joinDat}</span>
                                        <div className="form-group" style={{width:100+'%',marginTop:20}}>
                                            <select className="form-control" id="sel1" style={{display:'inline-block',width:50+'%'}}>
                                                <option>Block</option><option>Unblock</option>
                                            </select>
                                            <a href="#" style={{display: 'inline-block',marginTop:0,float: 'none',padding: 4+'px'+ 6+'px' + 4+'px' + 6+'px',marginLeft: 25}} class="prdtDtl">Update Status</a>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}
export default Userdata;
