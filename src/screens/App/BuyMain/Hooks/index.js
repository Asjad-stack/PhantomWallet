import { useRef } from "react"


const useBuyMain = (props) => {

    const sellTokenFlow = props?.route?.params?.sellTokenFlow
    const buyTokenDetailsBottomSheetRef = useRef(null)

    return {
        sellTokenFlow,
        buyTokenDetailsBottomSheetRef,
    }

}
export default useBuyMain
