import React, {Component} from 'react'
import s from './tickets.module.css'
import logo from '../aset/img/logo.png';
import Ticket from './ticket/oneTicket'
import Filter from './filter/filter'
import Sort from './sort/sort'

const showOneTiket = (ticket, indexOfTicket, curency) => {
    let cost = Math.round(100 * ticket.price * curency.kurs) / 100;
    return <Ticket key={indexOfTicket} ticket={ticket} segmentTo={ticket.segments[0]} segmentBack={ticket.segments[1]} curency={curency} cost={cost}/>
}

class ListTickets extends Component{

    curency(){
        let curValuta = 'Р';
        let kurs = 1;
        switch (this.props.curValuta) {
            case 2: {
                curValuta = '$';
                kurs = 1 / this.props.ticketsData.rub_2_usd;
                break;
            }
            case 3: {
                curValuta = 'EUR';
                kurs = 1 / this.props.ticketsData.rub_2_eur;
                break;
            }
            default: {
            }
        }

        return { curValuta: curValuta, kurs: kurs }
    }

    render(){
        //console.log(11);
        //console.log(this.props.ticketsData.sortType);
    return <div className={s.App}>
        <div className={s.header}>
            <img src={logo} alt="logo" />
        </div>
        <div className={s.filter}>
            <Filter ticketsData={this.props.ticketsData} curValuta={this.props.curValuta} changeCurrency={this.props.changeCurrency} setFilter={this.props.setFilter}/>
        </div>
        <div>
            <Sort changeSortDirection={this.props.changeSortDirection} sortType={this.props.ticketsData.sortType}/>
        </div>
        <div className={s.tickets}>
            {this.props.ticketsData.listTickets.map((ticket) => (showOneTiket(ticket, this.props.ticketsData.listTickets.indexOf(ticket), this.curency())))}
        </div>
    </div>
    }
}

export default ListTickets;