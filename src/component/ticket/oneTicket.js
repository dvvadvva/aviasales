import React, { Component } from 'react'
import s from './oneTicket.module.css'
//import ap from '../../aset/img/ArrowPlane.png'

class Ticket extends Component {
    render() {
        return (
            <div className={s.allticket}>
                <div className={s.container}>
                    <div className={s.cost}>{this.props.cost} {this.props.curency.curValuta}</div>
                    <div></div>
                    <div>
                        <img src={`https://pics.avs.io/al_square/28/28/${this.props.ticket.carrier}@2x.png`} alt={this.props.ticket.carrier} />
                    </div>

                    <div className={s.bledno}>{this.props.segmentTo.origin} - {this.props.segmentTo.destination}</div>
                    <div className={s.bledno}>в пути</div>
                    <div className={s.bledno}>{this.props.ticket.CountStopsTo} пересадки</div>

                    <div>{this.props.segmentTo.timeDeparture}-{this.props.segmentTo.timeArrival}</div>
                    <div>{this.props.segmentTo.durationHH}: {this.props.segmentTo.durationMM}</div>
                    <div>{this.props.ticket.listPeresadTo}</div>

                    <div className={s.bledno}>{this.props.segmentBack.destination} - {this.props.segmentBack.origin}</div>
                    <div className={s.bledno}>в пути</div>
                    <div className={s.bledno}>{this.props.ticket.CountStopsBack} пересадки</div>

                    <div>{this.props.segmentBack.timeDeparture}-{this.props.segmentBack.timeArrival}</div>
                    <div>{this.props.segmentBack.durationHH}: {this.props.segmentBack.durationMM}</div>
                    <div>{this.props.ticket.listPeresadBack}</div>
        
                </div>
            </div>
        )
    }
}

export default Ticket 