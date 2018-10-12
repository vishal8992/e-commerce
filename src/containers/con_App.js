import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { updateLoginStatus } from '../actions/select-book-action'
// import { bindActionCreators } from 'redux';
import App  from '../App'

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ updateLogin: updateLoginStatus }, dispatch)
// }

function mapStateToProps(state) {
    return { loginUser: state.loginUser }
}

export default connect(mapStateToProps)(App)