import { useState } from "react"


const useAccountSettings = () => {

    const [searchText, setSearchText] = useState('')
    return {
        searchText, setSearchText,

    }
}

export default useAccountSettings
