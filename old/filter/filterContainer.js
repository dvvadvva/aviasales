/*import Filter from './filterComponent'
import React, { Component } from 'react'
import {connect} from 'react-redux';
import {changeCurrency} from '../ticket/ticketsAction'

class FilterContainerAPI extends Component {
    render() {
        return (<Filter curValuta={this.props.TicketsData.curValuta} changeCurrency={this.props.changeCurrency.bind(this)}/>)
    }
}

const mapStateToProps = (state)=>{
    return {
        TicketsData:   state.ticketData
    }
}
let FilterContainer    = connect(mapStateToProps, 
    {changeCurrency}
    )(FilterContainerAPI);

export default FilterContainer;
*/