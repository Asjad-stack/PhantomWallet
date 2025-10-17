import { useState } from "react"


const useEnterAmount = (props) => {

    const selectedToken = props?.route?.params?.selectedToken


    const [errormsg, seterrormsg] = useState('')
    const [isDolorValue, setisDolorValue] = useState(false)
    const [loading, setLoading] = useState(false)
    const [enteredAmount, setEnteredAmount] = useState("0");
    const [enterkey, setEnterKey] = useState('')
    const [selectedTab, setSelectedTab] = useState('25')



    const handleKeyPress = (key) => {
        if (!key) return; // prevent undefined errors
        setEnterKey(key);

        setEnteredAmount((prev) => {
            const currentValue = prev ?? "0";
            let newValue = currentValue === "0" ? key : currentValue + key;
            // Prevent multiple decimals safely
            if (String(newValue).split(".").length > 2) return currentValue;

            return newValue;
        });
    };

    const handleRemove = () => {
        setEnteredAmount((prev) => {
            if (!prev) return "0"; // safe guard
            const str = String(prev);
            if (str.length <= 1) return "0";
            const trimmed = str.slice(0, -1);
            return trimmed === "" ? "0" : trimmed;
        });
    };



    const HandleNextPres = async () => {
        try {


        } catch (error) {
            let userFriendlyMessage = '';

            if (error.message.includes('insufficient funds for gas')) {
                userFriendlyMessage = `Insufficient funds to cover the gas fees on ${selectedToken?.chainName ?? ''}. Please ensure you have enough balance in your wallet to cover the transaction costs.`;
            } else if (error.message.includes('Returned error')) {
                // You can handle different returned errors based on their messages
                if (error.message.includes('gas')) {
                    // userFriendlyMessage = 'There seems to be an issue with the gas fee calculation. Please try again later or adjust your gas price.';
                    userFriendlyMessage = `You don't have enough fee on on ${selectedToken?.chainName ?? ''}`;
                } else if (error.message.includes('network')) {
                    userFriendlyMessage = 'Network error: Unable to connect to the blockchain network. Please check your internet connection or try again later.';
                } else {
                    userFriendlyMessage = 'An unexpected error occurred. Please try again later.';
                }
            } else if (error.message.includes('overshot')) {
                userFriendlyMessage = 'Transaction cost exceeds your balance. Please check your balance and try again.';
            } else if (error.message.includes('invalid address')) {
                userFriendlyMessage = 'The address you entered is invalid. Please check the address and try again.';
            } else if (error.message.includes('nonce too low')) {
                userFriendlyMessage = 'There is a nonce issue with your transaction. Please wait a moment and try again.';
            } else if (error.message.includes('execution reverted')) {
                userFriendlyMessage = 'Transaction failed due to a contract issue. Please check the contract and try again.';
            } else {
                userFriendlyMessage = 'An unknown error occurred. Please try again later.';
            }
            seterrormsg(userFriendlyMessage)
            console.log('====================================');
            console.log('errorerrorerror', error);
            console.log('====================================');
            setLoading(false)

        }
    }



    return {
        HandleNextPres,
        selectedToken,
        enteredAmount, setEnteredAmount,
        errormsg, seterrormsg,
        enterkey, setEnterKey,
        isDolorValue, setisDolorValue,
        loading, setLoading,
        handleKeyPress, handleRemove,
        selectedTab, setSelectedTab
    }
}

export default useEnterAmount
