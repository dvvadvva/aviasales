import React from 'react'
import s from './tickets.module.css'
import logo from '../aset/img/logo.png';
import Ticket from './ticket/oneTicket'
import Filter from './filter/filter'

const showOneTiket = (ticket, indexOfTicket, curency) => {
    let cost = Math.round(100 * ticket.price * curency.kurs) / 100;
    return <Ticket key={indexOfTicket} ticket={ticket} curency={curency} cost={cost}/>
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

    return <div className={s.App}>
        <div className={s.header}>
            <img src={logo} alt="logo" />
        </div>
        <div className={s.filter}>
            <Filter ticketsData={props.ticketsData} curValuta={props.curValuta} changeCurrency={props.changeCurrency} setFilter={props.setFilter}/>
        </div>
        <div className={s.tickets}>
            {props.ticketsData.listTickets.map((ticket) => (showOneTiket(ticket, props.ticketsData.listTickets.indexOf(ticket), curency())))}
        </div>
    </div>
}

export default ListTickets;