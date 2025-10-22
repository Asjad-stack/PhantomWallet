import React, { useState } from 'react'

const useSwapMain = () => {

    const [selectedTokenPay, setSelectedTokenPay] = useState({})
    const [enterAmountPay, setEnterAmountPay] = useState('')
    const [erroMessage, seterroMessage] = useState('');
    const [selectedChainFrom, setSelectedChainFrom] = useState({});
    const [FromtokenBalance, setFromtokenBalance] = useState('');
    const [PriceButton, setPriceButton] = useState('')
    const [typePayOrReceive, setTypePayOrReceive] = useState('');
    const [fromstateCurentPrice, setfromstateCurentPrice] = useState('');
    const [selectedChainTo, setSelectedChainTo] = useState({});
    const [selectedTokenReceive, setSelectedTokenReceive] = useState({})
    const [Recivetokenbalance, setRecivetokenbalance] = useState('');
    const [enterAmountReceive, setEnterAmountReceive] = useState('')
    const [FeatchLoading, setFeatchLoading] = useState(false);
    const [tostateCurentPrice, settostateCurentPrice] = useState('');













    const handleAmmount = text => {
        // setgasPrice('')
        // setpriceImpact('')
        // setEnterAmountReceive('')
        seterroMessage('')
        if (text?.toString().split('.').length > 2) {
            return;
        }
        setEnterAmountPay(text);
    };


    return {
        handleAmmount,
        selectedTokenPay,
        enterAmountPay,
        selectedChainFrom,
        FromtokenBalance,
        PriceButton, setPriceButton,
        typePayOrReceive, setTypePayOrReceive,
        fromstateCurentPrice,
        selectedChainTo,
        selectedTokenReceive,
        Recivetokenbalance,
        enterAmountReceive,
        FeatchLoading,
        tostateCurentPrice,
    }
}

export default useSwapMain
