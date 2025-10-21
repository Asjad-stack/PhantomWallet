import { useState } from "react";


const useSlippage = () => {

    const [halfPercentSlipppage, setHalfPercentSlipppage] = useState('');
    const [onePercentSlipppage, setOnePercentSlipppage] = useState('');
    const [twoPercentSlipppage, setTwoPercentSlipppage] = useState('');
    const [customPercentSlipppage, setCustomePercentSlipppage] = useState('');


    return {
        halfPercentSlipppage,
        setHalfPercentSlipppage,
        onePercentSlipppage,
        setOnePercentSlipppage,
        twoPercentSlipppage,
        setTwoPercentSlipppage,
        customPercentSlipppage,
        setCustomePercentSlipppage
    }
}

export default useSlippage
