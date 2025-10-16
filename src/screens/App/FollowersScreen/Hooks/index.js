import { useState } from 'react'

const useFollowersScreen = () => {

    const [selectedTab, setSelectedTab] = useState('followers')
    return {

        selectedTab,
        setSelectedTab
    }
}

export default useFollowersScreen
