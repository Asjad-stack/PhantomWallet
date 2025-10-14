import { useRef } from "react";


const useCreateWallet = () => {

    const emailBottomSheet = useRef(null);

    return {
        emailBottomSheet
    }
}

export default useCreateWallet
