import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateLoginStatus } from '../actions/select-book-action'
import { bindActionCreators } from 'redux';
import Login  from '../components/Login/login'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateLogin: updateLoginStatus }, dispatch)
}

function mapStateToProps(state) {
    state = {}
    return state 
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)