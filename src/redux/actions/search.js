import {SEARCH_RESET, SET_FILTER, SET_SEARCH_NAME} from '../constants';

export const addSearchFilter = ({property, value, color} = {}) => {
    return ({
        type: SET_FILTER,
        payload: {property, value, color}
    });
};

export const addSearchName = (name) => {
    return ({
        type: SET_SEARCH_NAME,
        payload: name
    });
};

export const resetSearch = () => {
    return {
        type: SEARCH_RESET
    }
};
