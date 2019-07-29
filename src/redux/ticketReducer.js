import { CHG_VALUTA, LOAD_TICKETS, SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR } from '../data/const'
import serverAPI from '../api/dataAPI'

const initialState = {
    curValuta: 1,
    chk_all: true,
    chk_withOutTr: false,
    chk_1tr: false,
    chk_2tr: false,
    chk_3tr: false,
    rub_2_usd: 60,
    rub_2_eur: 70,
    listTickets: []
}

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
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

const sortTickets = (tik1, tik2) => {
    if (tik1.price > tik2.price) { return 1 }
    else { return -1 }
}

export const getTickets = () => (dispatch) => {
    serverAPI.getTickets().then((response) => { return response.json() })
        .then((data) => {
            data.tickets.sort(sortTickets);
            dispatch(loadTickets(data.tickets));
        })
}

export const setFilter = (action) => (dispatch, getState) => {
    switch (action) {
        case SET_CHK_ALL: {
            dispatch(setChkAll());
            break
        }
        case SET_CHK_WITH_OUT_TR: {
            dispatch(setChkWithOutTr());
            break
        }
        case SET_CHK_1TR: {
            dispatch(setChk1Tr());
            break
        }
        case SET_CHK_2TR: {
            dispatch(setChk2Tr());
            break
        }
        case SET_CHK_3TR: {
            dispatch(setChk3Tr());
            break
        }
        default: { }
    }

    let f = getState().ticketData;
    
    serverAPI.getTickets().then((response) => { return response.json() })
    .then((data) => {
        
        data.tickets.sort(sortTickets);
        let ar = data.tickets.filter((el) => {
            if (f.chk_all === true) { return true }
            else if (f.chk_withOutTr === true && el.stops === 0) { return true }
            else if (f.chk_1tr === true && el.stops === 1) { return true }
            else if (f.chk_2tr === true && el.stops === 2) { return true }
            else if (f.chk_3tr === true && el.stops === 3) { return true }
            else { return false }
        })
        dispatch(loadTickets(ar));


    })

}

export const changeCurrency = (num) => ({ type: CHG_VALUTA, num: num })
export const setChkAll = () => ({ type: SET_CHK_ALL })
export const setChkWithOutTr = () => ({ type: SET_CHK_WITH_OUT_TR })
export const setChk1Tr = () => ({ type: SET_CHK_1TR })
export const setChk2Tr = () => ({ type: SET_CHK_2TR })
export const setChk3Tr = () => ({ type: SET_CHK_3TR })
export const loadTickets = (tikets) => ({ type: LOAD_TICKETS, tikets: tikets })

export default ticketReducer