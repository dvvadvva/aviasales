import React, { Component } from 'react'
import s from './oneTicket.module.css'
import ap from '../../aset/img/ArrowPlane.png'

class Ticket extends Component {
    render() {
        //console.log(this.props.ticket);
        //console.log(this.props.ticket.carrier);        
        return (
            <div className={s.container}>
                <div className={s.cost}>
                    <div>{this.props.ticket.carrier}</div>
                    <button className={s.btn}>
                        <div>Купить</div>
                        <div>за {this.props.cost} {this.props.curency.curValuta}</div>
                    </button>
                </div>
                <div className={s.p1}>
                    <div className={s.time}>{this.props.ticket.departure_time}</div>
                    <span>{this.props.ticket.origin}, {this.props.ticket.origin_name}</span>
                    <div>{this.props.ticket.departure_date}</div>
                </div>
                <div className={s.p2}>
                    <div>{this.props.ticket.stops === 0 ? '' : this.props.ticket.stops + ' пересадки'} </div>
                    <img src={ap} alt='' />
                </div>
                <div className={s.p3}>
                    <div className={s.time}>{this.props.ticket.arrival_time}</div>
                    <span>{this.props.ticket.destination}, {this.props.ticket.destination_name}</span>
                    <div>{this.props.ticket.arrival_date} </div>
                </div>
            </div>
        )
    }
}

export default Ticket 