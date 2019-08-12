import ListTickets from './ListTickets'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { onChangeFilterValue, changeCurrency, onChangeSortDirection } from '../redux/dataAction';
import { loadTicketsAndAplyFilter } from '../redux/dataAction'

class TicketsContainerAPI extends Component {
    constructor(props) {
        super(props);
        let { changeCurrency, onChangeFilterValue, onChangeSortDirection } = this.props;
        this.changeCurrency = changeCurrency.bind(this);
        this.onChangeFilterValue = onChangeFilterValue.bind(this);
        this.onChangeSortDirection = onChangeSortDirection.bind(this);
    }

    changeCurrency() { }
    onChangeFilterValue() { }
    onChangeSortDirection() { }

    componentDidMount() { 
        this.props.loadTicketsAndAplyFilter();
    }

    render() {
        let { TicketsData, sortData, condition } = this.props;
        return (<ListTickets 
            ticketsData={TicketsData}
            curValuta={TicketsData.curValuta}
            sortType= {sortData.sortType}
            condition={condition}
            
            changeCurrency={this.changeCurrency}
            onChangeSortDirection={this.onChangeSortDirection}
            onChangeFilterValue={this.onChangeFilterValue}    
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        TicketsData: state.ticketData,
        sortData: state.sortData,
        condition: state.condition
    }
}

let TicketsContainer = connect(
    mapStateToProps,
    {
        changeCurrency,
        loadTicketsAndAplyFilter, 
        onChangeFilterValue, 
        onChangeSortDirection
    }
)(TicketsContainerAPI);

export default TicketsContainer;