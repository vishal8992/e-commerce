import React, { Component } from 'react';
import './subheader.css';

class Subheader extends Component {
  constructor(props) {
      super(props);
      this.state =  {data:[{"subHdrName":'Dashboard',"IsActive":true},{"subHdrName":'Order List',"IsActive":false},{"subHdrName":'Item List',"IsActive":false},{"subHdrName":'Portfolio',"IsActive":false},{"subHdrName":'Contact US',"IsActive":false}]}; 
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
        } else if(objVal==="Order List") {
            let subHdrData = this.state.data;
            for(i=0;i<subHdrData.length;i++){
                subHdrData[i].IsActive = false;
            }
            subHdrData[1].IsActive = true;
            this.setState({data:subHdrData});
        }  else if(objVal==="Item List") {
            let subHdrData = this.state.data;
            for(i=0;i<subHdrData.length;i++){
                subHdrData[i].IsActive = false;
            }
            subHdrData[2].IsActive = true;
            this.setState({data:subHdrData});
        } else if(objVal==="Portfolio") {
            let subHdrData = this.state.data;
            for(i=0;i<subHdrData.length;i++){
                subHdrData[i].IsActive = false;
            }
            subHdrData[3].IsActive = true;
            this.setState({data:subHdrData});
        } else if(objVal==="Contact US") {
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
        <div className="sub-header">
            <div style={{float:'right',marginTop:10,marginRight:25}}>{
                this.state.data.map((item) => (
                    <div className={item.IsActive ? 'active' : ''} onClick={() => this.tabContent(item.subHdrName)} style={{display:'inline-block',textAlign:'center',marginRight:20}}><span className="cmn-title">{item.subHdrName}</span></div>
                ))    
            }
            </div>
        </div>
    );
  }
}
export default Subheader;
