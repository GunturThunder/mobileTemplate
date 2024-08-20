/* eslint-disable prettier/prettier */
import { TEST } from './actionTypes'

const INIT_STATE = {
    http_code_account: '',
    status_code_account: '',
    description_account: '',
}

const Test = (state = INIT_STATE, action: any) => {
    switch (action) {
        case TEST:
            return {
                ...state,
                http_code_account: '',
                status_code_account: '',
                description_account: '',
            };
        default:
            return state;
    }
};

export default Test;
