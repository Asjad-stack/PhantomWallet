import { useState } from "react"


const useSendTokenAddress = (props) => {


    const [tokenAddress, setTokenAddress] = useState('')

    return {
        tokenAddress, setTokenAddress,

    }
}

export default useSendTokenAddress
