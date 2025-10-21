import { useState } from 'react'

const useEnterStakeSolAmount = () => {

    const [enteredAmount, setEnteredAmount] = useState(0)
    const [errormsg, seterrormsg] = useState('')
    const [enterkey, setEnterkey] = useState('')
    const [isDolorValue, setisDolorValue] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleNumberPress = (num) => {
        setEnteredAmount((prev) => prev + num);
    };

    const handleDelete = () => {
        setEnteredAmount((prev) => prev.slice(0, -1));
    };

    const handleLanguage = () => {
        console.log('Language button pressed');
    };

    return {
        enteredAmount, setEnteredAmount,
        errormsg, seterrormsg,
        enterkey, setEnterkey,
        isDolorValue, setisDolorValue,
        loading, setLoading,
        handleNumberPress, handleDelete, handleLanguage,
    }
}

export default useEnterStakeSolAmount
