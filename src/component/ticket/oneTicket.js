import React, { Component } from 'react'
import s from './oneTicket.module.css'
//import ap from '../../aset/img/ArrowPlane.png'

class Ticket extends Component {
    render() {
        return (
            <div className={s.allticket}>
                <div className={s.container}>
                    <div className={s.p1}>{this.props.cost} {this.props.curency.curValuta}</div>
                    <div className={s.p2}></div>
                    <div className={s.p3}>{this.props.ticket.carrier}</div>

                    <div className={s.p4}>{this.props.segmentTo.origin} - {this.props.segmentTo.destination}</div>
                    <div className={s.p5}>в пути</div>
                    <div className={s.p6}>{this.props.ticket.CountStopsTo} пересадки</div>

                    <div className={s.p7}>{this.props.segmentTo.timeDeparture}-{this.props.segmentTo.timeArrival}</div>
                    <div className={s.p8}>{this.props.segmentTo.durationHH}: {this.props.segmentTo.durationMM}</div>
                    <div className={s.p9}>{this.props.ticket.listPeresadTo}</div>

                    <div className={s.p10}><div className={s.p4}>{this.props.segmentBack.destination} - {this.props.segmentBack.origin}</div></div>
                    <div className={s.p11}>в пути</div>
                    <div className={s.p12}>{this.props.ticket.CountStopsBack} пересадки</div>

                    <div className={s.p13}>{this.props.segmentBack.timeDeparture}-{this.props.segmentBack.timeArrival}</div>
                    <div className={s.p14}>{this.props.segmentBack.durationHH}: {this.props.segmentBack.durationMM}</div>
                    <div className={s.p15}>{this.props.ticket.listPeresadBack}</div>
                </div>
            </div>
        )
    }
}

export default Ticket 