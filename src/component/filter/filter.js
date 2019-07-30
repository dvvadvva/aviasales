import React, { Component } from 'react'
import s from './filter.module.css'
import { SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR } from '../../data/const'

class Filter extends Component {

    press_rub = () => { this.props.changeCurrency(1); }
    press_usd = () => { this.props.changeCurrency(2); }
    press_eur = () => { this.props.changeCurrency(3); }
    setChkAll = () => { this.props.setFilter(SET_CHK_ALL) }
    setChkWithOutTr = () => { this.props.setFilter(SET_CHK_WITH_OUT_TR) }
    setChk1Tr = () => { this.props.setFilter(SET_CHK_1TR) }
    setChk2Tr = () => { this.props.setFilter(SET_CHK_2TR) }
    setChk3Tr = () => { this.props.setFilter(SET_CHK_3TR) }

    render() {
        return (
            <div>
                <div>Валюта</div>
                <div>
                    <button onClick={this.press_rub} className={this.props.curValuta === 1 ? s.btn_selected : ''}>RUB</button>
                    <button onClick={this.press_usd} className={this.props.curValuta === 2 ? s.btn_selected : ''}>USD</button>
                    <button onClick={this.press_eur} className={this.props.curValuta === 3 ? s.btn_selected : ''}>EUR</button>
                </div>
                <div className={s.peresad}>
                    <div><input type='checkbox' checked={this.props.ticketsData.chk_all} onChange={this.setChkAll} /><label>Все</label></div>
                    <div><input type='checkbox' checked={this.props.ticketsData.chk_withOutTr} onChange={this.setChkWithOutTr} /><label>Без пересадки</label></div>
                    <div><input type='checkbox' checked={this.props.ticketsData.chk_1tr} onChange={this.setChk1Tr} /><label>1 пересадки</label></div>
                    <div><input type='checkbox' checked={this.props.ticketsData.chk_2tr} onChange={this.setChk2Tr} /><label>2 пересадки</label></div>
                    <div><input type='checkbox' checked={this.props.ticketsData.chk_3tr} onChange={this.setChk3Tr} /><label>3 пересадки</label></div>
                </div>

            </div>
        )
    }
}

export default Filter;