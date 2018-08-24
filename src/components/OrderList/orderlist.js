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
            {"userImg":userProfile1,"userName":"TM","orderCost":"2000","Location":"Noida","paymentType":"COD","orderId":"001","Address":"","orderStatus":"In Progress","itemList":[
                {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"1/2 Kg","price":"52","itemPkt":"200","itemId":"001"},
                {"itemImg":item2,"itemName":"Atta","itemquantity":"10 Kg","price":"280","itemPkt":"450","itemId":"002"},
                {"itemImg":item3,"itemName":"Sugar","itemquantity":"5 Kg","price":"150","itemPkt":"250","itemId":"003"},
            ]},
            {"userImg":userProfile1,"userName":"AS","orderCost":"1050","Location":"Delhi","paymentType":"Debit Card","orderId":"002","Address":"","orderStatus":"In Progress","itemList":[
                {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"1/2 Kg","price":"52","itemPkt":"200","itemId":"001"},
                {"itemImg":item2,"itemName":"Atta","itemquantity":"10 Kg","price":"280","itemPkt":"450","itemId":"002"},
                {"itemImg":item3,"itemName":"Sugar","itemquantity":"5 Kg","price":"150","itemPkt":"250","itemId":"003"},
            ]},
            {"userImg":userProfile1,"userName":"KM","orderCost":"3750","Location":"Gurugram","paymentType":"Credit Card","orderId":"003","Address":"","orderStatus":"Delivered","itemList":[
                {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"1/2 Kg","price":"52","itemPkt":"200","itemId":"001"},
                {"itemImg":item2,"itemName":"Atta","itemquantity":"10 Kg","price":"280","itemPkt":"450","itemId":"002"},
                {"itemImg":item3,"itemName":"Sugar","itemquantity":"5 Kg","price":"150","itemPkt":"250","itemId":"003"},
            ]},
        ],"orderDetailData":{"userImg":userProfile1,"userName":"","orderCost":"","Location":"","paymentType":"","orderId":"","Address":"","orderStatus":"","itemList":[]},"oderList":true,"orderAccord":true}; 
    }

    // componentDidMount() {
    //     fetch('http://192.168.38.47:8080/AuthenticationWS/rest/AuthenticateService/User', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             username: 'vishal',
    //             password: '1234',
    //         })
    //     }).then((Response) => Response.json()).then((findresponse) => {
    //         this.setState({
    //             movies: findresponse.movies,
    //         })
    //     })
    // }

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

    // window.onhashchange = function() {
    // if (window.innerDocClick) {
    //     alert(676)
    //     //Your own in-page mechanism triggered the hash change
    // } else {
    //     alert(9789)
    //     //Browser back button was clicked
    // }
//}

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
                <div className="itemPrnt" style={{border:'1px solid #00c5ff',width:90+'%',marginLeft:5+'%'}}>
                {this.state.orderAccord}
                    <h1 style={{textAlign:'center'}}>{this.state.orderDetailData.userName}</h1>
                    <span style={{color:'#00c5ff',fontSize:22,padding:40}}>Order Id: {this.state.orderDetailData.orderId}</span>
                    {/* accordian 1 start */}
                    <p style={{marginLeft:3+'%',marginBottom: 10}} onClick={()=>this.orderAccrdData()}>
                        <a style={{width:97+'%',textAlign:'left'}} class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
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
                                    <span className="orderitemList-km">{item.itemPkt}</span>
                                    <span className="orderitemList-km">{item.price}</span>
                                    </li>
                                ))    
                            }</ul>
                        </div>
                    </div>
                </div>
             </div>
          ); 
       }
   }
}
export default OrderList;