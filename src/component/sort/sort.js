import React, { Component } from 'react'
import s from './sort.module.css'
import { SORT_BY_FASTEN, SORT_BY_LOW_COST } from '../../redux/const'

class SortTickets extends Component {
    constructor(props) {
        super(props);
        this.choiseSortByCost = this.choiseSortByCost.bind(this);
        this.choiseSortByDuration = this.choiseSortByDuration.bind(this);
    }
    choiseSortByCost() {
        this.props.changeSortDirection(SORT_BY_LOW_COST);
    }

    choiseSortByDuration() {
        this.props.changeSortDirection(SORT_BY_FASTEN);
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.choiseSortByCost}
                    className={this.props.sortType === SORT_BY_FASTEN ? s.btn : s.btn_selected}>Самый дешевый
                </button>
                <button
                    onClick={this.choiseSortByDuration}
                    className={this.props.sortType === SORT_BY_FASTEN ? s.btn_selected : s.btn}>Самый быстрый
                </button>
            </div>)
    }
}

export default SortTickets