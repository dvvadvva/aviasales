import { CHG_VALUTA, LOAD_TICKETS, SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR, CLEAR_TICKETS } from './const'
import { ADD_TICKETS, SORT_BY_LOW_COST, SET_FETCHING, SORT_TICKETS } from './const'
import { sortTickets, sortTicketsByDuration } from './processingTicketsData'

const initialState = {
    curValuta: 1,
    condition: {
        chk_all: true,
        chk_withOutTr: false,
        chk_1tr: false,
        chk_2tr: false,
        chk_3tr: false
    },
    rub_2_usd: 60,
    rub_2_eur: 70,
    listTickets: [],
    isFetching: false
}

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case SORT_TICKETS: {
            return {
                ...state,
                listTickets: state.listTickets.sort((action.direction===SORT_BY_LOW_COST ? sortTickets : sortTicketsByDuration))}        }
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
        case SET_CHK_ALL: {
            return {
                ...state,
                condition: {
                    ...state.condition,
                    chk_all: !state.condition.chk_all,
                    chk_withOutTr: (!state.condition.chk_all ? false : state.condition.chk_withOutTr),
                    chk_1tr: (!state.condition.chk_all ? false : state.condition.chk_1tr),
                    chk_2tr: (!state.condition.chk_all ? false : state.condition.chk_2tr),
                    chk_3tr: (!state.condition.chk_all ? false : state.condition.chk_3tr)
                }
            }
        }
        case SET_CHK_WITH_OUT_TR: {
            return { ...state, condition: { ...state.condition, chk_all: false, chk_withOutTr: (!state.condition.chk_withOutTr) } }
        }
        case SET_CHK_1TR: {
            return { ...state, condition: { ...state.condition, chk_all: false, chk_1tr: (!state.condition.chk_1tr) } }
        }
        case SET_CHK_2TR: {
            return { ...state, condition: { ...state.condition, chk_all: false, chk_2tr: (!state.condition.chk_2tr) } }
        }
        case SET_CHK_3TR: {
            return { ...state, condition: { ...state.condition, chk_all: false, chk_3tr: (!state.condition.chk_3tr) } }
        }
        default: { return state }
    }
}

export default ticketReducer