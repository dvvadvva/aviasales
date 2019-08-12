import { SORT_BY_LOW_COST, SET_DIRECTION_SORT} from './const'

const initialState = {
    sortType: SORT_BY_LOW_COST
}

const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIRECTION_SORT: {
            return {
                ...state,
                sortType: action.direction}
        }
        default: { return state }
    }
}

export default sortReducer