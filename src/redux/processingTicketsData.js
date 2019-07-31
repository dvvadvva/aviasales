import { SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR } from '../data/const'
import { setChkAll, setChkWithOutTr, setChk1Tr, setChk2Tr, setChk3Tr, loadTickets } from './dataAction'
import serverAPI from '../api/dataAPI'

export const sortTickets = (tiketsCurrent, ticketsNext) => {
    if (tiketsCurrent.price > ticketsNext.price) { return 1 }
    else { return -1 }
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

    getTicketsAndAplyFilter(getState().ticketData, dispatch);
}

export const loadTicketsAndAplyFilter = () => (dispatch, getState) => {getTicketsAndAplyFilter(getState().ticketData, dispatch);}

const getTicketsAndAplyFilter = (ticketData, dispatch) => {
    serverAPI.getTickets()
        .then((response) => { return response.json() })
        .then((data) => {
            data.tickets.sort(sortTickets);
            let filteredTickets = data.tickets.filter((tiket) => {
                if (ticketData.chk_all === true) { return true }
                else if (ticketData.chk_withOutTr === true && tiket.stops === 0) { return true }
                else if (ticketData.chk_1tr === true && tiket.stops === 1) { return true }
                else if (ticketData.chk_2tr === true && tiket.stops === 2) { return true }
                else if (ticketData.chk_3tr === true && tiket.stops === 3) { return true }
                else { return false }
            });
            dispatch(loadTickets(filteredTickets));

        })
}
