import React, { Component } from 'react';
import './itemlist.css';
import item1 from '../../img/milk.jpg';
import item2 from '../../img/atta.png';
import item3 from '../../img/sugar.jpg';


class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state =  {data:[
            {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"1/2 Kg","price":"52","itemPkt":"200","itemId":"001","itemDesp":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            {"itemImg":item2,"itemName":"Atta","itemquantity":"10 Kg","price":"280","itemPkt":"450","itemId":"002","itemDesp":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            {"itemImg":item3,"itemName":"Sugar","itemquantity":"5 Kg","price":"150","itemPkt":"250","itemId":"003","itemDesp":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        ],"productData":{"itemImg":item1,"itemName":"","itemquantity":"","price":"","itemPkt":"","itemId":"","itemDesp":""}}; 
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
                            <img src={item.itemImg} className="itemListImg" alt="logo" />
                            <span className="itemList-km">{item.itemName}</span>
                            <span className="itemList-km">{item.itemquantity}</span>
                            <span className="itemList-km">{item.itemPkt}</span>
                            <span className="itemList-km">{item.price}</span>
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
                                <img src={this.state.productData.itemImg} className="itemDetailImg" alt="logo" />
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