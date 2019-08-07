import ListTickets from './ListTickets'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeCurrency, changeSortDirection } from '../redux/dataAction';
import { setFilter, loadTicketsAndAplyFilter } from '../redux/processingTicketsData'

class TicketsContainerAPI extends Component {
    constructor(props) {
        super(props);
        let { changeCurrency, setFilter, changeSortDirection } = this.props;
        this.changeCurrency = changeCurrency.bind(this);
        this.setFilter = setFilter.bind(this);
        this.changeSortDirection = changeSortDirection.bind(this);
    }

    changeCurrency() { }
    setFilter() { }
    changeSortDirection() { }

    componentDidMount() { this.props.loadTicketsAndAplyFilter() }

    render() {
        let { TicketsData } = this.props;
        return (<ListTickets ticketsData={TicketsData}
            curValuta={TicketsData.curValuta}
            changeCurrency={this.changeCurrency}
            changeSortDirection={this.changeSortDirection}
            setFilter={this.setFilter}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        TicketsData: state.ticketData
    }
}

let TicketsContainer = connect(
    mapStateToProps,
    {
        changeSortDirection, changeCurrency,
        loadTicketsAndAplyFilter, setFilter
    }
)(TicketsContainerAPI);

export default TicketsContainer;