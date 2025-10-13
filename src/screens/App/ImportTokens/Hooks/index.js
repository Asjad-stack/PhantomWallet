import { useState } from "react";


const useImportTokens = () => {

    const [selectedTab, setSelectedTab] = useState('search');

    return {
        selectedTab,
        setSelectedTab
    }
}

export default useImportTokens
