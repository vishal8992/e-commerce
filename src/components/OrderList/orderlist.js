import React, { Component } from 'react';
import './orderlist.css';
import userProfile1 from '../../img/defaultUserIcon.png';
import item1 from '../../img/milk.jpg';
import item2 from '../../img/atta.png';
import item3 from '../../img/sugar.jpg';
import downIcon from '../../img/downArrow.png';
import upIcon from '../../img/upArrow.png';

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state =  {data:[
            {"userImg":userProfile1,"userName":"TM","orderCost":"2000","Location":"Noida","paymentType":"COD","orderId":"001","orderDate":"20/08/2018","exptDate":"23/08/2018","Address":"Sec-62, Noida, U.P.","orderStatus":"In Progress","itemList":[
                {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"1/2 Kg","price":"26","itemOrder":"2","itemId":"001"},
                {"itemImg":item2,"itemName":"Atta","itemquantity":"10 Kg","price":"280","itemOrder":"1","itemId":"002"},
                {"itemImg":item3,"itemName":"Sugar","itemquantity":"5 Kg","price":"150","itemOrder":"1","itemId":"003"},
            ]},
            {"userImg":userProfile1,"userName":"AS","orderCost":"1050","Location":"Delhi","paymentType":"Debit Card","orderId":"002","orderDate":"25/08/2018","exptDate":"28/08/2018","Address":"Uttam Nagar, Delhi, 110055","orderStatus":"In Progress","itemList":[
                {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"1/2 Kg","price":"52","itemOrder":"3","itemId":"001"},
                {"itemImg":item2,"itemName":"Atta","itemquantity":"10 Kg","price":"280","itemOrder":"2","itemId":"002"},
                {"itemImg":item3,"itemName":"Sugar","itemquantity":"5 Kg","price":"150","itemOrder":"4","itemId":"003"},
            ]},
            {"userImg":userProfile1,"userName":"KM","orderCost":"3750","Location":"Gurugram","paymentType":"Credit Card","orderId":"003","orderDate":"28/08/2018","exptDate":"01/09/2018","Address":"K-2, Paramount Apartment, Sohna Road, Gurugram, Haryana","orderStatus":"Delivered","itemList":[
                {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"1/2 Kg","price":"52","itemOrder":"1","itemId":"001"},
                {"itemImg":item2,"itemName":"Atta","itemquantity":"10 Kg","price":"280","itemOrder":"3","itemId":"002"},
                {"itemImg":item3,"itemName":"Sugar","itemquantity":"5 Kg","price":"150","itemOrder":"1","itemId":"003"},
            ]},
        ],"orderDetailData":{"userImg":userProfile1,"userName":"","orderCost":"","Location":"","paymentType":"","orderId":"","orderDate":"","exptDate":"","Address":"","orderStatus":"","itemList":[]},"oderList":true,"orderAccord":true}; 
    }

    orderDetail(orderDetails) {
        let orderDetailData = this.state.orderDetailData;
        orderDetailData = orderDetails;
        this.setState({orderDetailData:orderDetailData});
        this.state.oderList = false;
    }

    orderAccrdData() {
        if(this.state.orderAccord) {
            this.state.orderAccord = false; 
        } else {
            this.state.orderAccord = true;
        }
    }
    
   render() {
       if(this.state.oderList) {
        return (
            <div>
                <div className="itemPrnt">
                    <ul>{
                            this.state.data.map((order) => (
                                <li class="itemList">
                                <img src={order.userImg} className="userListImg" alt="logo" />
                                <span className="itemList-order">{order.userName}</span>
                                <span className="itemList-order">{order.orderCost} Rs.</span>
                                <span className="itemList-order">{order.Location}</span>
                                <span className="itemList-order">{order.paymentType}</span>
                                <span style={{color: order.orderStatus=='In Progress' ? 'red' : 'green'}} className="itemList-order">{order.orderStatus}</span>
                                <a href="#" className="orderDtl" onClick={()=>this.orderDetail(order)}>Order Detail</a>
                                </li>
                            ))    
                        }
                    </ul>
                </div>
             </div>
          );
       } else {
        return (
            <div>
                <div className="itemPrnt" style={{border:'1px solid #00c5ff',width:90+'%',marginLeft:5+'%',height:475}}>
                {this.state.orderAccord}
                    <h1 style={{textAlign:'center'}}>{this.state.orderDetailData.userName}</h1>
                    <div className="lftAlgData">
                        <span style={{color: 'rgb(0, 197, 255)'}}>Order Id: </span><span>{this.state.orderDetailData.orderId}</span>
                    </div>
                    <div className="lftAlgData" style={{textAlign: 'right'}}>
                        <span style={{color: 'rgb(0, 197, 255)'}}>Order Data: </span><span>{this.state.orderDetailData.orderDate}</span>
                    </div>
                    {/* Item List Data */}
                    <p style={{marginLeft:3+'%',marginBottom: 10}} onClick={()=>this.orderAccrdData()}>
                        <a style={{width:97+'%',textAlign:'left',fontSize:19}} class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Order Item List
                            <img src={this.state.orderAccord ? downIcon : upIcon} className="userListImg" style={{height: 30,width:3+'%',float:'right'}} alt="logo" />
                        </a>
                    </p>
                    <div style={{width:100+'%',marginLeft:0}} class="collapse" id="collapseExample">
                        <div class="card card-body" style={{border:'none',padding:0}}>
                           <ul>{
                                this.state.orderDetailData.itemList.map((item) => (
                                    <li class="orderItemList">
                                    <img src={item.itemImg} className="orderItemListImg" alt="logo" />
                                    <span className="orderitemList-km">{item.itemName}</span>
                                    <span className="orderitemList-km">{item.itemquantity}</span>
                                    <span className="orderitemList-km">{item.itemOrder}</span>
                                    <span className="orderitemList-km">{item.price}</span>
                                    </li>
                                ))    
                            }</ul>
                        </div>
                    </div>
                    {/* Item List Data Finish */}
                    <div className="lftAlgData">
                        <span style={{color: 'rgb(0, 197, 255)'}}>Address: </span><span>{this.state.orderDetailData.Address}</span>
                    </div>
                    <div className="lftAlgData" style={{textAlign: 'right'}}>
                        <span style={{color: 'rgb(0, 197, 255)'}}>Expt. Delivery Date: </span><span>{this.state.orderDetailData.exptDate}</span>
                    </div>
                    <div className="lftAlgData">
                        <span style={{color: 'rgb(0, 197, 255)'}}>Total Amont: </span><span>{this.state.orderDetailData.orderCost} Rs.</span>
                    </div>
                    <div className="lftAlgData" style={{textAlign: 'right'}}>
                        <span style={{color: 'rgb(0, 197, 255)'}}>Payment Status: </span><span>{this.state.orderDetailData.paymentType}</span>
                    </div>
                    <div className="lftAlgData">
                        <span style={{color: 'rgb(0, 197, 255)'}}>Order Status: </span><span style={{color:this.state.orderDetailData.orderStatus=='In Progress' ? 'red' : 'green'}}>{this.state.orderDetailData.orderStatus}</span>
                    </div>
                </div>
             </div>
          ); 
       }
   }
}
export default OrderList;