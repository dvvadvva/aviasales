import ListTickets from './ListTickets'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeCurrency, onChangeSortDirection } from '../redux/dataAction';
import { setFilter, loadTicketsAndAplyFilter } from '../redux/processingTicketsData'

class TicketsContainerAPI extends Component {
    constructor(props) {
        super(props);
        let { changeCurrency, setFilter, onChangeSortDirection } = this.props;
        this.changeCurrency = changeCurrency.bind(this);
        this.setFilter = setFilter.bind(this);
        this.onChangeSortDirection = onChangeSortDirection.bind(this);
    }

    changeCurrency() { }
    setFilter() { }
    onChangeSortDirection() { }

    componentDidMount() { 
        this.props.loadTicketsAndAplyFilter();
    }

    render() {
        let { TicketsData, sortData } = this.props;
        return (<ListTickets 
            ticketsData={TicketsData}
            curValuta={TicketsData.curValuta}
            sortType= {sortData.sortType}
            
            changeCurrency={this.changeCurrency}
            onChangeSortDirection={this.onChangeSortDirection}
            setFilter={this.setFilter}    
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        TicketsData: state.ticketData,
        sortData: state.sortData
    }
}

let TicketsContainer = connect(
    mapStateToProps,
    {
        changeCurrency,
        loadTicketsAndAplyFilter, setFilter, onChangeSortDirection
    }
)(TicketsContainerAPI);

export default TicketsContainer;