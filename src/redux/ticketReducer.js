import { CHG_VALUTA, LOAD_TICKETS, CLEAR_TICKETS } from './const'
import { ADD_TICKETS, SORT_BY_LOW_COST, SET_FETCHING, SORT_TICKETS } from './const'
import { sortTickets, sortTicketsByDuration } from './processingTicketsData'

const initialState = {
    curValuta: 1,
    rub_2_usd: 60,
    rub_2_eur: 70,
    listTickets: [],
    isFetching: false
}

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SORT_TICKETS: {
            return {
                ...state,
                listTickets: state.listTickets.sort((action.direction === SORT_BY_LOW_COST ? sortTickets : sortTicketsByDuration))
            }
        }
        case CLEAR_TICKETS: {
            return { ...state, listTickets: [] }
        }
        case ADD_TICKETS: {
            let stateCopy = {};
            if (state.sortType === SORT_BY_LOW_COST) {
                stateCopy = { ...state, listTickets: state.listTickets.concat(action.tickets).sort(sortTickets) };
            } else {
                stateCopy = { ...state, listTickets: state.listTickets.concat(action.tickets).sort(sortTicketsByDuration) };
            }
            return stateCopy
        }
        case LOAD_TICKETS: {
            return { ...state, listTickets: action.tikets }
        }
        case CHG_VALUTA: {
            return { ...state, curValuta: action.num }
        }
        default: { return state }
    }
}

export default ticketReducer