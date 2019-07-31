import React, { Component } from 'react'
import s from './sort.module.css'
import {SORT_BY_FASTEN} from '../../data/const'

class Sort extends Component {
    render(){
        return (
            <div>
                <button onClick={this.props.changeSortDirection} className={this.props.sortType===SORT_BY_FASTEN ? s.btn: s.btn_selected}>Самый дешевый</button>
                <button onClick={this.props.changeSortDirection} className={this.props.sortType===SORT_BY_FASTEN ? s.btn_selected: s.btn}>Самый быстрый</button>
            </div>)
    }
}

export default Sort