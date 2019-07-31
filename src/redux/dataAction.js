import {CHG_VALUTA, SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR, LOAD_TICKETS} from '../data/const'
export const changeCurrency = (num) => ({ type: CHG_VALUTA, num: num })
export const setChkAll = () => ({ type: SET_CHK_ALL })
export const setChkWithOutTr = () => ({ type: SET_CHK_WITH_OUT_TR })
export const setChk1Tr = () => ({ type: SET_CHK_1TR })
export const setChk2Tr = () => ({ type: SET_CHK_2TR })
export const setChk3Tr = () => ({ type: SET_CHK_3TR })
export const loadTickets = (tikets) => ({ type: LOAD_TICKETS, tikets: tikets })
