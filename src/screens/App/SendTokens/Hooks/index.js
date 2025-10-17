import { useState } from "react"


const useSendTokens = () => {

    const [searchText, setSearchText] = useState('')
    return {
        searchText, setSearchText,

    }
}

export default useSendTokens
