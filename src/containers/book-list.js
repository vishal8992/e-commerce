import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBookAction } from '../actions/select-book-action'
import { bindActionCreators } from 'redux';
import BookList  from '../components/bookList'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBookAction }, dispatch)
}

function mapStateToProps(state) {
    return { bookList: state.books }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)