import { useState } from "react"


const useDeveloperSettings = () => {

    const [developerMode, setDeveloperMode] = useState(false)
    const [webViewDebugging, setWebViewDebugging] = useState(false)
    const [autoConfirmOnLocalhost, setAutoConfirmOnLocalhost] = useState(false)

    return {
        developerMode, setDeveloperMode,
        webViewDebugging, setWebViewDebugging,
        autoConfirmOnLocalhost, setAutoConfirmOnLocalhost
    }
}

export default useDeveloperSettings
