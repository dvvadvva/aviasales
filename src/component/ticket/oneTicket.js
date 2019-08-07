import React, { Component } from 'react'
import s from './oneTicket.module.css'

class Ticket extends Component {
    render() {
        let { ticket, segmentTo, cost, curency, segmentBack } = this.props;
        return (
            <div className={s.allticket}>
                <div className={s.container}>
                    <div className={s.cost}>{cost} {curency.curValuta}</div>
                    <div></div>
                    <div>
                        <img
                            src={`https://pics.avs.io/al_square/28/28/${ticket.carrier}@2x.png`}
                            alt={ticket.carrier} />
                    </div>

                    <div className={s.bledno}>{segmentTo.origin} - {segmentTo.destination}</div>
                    <div className={s.bledno}>в пути</div>
                    <div className={s.bledno}>{ticket.CountStopsTo} пересадки</div>

                    <div>{segmentTo.timeDeparture}-{segmentTo.timeArrival}</div>
                    <div>{segmentTo.durationHH}: {segmentTo.durationMM}</div>
                    <div>{ticket.listPeresadTo}</div>

                    <div className={s.bledno}>{segmentBack.destination} - {segmentBack.origin}</div>
                    <div className={s.bledno}>в пути</div>
                    <div className={s.bledno}>{ticket.CountStopsBack} пересадки</div>

                    <div>{segmentBack.timeDeparture}-{segmentBack.timeArrival}</div>
                    <div>{segmentBack.durationHH}: {segmentBack.durationMM}</div>
                    <div>{ticket.listPeresadBack}</div>

                </div>
            </div>
        )
    }
}

export default Ticket 