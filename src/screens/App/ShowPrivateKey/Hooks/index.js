import { useState } from 'react'

const useShowPrivateKey = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [showPrivateKey, setShowPrivateKey] = useState('')

    return {
        isChecked, setIsChecked,
        showPrivateKey, setShowPrivateKey
    }
}

export default useShowPrivateKey
