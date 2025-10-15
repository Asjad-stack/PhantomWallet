import { useEffect, useState } from "react";
import { createMnemonic } from "../../../../utils/mnemonic"

const useSeedPhrase = (props) => {

    const [showSeed, setShowSeed] = useState(false);
    const [mnemonic, setMnemonic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Generate random 12-word seed phrase on component mount
    useEffect(() => {
        generateSeedPhrase();
    }, []);

    const generateSeedPhrase = () => {
        try {
            setIsLoading(true);
            // Generate 12-word mnemonic using bip39
            const phrase = createMnemonic();
            console.log('Generated Mnemonic:', phrase);

            // Split the phrase into an array of 12 words
            const phraseArray = phrase.split(" ");

            // Verify we have exactly 12 words
            if (phraseArray.length === 12) {
                setMnemonic(phraseArray);
                console.log('Seed Phrase Generated Successfully:', phraseArray.length, 'words');
            } else {
                console.error('Invalid mnemonic length:', phraseArray.length);
            }

            setIsLoading(false);
        } catch (error) {
            console.error('Error generating seed phrase:', error);
            setIsLoading(false);
        }
    };


    return {
        showSeed,
        setShowSeed,
        mnemonic,
        setMnemonic,
        isLoading,
        generateSeedPhrase
    }
}

export default useSeedPhrase

