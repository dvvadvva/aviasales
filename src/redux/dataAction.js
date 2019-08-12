import { CHG_VALUTA, SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR, LOAD_TICKETS, CLEAR_TICKETS, SORT_BY_LOW_COST } from './const'
import { SET_FETCHING, ADD_TICKETS, SET_DIRECTION_SORT, SORT_TICKETS } from './const'

// sort action

export const setSortDirection = (direction) => ({ type: SET_DIRECTION_SORT, direction: direction })

// filter action

export const setChkAll = () => ({ type: SET_CHK_ALL })
export const setChkWithOutTr = () => ({ type: SET_CHK_WITH_OUT_TR })
export const setChk1Tr = () => ({ type: SET_CHK_1TR })
export const setChk2Tr = () => ({ type: SET_CHK_2TR })
export const setChk3Tr = () => ({ type: SET_CHK_3TR })

// tickets action

export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching: isFetching })
export const clearTicketsArray = () => ({ type: CLEAR_TICKETS })
export const addTicketsToArray = (tickets) => ({ type: ADD_TICKETS, tickets: tickets })
export const changeCurrency = (num) => ({ type: CHG_VALUTA, num: num })
export const sortListTickets = (direction) => ({ type: SORT_TICKETS, direction: direction })

// thunk

export const onChangeCurrency = (num) => (dispatch) => {
    dispatch(changeCurrency(num));
}

export const onChangeSortDirection = (direction = SORT_BY_LOW_COST) => (dispatch) => {
    dispatch(setSortDirection(direction));
    dispatch(sortListTickets(direction));
}
