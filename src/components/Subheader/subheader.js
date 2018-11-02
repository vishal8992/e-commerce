import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './subheader.css';
import Home from '../Home/home';
import Userdata from '../Userdata/userdata';
import Dashboard from '../Dashboard/dashboard';
import OrderList from '../OrderList/orderlist';
//import Portfolio from '../Portfolio/portfolio';
import sellerList from '../SellerList/sellerList';
import ItemList from '../ItemList/itemlist';

class Subheader extends Component {
  constructor(props) {
      super(props);
      this.state =  {data:[{"subHdrName":'Dashboard',"IsActive":true},{"subHdrName":'Order List',"IsActive":false},{"subHdrName":'Item List',"IsActive":false},{"subHdrName":'Customer List',"IsActive":false},{"subHdrName":'Seller List',"IsActive":false}]}; 
      this.tabContent = this.tabContent.bind(this);
  }

  tabContent(objVal) {
        if(objVal==="Dashboard") {
            let subHdrData = this.state.data;
            for(var i=0;i<subHdrData.length;i++){
                subHdrData[i].IsActive = false;
            }
            subHdrData[0].IsActive = true;
            this.setState({data:subHdrData});
            <Route exact path='/Home' component={Home} />
        } else if(objVal==="Order List") {
            let subHdrData = this.state.data;
            for(i=0;i<subHdrData.length;i++){
                subHdrData[i].IsActive = false;
            }
            subHdrData[1].IsActive = true;
            this.setState({data:subHdrData});
            <Route exact path='/Userdata' component={Userdata} />
        }  else if(objVal==="Item List") {
            let subHdrData = this.state.data;
            for(i=0;i<subHdrData.length;i++){
                subHdrData[i].IsActive = false;
            }
            subHdrData[2].IsActive = true;
            this.setState({data:subHdrData});
        } else if(objVal==="Customer List") {
            let subHdrData = this.state.data;
            for(i=0;i<subHdrData.length;i++){
                subHdrData[i].IsActive = false;
            }
            subHdrData[3].IsActive = true;
            this.setState({data:subHdrData});
        } else if(objVal==="Seller List") {
            let subHdrData = this.state.data;
            for(i=0;i<subHdrData.length;i++){
                subHdrData[i].IsActive = false;
            }
            subHdrData[4].IsActive = true;
            this.setState({data:subHdrData});
        }
    }

  render() {
    return (
        <Router>
            <div>
                <div className="sub-header">
                    <div style={{float:'right',marginTop:10,marginRight:25}}>{
                        this.state.data.map((item) => (
                            <div className={item.IsActive ? 'active' : ''} onClick={() => this.tabContent(item.subHdrName)} style={{display:'inline-block',textAlign:'center',marginRight:20}}><span className="cmn-title"><Link className={item.IsActive ? 'sbhdrClrcd' : 'sbhdrTbsCnt'} to={'/'+item.subHdrName}>{item.subHdrName}</Link></span></div>
                        ))    
                    }
                    </div>
                </div>
                <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route  path='/Customer List' component={Userdata} />
                  <Route  path='/Dashboard' component={Dashboard} />
                  <Route  path='/Order List' component={OrderList} />
                  <Route  path='/Seller List' component={sellerList} />
                  <Route  path='/Item List' component={ItemList} />
               </Switch>
            </div>
        </Router>
    );
  }
}
export default Subheader;
