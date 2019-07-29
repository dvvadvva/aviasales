import React from 'react'
import s from './filter.module.css'

const Filter = (props) => {
    
    let press_rub = () => {
        props.changeCurrency(1);
    }

    let press_usd = () => {
        props.changeCurrency(2);
    }

    let press_eur = () => {
        props.changeCurrency(3);
    }

    return (
        <div className=''>
            <div>
                <div>Валюта</div>
                <div>
                    <button onClick={press_rub} className={props.curValuta === 1 ? s.btn_selected : ''}>RUB</button>
                    <button onClick={press_usd} className={props.curValuta === 2 ? s.btn_selected : ''}>USD</button>
                    <button onClick={press_eur} className={props.curValuta === 3 ? s.btn_selected : ''}>EUR</button>
                </div>
            </div>
            <div className={s.peresad}>
                <div><input type='checkbox' /><label>Все</label></div>
                <div><input type='checkbox' /><label>Без пересадки</label></div>
                <div><input type='checkbox' /><label>1 пересадки</label></div>
                <div><input type='checkbox' /><label>2 пересадки</label></div>
                <div><input type='checkbox' /><label>3 пересадки</label></div>
            </div>
        </div>
    )
}

export default Filter;