import { useState } from "react";

const useOnBoarding = () => {

    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    return {

        isTermsAccepted,
        setIsTermsAccepted
    }
}

export default useOnBoarding
