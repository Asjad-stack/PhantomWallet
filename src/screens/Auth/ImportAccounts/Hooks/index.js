import { useState } from "react";


const useImportAccounts = () => {

    const [checkedAccounts, setCheckedAccounts] = useState(true);
    const [accountSelection, setAccountSelection] = useState(true);

    return {
        checkedAccounts, setCheckedAccounts,
        accountSelection, setAccountSelection
    }
}

export default useImportAccounts
