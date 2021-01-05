import {MOBILE_ACTIONS} from '../constants';

const initialState = {
    show: false
};

export default (state = {...initialState}, {type}) => {
    switch (type) {
        case MOBILE_ACTIONS.TOGGLE:
            return Object.assign(state, {show: !state.show});
        case MOBILE_ACTIONS.CLOSE:
            return Object.assign(state, {show: false});
        default:
            return state;
    }
}
