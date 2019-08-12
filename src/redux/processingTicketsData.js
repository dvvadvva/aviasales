import { SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR } from './const'
import { setChkAll, setChkWithOutTr, setChk1Tr, setChk2Tr, setChk3Tr, clearTicketsArray} from './dataAction'
import { addTicketsToArray } from './dataAction'
import { setFetching, onChangeSortDirection } from './dataAction'
import serverAPI from '../api/dataAPI'

export const sortTickets = (tiketsCurrent, ticketsNext) => {
    if (tiketsCurrent.price > ticketsNext.price) { return 1 }
    else { return -1 }
}

export const sortTicketsByDuration = (tiketsCurrent, ticketsNext) => {
    if ((tiketsCurrent.segments[0].duration + tiketsCurrent.segments[1].duration) > (ticketsNext.segments[0].duration + ticketsNext.segments[1].duration)) { return 1 }
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

export const loadTicketsAndAplyFilter = () => (dispatch, getState) => { getTicketsAndAplyFilter(getState().ticketData, dispatch); }

const getTicketsAndAplyFilter = (ticketData, dispatch) => {
    dispatch(setFetching(true));
    dispatch(clearTicketsArray());
    serverAPI.getSearchId()
        .then((response) => { reciveStreamTickets(response.data.searchId, dispatch, ticketData.condition) })
}

const reciveStreamTickets = (searchId, dispatch, condition) => {
    serverAPI.getTiketsApiV2(searchId).then(
        (respons) => {
            if (respons.data === 'Server error') {
                reciveStreamTickets(searchId, dispatch, condition)
            } if (respons.data.stop === false) {
                dispatch(
                    addTicketsToArray(
                        applyFilterToArray(
                            convertDataFromApiv2(respons.data.tickets), condition)));
                // <<Только дя теста, в рабочей версии обратить комментарий

                //reciveStreamTickets(searchId, dispatch, condition)
                dispatch(setFetching(false));
                dispatch(onChangeSortDirection());
                
                // Только дя теста >>
             } if (respons.data.stop === true) {
                dispatch(
                    addTicketsToArray(
                        applyFilterToArray(
                            convertDataFromApiv2(respons.data.tickets), condition)));
                dispatch(setFetching(false));
                dispatch(onChangeSortDirection());
            }
        }
    )
}

const applyFilterToArray = (tickets, condition) => {
    let filteredTickets = tickets.filter((ticket) => {
        if (condition.chk_all === true) {
            return true
        } else if (condition.chk_withOutTr === true && ticket.CountStopsTo === 0 && ticket.CountStopsBack === 0) {
            return true
        } else if (condition.chk_1tr === true && ticket.CountStopsTo === 1 && ticket.CountStopsBack === 1) {
            return true
        } else if (condition.chk_2tr === true && ticket.CountStopsTo === 2 && ticket.CountStopsBack === 2) {
            return true
        } else if (condition.chk_3tr === true && ticket.CountStopsTo === 3 && ticket.CountStopsBack === 3) {
            return true
        }
        return false
    })
    return filteredTickets
}

const convertDataFromApiv2 = (rawData) => {
    let correctlyData = rawData.map((ticket) => {
        let newSegment = [...ticket.segments.map((oneSegment) => {
            let durationHH = Math.trunc(oneSegment.duration / 60);
            let durationMM = oneSegment.duration - 60 * durationHH;
            let dd = new Date(oneSegment.date);
            let hhmm = dd.getHours() * 60 + dd.getMinutes() + oneSegment.duration;
            let hh2 = Math.trunc(hhmm / 60);
            let hh3 = hh2 - 24 * Math.trunc(hh2 / 24);
            let mm2 = hhmm - hh2 * 60;

            return {
                ...oneSegment,
                timeDeparture: `${dd.getHours()}:${dd.getMinutes()}`,
                timeArrival: `${hh3}:${mm2}`,
                durationHH: durationHH,
                durationMM: durationMM
            }
        })];

        let listPeresadTo = '';
        newSegment[0].stops.forEach(element => {
            listPeresadTo = listPeresadTo + (listPeresadTo.length === 0 ? '' : ', ') + element;
        });
        let listPeresadBack = '';
        newSegment[1].stops.forEach(element => {
            listPeresadBack = listPeresadBack + (listPeresadBack.length === 0 ? '' : ', ') + element;
        });

        return ({
            price: ticket.price,
            carrier: ticket.carrier,
            segments: [...newSegment],
            listPeresadTo: listPeresadTo,
            listPeresadBack: listPeresadBack,
            CountStopsTo: ticket.segments[0].stops.length,
            CountStopsBack: ticket.segments[1].stops.length,
        })
    })
    return correctlyData
}