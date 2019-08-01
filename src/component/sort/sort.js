import React, { Component } from 'react'
import s from './sort.module.css'
import {SORT_BY_FASTEN, SORT_BY_LOW_COST} from '../../data/const'

class SortTickets extends Component {
    
    ChoiseSortByCost(){
        console.log(this);
        //this.props.changeSortDirection(SORT_BY_LOW_COST);        
    }

    ChoiseSortByDuration(){
        //console.log(this.props);
        //this.props.changeSortDirection(SORT_BY_FASTEN);
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