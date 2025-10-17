import { useState } from "react";

const useBuyFromHome = () => {

    const [searchText, setSearchText] = useState('');

    return {
        searchText, setSearchText
    }
}

export default useBuyFromHome