import { useState } from "react";
const useProtectWallet = () => {

    const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);

    return {
        isFaceIdEnabled, setIsFaceIdEnabled
    }
}

export default useProtectWallet
