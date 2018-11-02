import React, { Component } from 'react';
import './login.css';
import dbRefObject from '../../databaseDB';
import commonObj from '../../commonServices';
import * as firebase from "firebase";
import Loader from 'react-loader-spinner';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //email:"vishal.jain@newgen.co.in",
          //paswrd:"12345678",
          email:"",
          paswrd:"",
          spinner: false
        }
        this.loginSubmit = this.loginSubmit.bind(this);
        this.loginEmailChange = this.loginEmailChange.bind(this);
        this.loginPassChange = this.loginPassChange.bind(this);
    }

    loginSubmit(event) {
        this.setState({spinner:true});
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.paswrd).then(function(succ){
            if(succ.user.uid!=''){
                this.setState({loginUser:true});
                this.setState({spinner:false});
                this.props.updateLogin(true)
            }
        }.bind(this)).catch(function(error) {
            this.setState({loginUser:false});
            this.setState({spinner:false});
            if(error.code=='auth/user-not-found'){
                alert('User does not exist.');
            } else if(error.code=='auth/wrong-password') { 
                alert('Password is incorrect.');
            } else if(error.code=='auth/invalid-email') {
                alert('Please enter a valid email.');
            } 
        }.bind(this));
    }
      
    loginEmailChange(event) {
        this.setState({email:event.target.value});
    }
    
    loginPassChange(event) {
        this.setState({paswrd:event.target.value});
    }

  render() {
    if (!this.state.spinner){
        return(
          <div className="App"> 
            <div>
                <div className="modal-body itemPrnt loginBx">
                    <div className="form-group lgnBxAlgn">
                        <input type="text" value={this.state.email} onChange={this.loginEmailChange} placeholder="Email Address" className="form-control emalinp" id="usr"/>
                    </div>
                    <div className="form-group lgnBxAlgn">
                        <input type="password" value={this.state.paswrd} onChange={this.loginPassChange} placeholder="Password" className="form-control emalinp" id="pwd"/>
                    </div>
                    <div className="lgnBtn">
                        <button className="btn btn-outline-success lgnBtnMn" onClick={this.loginSubmit}>Submit</button>
                    </div>
                </div>
            </div>
          </div>
        );
    } else {
        return(
          <div className="App">
            <div className="loadStl">
              <Loader type="TailSpin" color="#00BFFF" height="100" width="100"/>  
            </div>
          </div>
         );
    }
  }
}

export default Login;
