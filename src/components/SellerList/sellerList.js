import React, { Component } from 'react';
import './sellerList.css';
import userProfile1 from '../../img/shopIcon.png';
import dbRefObject from '../../databaseDB';
import Loader from 'react-loader-spinner'

class sellerList extends Component {
    constructor(props) {
        super(props);
        this.state =  {data:[],"sellerDetailsData":"",spinner:false}
    }

    componentWillMount(){
        this.setState({spinner:true});
        dbRefObject.child('sellerList').on("value", function(obj) {
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
  
    sellerDetail(sellerData) {
        let sellerDetailsData = this.state.sellerDetailsData;
        sellerDetailsData = sellerData;
        this.setState({sellerDetailsData:sellerDetailsData});
    }

    render() {
        if(!this.state.spinner) {
            return (
                <div>
                    <div className="itemPrnt">
                        <ul>{this.state.data.map((seller) => (
                            <li class="itemList">
                                <img style={{height:65,padding:10,width:6+'%'}} src={'data:image/png;base64,'+seller.storeImage} className="userListImg" alt="logo" />
                                <span className="itemList-order">{seller.storeName}</span>
                                <span className="itemList-order">{seller.MobileNum}</span>
                                <span className="itemList-order">{seller.Location}</span>
                                <span className="itemList-order">{seller.ratingStore}/5</span>
                                <span style={{color: seller.openCloseStatus=='Closed' ? 'red' : 'green'}} className="itemList-order">{seller.openCloseStatus}</span>
                                <a data-toggle="modal" data-target="#userModal" href="#" className="prdtDtl" onClick={()=>this.sellerDetail(seller)}>Seller Detail</a>
                            </li>
                        ))    
                        }</ul>
                    </div>
                    <div className="container">
                        <div className="modal fade" id="userModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content prodPopMain">
                                    <div className="itemMdlHdr">
                                    <h4 className="modal-title prodctItemPophdr">{this.state.sellerDetailsData.storeName}</h4>
                                    <button style={{marginTop:-80}} type="button" className="close clsbtn" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={'data:image/png;base64,'+this.state.sellerDetailsData.storeImage} className="itemDetailImg" alt="logo" />
                                        <div className="prcItem">
                                            <span>Mobile: {this.state.sellerDetailsData.MobileNum}</span>
                                            <span style={{float:'right',marginRight:50}}>Status: {this.state.sellerDetailsData.openCloseStatus}</span>
                                            <br/><br/>
                                            <span>Address: {this.state.sellerDetailsData.Location}</span>
                                            <span style={{float:'right',marginRight:50}}>Rating Store: {this.state.sellerDetailsData.ratingStore}</span>
                                            <br/><br/>
                                            <span>Store Detail: {this.state.sellerDetailsData.storeDetails}</span>
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
export default sellerList;
