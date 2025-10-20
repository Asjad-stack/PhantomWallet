import { ethers } from "ethers";


const isMnemonicHasDuplicates = mnemonic => {
    const words = mnemonic.trim().split(' ');
    const uniqueWords = new Set(words);
    return words.length !== uniqueWords.size;
};

export const generateUniqueMnemonic = () => {
    let mnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(20));

    while (isMnemonicHasDuplicates(mnemonic)) {
        mnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(20));
    }

    return mnemonic;
};