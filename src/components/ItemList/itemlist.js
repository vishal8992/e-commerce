import React, { Component } from 'react';
import './itemlist.css';
import item1 from '../../img/milk.jpg';
import item2 from '../../img/atta.png';
import item3 from '../../img/sugar.jpg';
import dbRefObject from '../../databaseDB';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state =  {data:[],"productData":{"itemImg":item1,"itemName":"","itemquantity":"","price":"","itemPkt":"","itemId":"","itemDesp":""}}; 
    }

    componentWillMount(){
        dbRefObject.child('itemList').on("value", function(obj) {
            const ObjArr = [];
            obj.forEach(function(ind){
                var abc = JSON.stringify(ind);
                abc = JSON.parse(abc);
                ObjArr.push(abc)
            })
            this.setState({data:ObjArr});
            console.log('State result :'+JSON.stringify(this.state));
        }.bind(this));
    }

    productDetail(productDetails) {
        let productDetailData = this.state.productData;
        productDetailData = productDetails;
        this.setState({productData:productDetailData});
      }

   render() {
      return (
          <div>
            <div className="itemPrnt">
                <ul>{
                        this.state.data.map((item) => (
                            <li class="itemList">
                            <img src={'data:image/png;base64,'+item.itemImg} className="itemListImg" alt="logo" />
                            <span className="itemList-km">{item.itemName}</span>
                            <span className="itemList-km">{item.itemquantity}</span>
                            <span className="itemList-km">{item.price} Rs.</span>
                            <span className="itemList-km">{item.itemPkt} In Stock</span>
                            <a data-toggle="modal" data-target="#itemModal" href="#" className="prdtDtl" onClick={()=>this.productDetail(item)}>Product Detail</a>
                            </li>
                        ))    
                    }
                </ul>
            </div>
            <div className="container">
                <div className="modal fade" id="itemModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content prodPopMain">
                            <div className="itemMdlHdr">
                            <h4 className="modal-title prodctItemPophdr">{this.state.productData.itemName}</h4>
                            <button style={{marginTop:-80}} type="button" className="close clsbtn" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <img src={'data:image/png;base64,'+this.state.productData.itemImg} className="itemDetailImg" alt="logo" />
                                <div className="prcItem">
                                    <span>Price: {this.state.productData.price}</span>
                                    <span style={{marginLeft:100}}>Quantity: {this.state.productData.itemquantity}</span>
                                    <br/><br/>
                                    <span>In Stock: {this.state.productData.itemPkt}</span>
                                </div>
                                <div className="prcItem" style={{marginTop:-150}}>{this.state.productData.itemDesp}</div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      );
   }
}
export default ItemList;