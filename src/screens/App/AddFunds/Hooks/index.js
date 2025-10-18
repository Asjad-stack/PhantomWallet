import { useRef } from "react"


const useAddFunds = () => {

    const InfoBottomSheet = useRef(null)

    return {
        InfoBottomSheet
    }
}

export default useAddFunds
