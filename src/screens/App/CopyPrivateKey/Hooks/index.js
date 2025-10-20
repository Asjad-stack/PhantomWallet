import { useState } from 'react'
import { copyPaste } from '../../../../utilities/helperFunction'

const useCopyPrivateKey = () => {


    const [isCopy, setisCopy] = useState(false)
    const [privateKey, setPrivateKey] = useState('')


    const onPressCopy = () => {

        setisCopy(true)
        copyPaste.copynoToast(privateKey)

        setTimeout(() => {
            setisCopy(false)
        }, 1100);

    }

    return {
        isCopy,
        setPrivateKey,
        onPressCopy
    }
}

export default useCopyPrivateKey
