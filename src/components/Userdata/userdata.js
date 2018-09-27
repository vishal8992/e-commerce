import React, { Component } from 'react';
import './userdata.css';
import userProfile1 from '../../img/defaultUserIcon.png';
import dbRefObject from '../../databaseDB';
import Loader from 'react-loader-spinner'

class Userdata extends Component {
    constructor(props) {
        super(props);
        this.state =  {data:[],"userDetailsData":"",spinner:false}
    }

    componentWillMount(){
        this.setState({spinner:true});
        dbRefObject.child('userList').on("value", function(obj) {
            const ObjArr = [];
            obj.forEach(function(ind){
                var abc = JSON.stringify(ind);
                abc = JSON.parse(abc);
                ObjArr.push(abc)
            })
            this.setState({data:ObjArr});
            console.log('State result :'+JSON.stringify(this.state));
            this.setState({spinner:false});
        }.bind(this));
    }
  
    userDetail(userData) {
        let userDetailData = this.state.userDetailsData;
        userDetailData = userData;
        this.setState({userDetailsData:userDetailData});
    }

    render() {
        if(!this.state.spinner) {
            return (
                <div>
                    <div className="itemPrnt">
                        <ul>{this.state.data.map((user) => (
                            <li class="itemList">
                                <img src={'data:image/png;base64,'+user.userImg} className="userListImg" alt="logo" />
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
                                        <img src={'data:image/png;base64,'+this.state.userDetailsData.userImg} className="itemDetailImg" alt="logo" />
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
        } else {
            return (
                <div className="loadStl">
                    <Loader type="TailSpin" color="#00BFFF" height="100" width="100"/>  
                </div>
            );
        }
  }
}
export default Userdata;
