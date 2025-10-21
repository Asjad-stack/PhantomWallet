import { useRef } from "react"


const useBuyMain = () => {

    const buyTokenDetailsBottomSheetRef = useRef(null)

    return {
        buyTokenDetailsBottomSheetRef
    }

}
export default useBuyMain
