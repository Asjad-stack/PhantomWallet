
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as bip39 from 'bip39';
import 'react-native-get-random-values';

const createMnemonic = () => {
    // Generate a 12-word mnemonic (128-bit entropy)
    const mnemonic = bip39.generateMnemonic(128);
    return mnemonic; // ✅ string like "abandon ability ... zoo"
};

const isValidMnemonic = mnemonic => {
    return bip39.validateMnemonic(mnemonic);
};

const loadMnemonic = (successCallback, failCallback) => {
    AsyncStorage.getItem('mnemonic')
        .then(res => {
            successCallback(res);
        })
        .catch(err => {
            console.log('mnemonic Utils ERROR::::: ', err);
            failCallback();
        });
};

export { createMnemonic, isValidMnemonic, loadMnemonic };
