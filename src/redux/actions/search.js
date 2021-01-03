import {SET_FILTER, SET_SEARCH_NAME} from '../constants';

export const addSearchFilter = ({property, value} = {}) => {
    return ({
        type: SET_FILTER,
        payload: {property, value}
    });
};

export const addSearchName = (name) => {
    return ({
        type: SET_SEARCH_NAME,
        payload: name
    });
};
