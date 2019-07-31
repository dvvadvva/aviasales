import ListTickets from './tickets'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeCurrency } from '../redux/dataAction';
import { setFilter, loadTicketsAndAplyFilter} from '../redux/processingTicketsData'

class TicketsContainerAPI extends Component {
    constructor(props){
        super(props);
        this.changeCurrency     = this.props.changeCurrency.bind(this);
        this.setFilter          = this.props.setFilter.bind(this);
    }

    changeCurrency(){}
    
    setFilter(){}

    componentDidMount() {this.props.loadTicketsAndAplyFilter()}

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

let TicketsContainer = connect(mapStateToProps, { changeCurrency, loadTicketsAndAplyFilter, setFilter })(TicketsContainerAPI);

export default TicketsContainer;