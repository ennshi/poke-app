import {SET_PAGE} from '../constants';

export const setNextPage = () => {
    return {
        type: SET_PAGE.NEXT
    };
};

export const setPreviousPage = () => {
    return {
        type: SET_PAGE.PREVIOUS
    };
};

export const setNumberPage = (num) => {
    return {
        type: SET_PAGE.NUMBER,
        payload: num
    };
};
