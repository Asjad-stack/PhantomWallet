import { ISFIGERPRINT, PIN, USER, TEMP_SEED_PHRASE } from "../types";


export const SetUser = data => {

    return {
        type: USER,
        payload: data,
    };
};

export const SavePin = data => {
    return {
        type: PIN,
        payload: data,
    };
};

export const SaveFingerPrint = data => {
    return {
        type: ISFIGERPRINT,
        payload: data,
    };
};

export const SaveTempSeedPhrase = data => {
    return {
        type: TEMP_SEED_PHRASE,
        payload: data,
    };
};