import React, { Component } from 'react';
import './itemlist.css';
import item1 from '../../img/item1.jpg';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state =  {data:[{"itemImg":item1,"itemName":"Amul Milk","itemquantity":"1/2 Kg","price":"52","itemPkt":"200"},
                            {"itemImg":item1,"itemName":"DMS Milk","itemquantity":"1 Kg","price":"52","itemPkt":"450"},
                            {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"2 Kg","price":"52","itemPkt":"250"},
                            {"itemImg":item1,"itemName":"DMS Milk","itemquantity":"250 g","price":"52","itemPkt":"150"},
                            {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"2 Kg","price":"52","itemPkt":"175"},
                            {"itemImg":item1,"itemName":"DMS Milk","itemquantity":"2 Kg","price":"52","itemPkt":"125"},
                            {"itemImg":item1,"itemName":"Amul Milk","itemquantity":"3 Kg","price":"52","itemPkt":"100"},
        ]}; 
    }

   render() {
      return (
         <div className="itemPrnt">
            <ul>{
                    this.state.data.map((item) => (
                        <li class="itemList">
                        <img src={item.itemImg} className="itemListImg" alt="logo" />
                        <span className="itemList-km">{item.itemName}</span>
                        <span className="itemList-km">{item.itemquantity}</span>
                        <span className="itemList-km">{item.itemPkt}</span>
                        <span className="itemList-km">{item.price}</span>
                        <a href="#" className="prdtDtl">Product Detail</a>
                        </li>
                    ))    
                }
            </ul>
         </div>
      );
   }
}
export default ItemList;