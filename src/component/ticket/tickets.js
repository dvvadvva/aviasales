import React from 'react'
import s from './tickets.module.css'
import ap from '../../aset/img/ArrowPlane.png'
import logo from '../../aset/img/logo.png';
import {SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR,SET_CHK_2TR,SET_CHK_3TR} from '../../data/const'

const Ticket = (el, id, curency) => {
     return <div key={id} className={s.container}>
        <div className={s.cost}>
            <div>{el.carrier}</div>
            <button className={s.btn}>
                <div>Купить</div>
                <div>за {(Math.round(100*el.price*curency.kurs)/100)} {curency.curValuta}</div>
            </button>
        </div>
        <div className={s.p1}>
            <div className={s.time}>{el.departure_time}</div>
            <span>{el.origin}, {el.origin_name}</span>
            <div>{el.departure_date}</div>
        </div>
        <div className={s.p2}>
            <div>{el.stops === 0 ? '' : el.stops + ' пересадки'} </div>
            <img src={ap} alt='' />
        </div>
        <div className={s.p3}>
            <div className={s.time}>{el.arrival_time}</div>
            <span>{el.destination}, {el.destination_name}</span>
            <div>{el.arrival_date} </div>
        </div>

    </div>
}

const ListTickets = (props) => {

    let curency = () => {
        let curValuta = 'Р';
        let kurs = 1;
        switch (props.curValuta) {
            case 2: {
                curValuta = '$';
                kurs = 1 / props.ticketsData.rub_2_usd;
                break;
            }
            case 3: {
                curValuta = 'EUR';
                kurs = 1 / props.ticketsData.rub_2_eur;
                break;
            }
            default: {
            }
        }

        return { curValuta: curValuta, kurs: kurs }
    }

    let press_rub = () => { props.changeCurrency(1); }
    let press_usd = () => { props.changeCurrency(2); }
    let press_eur = () => { props.changeCurrency(3); }
    let setChkAll = () => { props.setFilter(SET_CHK_ALL)}
    let setChkWithOutTr = () => { props.setFilter(SET_CHK_WITH_OUT_TR)}
    let setChk1Tr = () => { props.setFilter(SET_CHK_1TR)}
    let setChk2Tr = () => { props.setFilter(SET_CHK_2TR)}
    let setChk3Tr = () => { props.setFilter(SET_CHK_3TR)}

    return <div className={s.App}>
        <div className={s.header}>
            <img src={logo} alt="logo" />
        </div>

        <div className={s.filter}>
            <div>
                <div>Валюта</div>
                <div>
                    <button onClick={press_rub} className={props.curValuta === 1 ? s.btn_selected : ''}>RUB</button>
                    <button onClick={press_usd} className={props.curValuta === 2 ? s.btn_selected : ''}>USD</button>
                    <button onClick={press_eur} className={props.curValuta === 3 ? s.btn_selected : ''}>EUR</button>
                </div>
            </div>
            <div className={s.peresad}>
                <div><input type='checkbox' checked={props.ticketsData.chk_all} onChange={setChkAll}/><label>Все</label></div>
                <div><input type='checkbox' checked={props.ticketsData.chk_withOutTr} onChange={setChkWithOutTr}/><label>Без пересадки</label></div>
                <div><input type='checkbox' checked={props.ticketsData.chk_1tr} onChange={setChk1Tr}/><label>1 пересадки</label></div>
                <div><input type='checkbox' checked={props.ticketsData.chk_2tr} onChange={setChk2Tr}/><label>2 пересадки</label></div>
                <div><input type='checkbox' checked={props.ticketsData.chk_3tr} onChange={setChk3Tr}/><label>3 пересадки</label></div>
            </div>
        </div>
        
        <div className={s.tickets}>
            {props.ticketsData.listTickets.map((el) => (Ticket(el, props.ticketsData.listTickets.indexOf(el), curency())))}
        </div>
    </div>
}

export default ListTickets;