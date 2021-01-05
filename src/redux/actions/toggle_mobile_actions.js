import {MOBILE_ACTIONS} from '../constants';

export const toggleMobileActions = () => {
    return {
        type: MOBILE_ACTIONS.TOGGLE
    };
};

export const closeMobileActions = () => {
    return {
        type: MOBILE_ACTIONS.CLOSE
    };
};
