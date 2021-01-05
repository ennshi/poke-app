import {SEARCH_RESET, SET_FILTER, SET_PAGE, SET_SEARCH_NAME} from '../constants';

const initialState = {
    page: 1
};

export default (state = {...initialState}, {type, payload}) => {
    switch (type) {
        case SET_PAGE.NEXT:
            return Object.assign(
                state,
                {page: state.page + 1}
            );
        case SET_PAGE.PREVIOUS:
            return Object.assign(
                state,
                {page: state.page - 1}
            );
        case SET_PAGE.NUMBER:
            return Object.assign(
                state,
                {page: payload}
            );
        case SET_FILTER:
        case SEARCH_RESET:
        case SET_SEARCH_NAME:
            return Object.assign(
                state,
                initialState
            );
        default:
            return state;
    }
};
