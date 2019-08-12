
import { SET_CHK_ALL, SET_CHK_WITH_OUT_TR, SET_CHK_1TR, SET_CHK_2TR, SET_CHK_3TR } from './const'

const initialState = {
    chk_all: true,
    chk_withOutTr: false,
    chk_1tr: false,
    chk_2tr: false,
    chk_3tr: false

}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHK_ALL: {
            return {
                ...state,
                chk_all: !state.chk_all,
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
            return { ...state, chk_all: false, chk_1tr: (!state.chk_1tr)  }
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

export default filterReducer