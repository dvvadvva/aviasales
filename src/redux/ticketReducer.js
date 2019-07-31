import { CHG_VALUTA, LOAD_TICKETS, SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR, CLEAR_TICKETS, ADD_TICKETS, SORT_BY_LOW_COST, SORT_BY_FASTEN,  SET_DIRECTION_SORT} from '../data/const'

const initialState = {
    curValuta: 1,
    chk_all: true,
    chk_withOutTr: false,
    chk_1tr: false,
    chk_2tr: false,
    chk_3tr: false,
    rub_2_usd: 60,
    rub_2_eur: 70,
    sortType: SORT_BY_LOW_COST,
    listTickets: []
}

const ticketReducer = (state = initialState, action) => {
    //console.log(action);
    switch (action.type) {
        case SET_DIRECTION_SORT: {
            return { ...state, sortType: (state.sortType===SORT_BY_LOW_COST ? SORT_BY_FASTEN : SORT_BY_LOW_COST)}
        }
        case CLEAR_TICKETS: {
            return { ...state, listTickets: []}
        }
        case ADD_TICKETS: {
            return { ...state, listTickets: state.listTickets.concat(action.tickets)}
        }
        case LOAD_TICKETS: {
            return { ...state, listTickets: action.tikets }
        }
        case CHG_VALUTA: {
            return { ...state, curValuta: action.num }
        }
        case SET_CHK_ALL: {
            return {
                ...state, chk_all: !state.chk_all,
                chk_withOutTr: (!state.chk_all ? false : state.chk_withOutTr),
                chk_1tr: (!state.chk_all ? false : state.chk_1tr),
                chk_2tr: (!state.chk_all ? false : state.chk_2tr),
                chk_3tr: (!state.chk_all ? false : state.chk_3tr)
            }
        }
        case SET_CHK_WITH_OUT_TR: {
            return { ...state, chk_all: false, chk_withOutTr: (!state.chk_withOutTr) }
        }
        case SET_CHK_1TR: {
            return { ...state, chk_all: false, chk_1tr: (!state.chk_1tr) }
        }
        case SET_CHK_2TR: {
            return { ...state, chk_all: false, chk_2tr: (!state.chk_2tr) }
        }
        case SET_CHK_3TR: {
            return { ...state, chk_all: false, chk_3tr: (!state.chk_3tr) }
        }
        default: { return state }
    }
}

export default ticketReducer