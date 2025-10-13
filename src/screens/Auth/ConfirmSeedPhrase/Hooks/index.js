import { useState, useEffect } from "react";

const useConfirmSeedPhrase = (props) => {
    const [seedPhrase, setSeedPhrase] = useState([]);
    const [selectedIndices, setSelectedIndices] = useState([]);
    const [userInputs, setUserInputs] = useState({});
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
    const [isVerificationComplete, setIsVerificationComplete] = useState(false);

    useEffect(() => {
        // Get seed phrase from navigation params
        const phrase = props?.route?.params?.seedPhrase;
        if (phrase && phrase.length === 12) {
            setSeedPhrase(phrase);
            generateRandomIndices();
            console.log('✅ Seed phrase received:', phrase);
        } else {
            console.error('❌ Invalid seed phrase received:', phrase);
        }
    }, [props?.route?.params?.seedPhrase]);

    const generateRandomIndices = () => {
        // Generate 4 random indices from 0-11 (12-word seed phrase)
        const indices = [];
        while (indices.length < 4) {
            const randomIndex = Math.floor(Math.random() * 12);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }
        indices.sort((a, b) => a - b); // Sort in ascending order
        setSelectedIndices(indices);
        setCurrentActiveIndex(0);
        setUserInputs({});
        setIsVerificationComplete(false);
        console.log('🎯 Generated random indices:', indices);
    };

    const handleWordInput = (word, originalIndex) => {
        console.log('📝 Word input:', word, 'for index:', originalIndex);
        const newInputs = { ...userInputs, [originalIndex]: word };
        setUserInputs(newInputs);
        console.log('📝 Updated userInputs:', newInputs);
        console.log('📝 Selected indices:', selectedIndices);
        
        // Check if all 4 inputs are filled
        const allInputsFilled = selectedIndices.every(index => {
            const hasValue = newInputs[index] && newInputs[index].trim().length > 0;
            console.log(`📝 Index ${index}: "${newInputs[index]}" - hasValue: ${hasValue}`);
            return hasValue;
        });
        
        console.log('📝 All inputs filled:', allInputsFilled);
        
        if (allInputsFilled) {
            console.log('📝 All inputs completed, verifying...');
            verifySeedPhrase(newInputs);
        }
    };

    const verifySeedPhrase = (inputs) => {
        let isCorrect = true;
        
        for (let i = 0; i < selectedIndices.length; i++) {
            const index = selectedIndices[i];
            const userWord = inputs[index]?.toLowerCase().trim();
            const correctWord = seedPhrase[index]?.toLowerCase().trim();
            
            if (userWord !== correctWord) {
                isCorrect = false;
                console.log(`❌ Word mismatch at index ${index}: "${userWord}" vs "${correctWord}"`);
                break;
            }
        }

        if (isCorrect) {
            console.log('✅ All words correct! Verification successful');
            setIsVerificationComplete(true);
        } else {
            console.log('❌ Verification failed, resetting...');
            // Reset for retry
            setCurrentActiveIndex(0);
            setUserInputs({});
            generateRandomIndices();
        }
    };

    const verifyWordsManually = () => {
        console.log('🔍 Manual verification starting...');
        console.log('📝 User inputs:', userInputs);
        console.log('🎯 Selected indices:', selectedIndices);
        console.log('🔑 Original seed phrase:', seedPhrase);
        
        let isCorrect = true;
        
        for (let i = 0; i < selectedIndices.length; i++) {
            const index = selectedIndices[i];
            const userWord = userInputs[index]?.toLowerCase().trim();
            const correctWord = seedPhrase[index]?.toLowerCase().trim();
            
            console.log(`🔍 Checking index ${index}: "${userWord}" vs "${correctWord}"`);
            
            if (userWord !== correctWord) {
                isCorrect = false;
                console.log(`❌ Word mismatch at index ${index}: "${userWord}" vs "${correctWord}"`);
                break;
            }
        }

        if (isCorrect) {
            console.log('✅ Manual verification successful! All words correct');
            setIsVerificationComplete(true);
        } else {
            console.log('❌ Manual verification failed! Incorrect words detected');
        }
        
        return isCorrect;
    };

    const getSeedPhraseData = () => {
        return selectedIndices.map((index, arrayIndex) => ({
            number: index + 1, // Display as 1-based index
            word: userInputs[index] || '',
            isActive: true, // All inputs are always active now
            originalIndex: index
        }));
    };

    return {
        seedPhrase,
        selectedIndices,
        userInputs,
        isVerificationComplete,
        handleWordInput,
        getSeedPhraseData,
        generateRandomIndices,
        verifyWordsManually
    };
};

export default useConfirmSeedPhrase;
