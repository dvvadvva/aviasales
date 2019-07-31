import {CHG_VALUTA, SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR, LOAD_TICKETS, CLEAR_TICKETS, ADD_TICKETS, SET_DIRECTION_SORT} from '../data/const'

export const changeCurrency = (num) => ({ type: CHG_VALUTA, num: num })
export const setChkAll = () => ({ type: SET_CHK_ALL })
export const setChkWithOutTr = () => ({ type: SET_CHK_WITH_OUT_TR })
export const setChk1Tr = () => ({ type: SET_CHK_1TR })
export const setChk2Tr = () => ({ type: SET_CHK_2TR })
export const setChk3Tr = () => ({ type: SET_CHK_3TR })
export const loadTickets = (tikets) => ({ type: LOAD_TICKETS, tikets: tikets })
export const clearTicketsArray = () => ({ type: CLEAR_TICKETS })
export const addTicketsToArray = (tickets) => ({ type: ADD_TICKETS, tickets: tickets })
export const changeSortDirection = () =>({type: SET_DIRECTION_SORT})

