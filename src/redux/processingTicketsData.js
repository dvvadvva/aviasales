import { SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR } from '../data/const'
import { setChkAll, setChkWithOutTr, setChk1Tr, setChk2Tr, setChk3Tr, clearTicketsArray, addTicketsToArray } from './dataAction'
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

export const loadTicketsAndAplyFilter = () => (dispatch, getState) => { getTicketsAndAplyFilter(getState().ticketData, dispatch); }

const getTicketsAndAplyFilter = (ticketData, dispatch) => {
    dispatch(clearTicketsArray());
    serverAPI.getSearchId()
        .then((response) => { reciveStreamTickets(response.data.searchId, dispatch) })
}

const reciveStreamTickets = (searchId, dispatch) => {
    serverAPI.getTiketsApiV2(searchId).then(
        (respons) => {
            if (respons.data === 'Server error') {
                reciveStreamTickets(searchId, dispatch)
            } if (respons.data.stop === false) {
                dispatch(
                    addTicketsToArray(
                        ApplyFilterToArray(
                            convertDataFromApiv2(respons.data.tickets))));
                //reciveStreamTickets(searchId, dispatch)
            } if (respons.data.stop === true) {
                dispatch(
                    addTicketsToArray(
                        ApplyFilterToArray(
                            convertDataFromApiv2(respons.data.tickets))));
            }
        }
    )
}
const ApplyFilterToArray = (tickets) => {
    let filteredTickets = tickets.filter((ticket) => {

        return true
    })
    return filteredTickets
}

const convertDataFromApiv2 = (rawData) => {
    let correctlyData = rawData.map((ticket) => {
        //let ticketTo    = ticket.segments[0];
        let newSegment = [...ticket.segments.map((oneSegment) => {
            let durationHH  = Math.trunc(oneSegment.duration/60);
            let durationMM  = oneSegment.duration-60*durationHH;

            let dd  = new Date(oneSegment.date);
            //console.log(dd);
            //console.log('duration='+oneSegment.duration+' hour='+Math.trunc(oneSegment.duration/60)+' min='+(oneSegment.duration-60*Math.trunc(oneSegment.duration/60)));
            let hhmm    = dd.getHours()*60+dd.getMinutes()+oneSegment.duration;
            //console.log(hhmm);
            let hh2    = Math.trunc(hhmm/60);
            //console.log(hh2);
            let hh3    = hh2-24*Math.trunc(hh2/24);
            //console.log('new hour='+hh3);
            let mm2     = hhmm-hh2*60;
            //console.log('new minuts='+mm2);

            


            let mm  = dd.getHours()+Math.round(oneSegment.duration/60)
            return { ...oneSegment, 
                timeDeparture: `${dd.getHours()}:${dd.getMinutes()}`, 
                timeArrival: `${hh3}:${mm2}`,
                durationHH: durationHH,
                durationMM: durationMM}
        })];

        console.log(ticket);

        return ({
            price: ticket.price,
            carrier: ticket.carrier,
            segments: [...newSegment],
            CountStopsTo: ticket.segments[0].stops.length,
            durationTo: ticket.segments[0].duration,
            CountStopsBack: ticket.segments[1].stops.length,
            durationBack: ticket.segments[1].duration,

            departure_time: '11'
        })
    })
    return correctlyData
}