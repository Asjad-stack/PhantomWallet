

import { } from 'react-native'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SavePin } from '../../../../redux/actions/WalletActions'
import { routes } from '../../../../constants/routes'

const usePinScreen = (props) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state?.userdataReducer?.getUserData)

    const userPin = useSelector(state => state?.userdataReducer?.getPin)
    
    // Check if wallet is already created (from new Redux Toolkit store)
    const isWalletCreated = useSelector(state => state?.auth?.isWalletCreated)

    const [newPin, setNewPin] = useState('');
    const [firstPin, setFirstPin] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [errorTitle, setErrorTitle] = useState('');
    const [showToast1, setShowToast1] = useState('');
    const [verified, setVerified] = useState(false);

    // Reset state when screen mounts (ensures fresh start)
    useEffect(() => {
        setNewPin('');
        setFirstPin('');
        setConfirm(false);
        setVerified(false);
        setError('');
    }, []);


    useEffect(() => {
        if (newPin.length === 6) {

            // Check if user already has a PIN AND wallet is created (changing PIN flow)
            // Only verify existing PIN if wallet is already created
            if (userPin && userPin.length > 0 && isWalletCreated && !verified) {
                // Step 1: Verify existing PIN first
                if (newPin === userPin) {
                    setVerified(true);
                    setNewPin('');
                } else {
                    setShowToast(true);
                    setNewPin('');
                    setConfirm(false);
                    setFirstPin('');
                }
            }
            // New PIN creation (during wallet setup) or after verification
            else {
                // Step 2: First PIN entry - "Create PIN"
                if (!confirm) {
                    setFirstPin(newPin);
                    setNewPin('');
                    setConfirm(true); // This will show "Confirm PIN" next time
                }
                // Step 3: Confirmation - "Confirm PIN"
                else if (confirm) {
                    if (newPin === firstPin) {
                        // ✅ Save to redux
                        dispatch(SavePin(newPin));

                        // ✅ Check if coming from create wallet flow
                        const fromCreateWallet = props?.route?.params?.fromCreateWallet;
                        const seedPhrase = props?.route?.params?.seedPhrase;
                        
                        if (fromCreateWallet && seedPhrase) {
                            // Navigate to FaceIdEnable for create wallet flow
                            props?.navigation?.replace(routes.faceIdEnable, { 
                                seedPhrase: seedPhrase,
                                newPin: true 
                            });
                        } else {
                            // Navigate to import wallet screen for import flow
                            props?.navigation?.replace(routes.importWallet, { newPin: true });
                        }

                        // Reset states
                        setNewPin('');
                        setConfirm(false);
                        setFirstPin('');
                    } else {
                        // ❌ PIN mismatch
                        setErrorTitle(true);
                        setNewPin('');
                        setConfirm(false);
                        setFirstPin('');
                    }
                }
            }
        }
    }, [newPin]);

    // handle press any button on keyboard
    const HandleKeyPress = text => {

        if (newPin?.length < 6) {
            var array1 = [...newPin, text];
            setNewPin(array1?.join(''));
        }
    };

    // handle remove any word by custom keyboard
    const handleRemove = () => {

        if (newPin.toString().length <= 1) setNewPin('');
        else setNewPin(newPin?.slice(0, newPin.toString().length - 1));
    };

    return {
        confirm,
        newPin,
        HandleKeyPress,
        handleRemove
    }
}

export default usePinScreen

