import {SEARCH_RESET, SET_FILTER, SET_SEARCH_NAME} from '../constants';

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
        case SET_SEARCH_NAME:
            return Object.assign(state, {
                filter: null,
                searchName: payload
            });
        case SEARCH_RESET:
            return Object.assign(state, initialState);
        default:
            return state;
    }
};
