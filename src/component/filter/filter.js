import React, { Component } from 'react'
import s from './filter.module.css'
import { SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR } from '../../redux/const'

class Filter extends Component {

    press_rub = () => { this.props.changeCurrency(1); }
    press_usd = () => { this.props.changeCurrency(2); }
    press_eur = () => { this.props.changeCurrency(3); }
    setChkAll = () => { this.props.onChangeFilterValue(SET_CHK_ALL) }
    setChkWithOutTr = () => { this.props.onChangeFilterValue(SET_CHK_WITH_OUT_TR) }
    setChk1Tr = () => { this.props.onChangeFilterValue(SET_CHK_1TR) }
    setChk2Tr = () => { this.props.onChangeFilterValue(SET_CHK_2TR) }
    setChk3Tr = () => { this.props.onChangeFilterValue(SET_CHK_3TR) }

    render() {
        let { curValuta, condition } = this.props;
        return (
            <div className={s.filter}>
                <div>Валюта</div>
                <div>
                    <button onClick={this.press_rub} className={curValuta === 1 ? s.btn_selected : ''}>RUB</button>
                    <button onClick={this.press_usd} className={curValuta === 2 ? s.btn_selected : ''}>USD</button>
                    <button onClick={this.press_eur} className={curValuta === 3 ? s.btn_selected : ''}>EUR</button>
                </div>
                <div className={s.peresad}>
                    <div>
                        <input type='checkbox' checked={condition.chk_all} onChange={this.setChkAll} />Все
                    </div>
                    <div>
                        <input type='checkbox' checked={condition.chk_withOutTr} onChange={this.setChkWithOutTr} />Без пересадки
                    </div>
                    <div>
                        <input type='checkbox' checked={condition.chk_1tr} onChange={this.setChk1Tr} />1 пересадки
                    </div>
                    <div>
                        <input type='checkbox' checked={condition.chk_2tr} onChange={this.setChk2Tr} />2 пересадки
                    </div>
                    <div>
                        <input type='checkbox' checked={condition.chk_3tr} onChange={this.setChk3Tr} />3 пересадки
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;