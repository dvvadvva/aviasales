import React, { Component } from 'react'
import s from './sort.module.css'
import {SORT_BY_FASTEN, SORT_BY_LOW_COST} from '../../data/const'

class SortTickets extends Component {
    constructor(props){
        super(props);
        this.ChoiseSortByCost    = this.ChoiseSortByCost.bind(this);
        this.ChoiseSortByDuration    = this.ChoiseSortByDuration.bind(this);
    }
    ChoiseSortByCost(){
        this.props.changeSortDirection(SORT_BY_LOW_COST);        
    }

    ChoiseSortByDuration(){
        this.props.changeSortDirection(SORT_BY_FASTEN);
    }
    
    render(){
        return (
            <div>
                <button onClick={this.ChoiseSortByCost} className={this.props.sortType===SORT_BY_FASTEN ? s.btn: s.btn_selected}>Самый дешевый</button>
                <button onClick={this.ChoiseSortByDuration} className={this.props.sortType===SORT_BY_FASTEN ? s.btn_selected: s.btn}>Самый быстрый</button>
            </div>)
    }
}

export default SortTickets