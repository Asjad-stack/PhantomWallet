import { useState } from "react"


const useNotifications = () => {

    const [allowNotificationToggle, setAllowNotificationToggle] = useState(false)
    const [socialTradesToggle, setSocialTradesToggle] = useState(false)
    const [sentTokensToggle, setSentTokensToggle] = useState(false)
    const [receivedTokensToggle, setReceivedTokensToggle] = useState(false)
    const [swapToggle, setSwapToggle] = useState(false)
    const [balanceChangesToggle, setBalanceChangesToggle] = useState(false)
    const [generalUpdateToggle, setGeneralUpdateToggle] = useState(false)


    return {
        allowNotificationToggle, setAllowNotificationToggle,
        socialTradesToggle, setSocialTradesToggle,
        sentTokensToggle, setSentTokensToggle,
        receivedTokensToggle, setReceivedTokensToggle,
        swapToggle, setSwapToggle,
        balanceChangesToggle, setBalanceChangesToggle,
        generalUpdateToggle, setGeneralUpdateToggle
    }
}

export default useNotifications
