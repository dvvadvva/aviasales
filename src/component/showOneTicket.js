import React, { Component } from 'react'
import Ticket from './ticket/oneTicket'

class ShowOneTicket extends Component {
    render() {
        let { ticket, curency } = this.props;
        let cost = Math.round(100 * ticket.price * curency.kurs) / 100;
        return <Ticket
            ticket={ticket}
            segmentTo={ticket.segments[0]}
            segmentBack={ticket.segments[1]}
            curency={curency} cost={cost} />
    }
}

export default ShowOneTicket;