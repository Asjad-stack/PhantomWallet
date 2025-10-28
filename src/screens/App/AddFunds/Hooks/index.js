import { useRef, useState } from "react"


const useAddFunds = () => {

    const InfoBottomSheet = useRef(null)

    return {
        InfoBottomSheet
    }
}

export default useAddFunds
