import { useRef } from "react";


const useCreateWallet = (props) => {

    const isImportFlow = props?.route?.params?.isImportFlow

    const emailBottomSheet = useRef(null);
    const importOptionsBottomSheet = useRef(null);

    return {
        isImportFlow,
        emailBottomSheet,
        importOptionsBottomSheet
    }
}

export default useCreateWallet
