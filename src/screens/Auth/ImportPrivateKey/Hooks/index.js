import { useState } from "react"

const useImportPrivateKey = () => {


    const [name, setName] = useState('')
    const [privateKey, setPrivateKey] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedNetwork, setSelectedNetwork] = useState(null)

    return {
        name, setName,
        privateKey, setPrivateKey,
        showModal, setShowModal,
        selectedNetwork, setSelectedNetwork
    }
}

export default useImportPrivateKey
