import React, {Component} from 'react'
import { connect } from 'react-redux'
import BookDetail from '../components/BookDetail'

function mapStateToProps(state) {
    return { activeBook: state.activeBook }
}

export default connect(mapStateToProps)(BookDetail)