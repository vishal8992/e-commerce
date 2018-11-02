import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateLoginStatus } from '../actions/select-book-action'
import { bindActionCreators } from 'redux';
import Header  from '../components/Header/header'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateLogout: updateLoginStatus }, dispatch)
}

function mapStateToProps(state) {
    state = {}
    return state 
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)