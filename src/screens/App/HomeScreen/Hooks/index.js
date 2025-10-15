import { useState } from "react";

const useHomeScreen = () => {

    const [selectedTab, setSelectedTab] = useState('tokens');

    return {
        selectedTab, setSelectedTab
    }
}

export default useHomeScreen
