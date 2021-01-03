import {SEARCH_RESET, SET_FILTER} from '../constants';

const initialState = {
    filter: null,
    searchName: ''
};

export default (state = {...initialState}, {type, payload}) => {
    switch (type) {
        case SET_FILTER:
            return Object.assign(state, {
                filter: payload,
                searchName: ''
            });
        case SEARCH_RESET:
            return Object.assign(state, initialState);
        default:
            return state;
    }
};
