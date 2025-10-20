import { useEffect, useState } from "react"
import { generateUniqueMnemonic } from "../../../../EvmWalletHelper"
import { useIsFocused } from "@react-navigation/native"
import { copyPaste } from "../../../../utilities/helperFunction"
const useShowSeedPhrase = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [showSeedPhrase, setShowSeedPhrase] = useState(false)
    const [seedPhrase, setseedPhrase] = useState('')
    const [isCopy, setisCopy] = useState(false)


    useEffect(() => {
        setShowSeedPhrase(false)
        genratePhrase()

    }, [useIsFocused()])

    const genratePhrase = async () => {
        try {
            const seed = await generateUniqueMnemonic()
            console.log('seedseedseed', seed);
            setseedPhrase(seed)
        } catch (error) {

            console.log('errorerrorerror', error);

        }
    }

    const onPressCopy = () => {

        setisCopy(true)
        copyPaste.copynoToast(seedPhrase)

        setTimeout(() => {
            setisCopy(false)
        }, 1100);

    }

    return {
        isChecked, setIsChecked, showSeedPhrase, setShowSeedPhrase, seedPhrase, onPressCopy, isCopy
    }
}

export default useShowSeedPhrase
