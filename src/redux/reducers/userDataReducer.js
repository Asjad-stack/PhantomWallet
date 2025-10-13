import { USER, PIN, ISFIGERPRINT, TEMP_SEED_PHRASE } from '../types';


const initState = {
    getUser: {},
    getPin: '',
    getPingetPin: '',
    getTempSeedPhrase: '',
};


const userdataReducer = (state = initState, action) => {
    switch (action.type) {

        case USER:
            return {
                ...state,
                getUser: action.payload,
            };
        case PIN:
            return {
                ...state,
                getPin: action.payload,
            };
        case ISFIGERPRINT:
            return {
                ...state,
                getIsFingerPrint: action.payload,
            };
        case TEMP_SEED_PHRASE:
            return {
                ...state,
                getTempSeedPhrase: action.payload,
            };

        default:
            return state;
    }
};

export default userdataReducer;
