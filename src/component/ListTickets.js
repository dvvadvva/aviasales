import React, { Component } from 'react'
import s from './ListTickets.module.css'
import logo from '../aset/img/logo.png';
import loading from '../aset/img/loading.gif';
import ShowOneTicket from './showOneTicket'
import Filter from './filter/filter'
import SortTickets from './sort/sort'

class ListTickets extends Component {

    curency() {
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

    render() {
        let {ticketsData, curValuta, changeCurrency, setFilter, changeSortDirection}=this.props;
        return <div className={s.App}>
            <div className={s.header}>
                <img src={logo} alt="logo" />
                {(ticketsData.isFetching ? <img src={loading} alt="is load data" /> : null)}
            </div>
            <div className={s.filter}>
                <Filter
                    condition={ticketsData.condition}
                    curValuta={curValuta}
                    changeCurrency={changeCurrency}
                    setFilter={setFilter} />
            </div>
            <div>
                <SortTickets
                    changeSortDirection={changeSortDirection}
                    sortType={ticketsData.sortType} />
            </div>
            <div className={s.tickets}>
                {
                    ticketsData.listTickets.map((ticket) => (
                        <ShowOneTicket
                            key={ticketsData.listTickets.indexOf(ticket)}
                            ticket={ticket}
                            curency={this.curency()} />
                    ))
                }
            </div>
        </div>
    }
}

export default ListTickets;