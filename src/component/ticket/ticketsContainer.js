import ListTickets from './tickets.js'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeCurrency, getTickets, setFilter } from '../../redux/ticketReducer';

class TicketsContainerAPI extends Component {
    constructor(props){
        super(props);
        console.log(this);
        this.changeCurrency     = this.props.changeCurrency.bind(this);
        this.setFilter          = this.props.setFilter.bind(this);
    }

    changeCurrency(){}
    
    setFilter(){}

    componentDidMount() {
        this.props.getTickets();
    }

    render() {
        return (<ListTickets ticketsData={this.props.TicketsData}
            curValuta={this.props.TicketsData.curValuta}
            changeCurrency={this.changeCurrency}
            setFilter={this.setFilter}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        TicketsData: state.ticketData
    }
}

let TicketsContainer = connect(mapStateToProps, { changeCurrency, getTickets, setFilter })(TicketsContainerAPI);

export default TicketsContainer;