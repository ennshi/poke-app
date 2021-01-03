import {SET_FILTER} from '../constants';

export const addSearchFilter = ({property, value} = {}) => {
    return ({
        type: SET_FILTER,
        payload: {property, value}
    });
};
