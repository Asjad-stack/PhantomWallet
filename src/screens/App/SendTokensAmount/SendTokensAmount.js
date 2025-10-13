import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import useSendTokensAmount from './Hooks'
import { RoundUnActiveLightButton } from '../../../components/RoundUnActiveLightButton'
import { RoundLightButton } from '../../../components/RoundLightButton'
import { EnterAmountView } from './Components'
import { routes } from '../../../constants/routes'
import CustomKeyBoard from '../../../components/CustomKeyBoard'

const SendTokensAmount = (props) => {
    const {
        selectedToken,
        enteredAmount, setEnteredAmount,
        errormsg, seterrormsg,
        enterkey, setEnterkey,
        isDolorValue, setisDolorValue,
    } = useSendTokensAmount()
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Send SOL'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={{ paddingVertical: hp(0.7) }}>
                    <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                        <View style={appStyles.row}>
                            <View style={appStyles.rowBasic}>
                                <Image source={Images.profile} resizeMode='contain' style={styles.profile} />
                                <View style={{}}>
                                    <PoppinsText style={styles.customName}>{'Wallet address'}</PoppinsText>
                                    <PoppinsText style={styles.customAddress}>{'TTBJhV...P8tPkG1p5'}</PoppinsText>
                                </View>
                            </View>
                            <Image source={Images.rightArrow} resizeMode='contain' style={styles.rightArrow} />
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <Spacer customHeight={hp(3)} />
                <EnterAmountView
                    enterAmount={enteredAmount ?? 0}
                    selectedToken={selectedToken ?? '-'}
                    symbol={selectedToken?.symbol?.toUpperCase() ?? 'SOL'}
                    onPressMax={() => {
                        const balance = selectedToken?.balance;

                        if (balance !== undefined && balance !== null) {
                            // Convert balance to a string
                            let balanceString = balance.toString();

                            // Check if there is a decimal point
                            if (balanceString.includes('.')) {
                                // Split the string into whole number and decimal parts
                                const [whole, decimal] = balanceString.split('.');

                                // Take only the first 8 digits of the decimal part
                                const formattedDecimal = decimal.slice(0, 8);

                                // Combine whole part with the formatted decimal part
                                balanceString = `${whole}.${formattedDecimal}`;
                            }



                            if (selectedToken?.chainName == "bitcoin") {

                                if (Number(balanceString) == 0) {
                                    seterrormsg('')
                                }
                                let curuntPrice = selectedToken?.current_price

                                const minimumbtcammount = 1.2 / Number(curuntPrice)

                                let minimumPrice = Number(balanceString) * Number(curuntPrice)

                                if (minimumPrice >= 1) {
                                    seterrormsg('')
                                }

                                else if (Number(balanceString) == 0 && minimumPrice >= 1 || minimumPrice == 0) {
                                    seterrormsg('')
                                }

                                else if (minimumPrice < 1) {
                                    seterrormsg(`The minimum amount should not be less than ${minimumbtcammount.toFixed(8)} BTC`)
                                }


                            }
                            setEnteredAmount(balanceString);
                        }
                    }}
                    // isMax={true}
                    onSwitchDolor={() => {
                        setEnteredAmount(0),
                            setEnterkey(''),
                            setisDolorValue(!isDolorValue);
                        seterrormsg('')

                    }}
                    isDolorValue={isDolorValue}
                    onPressToken={() => { }}
                />


            </View>
            <View style={{ paddingBottom: hp(3) }}>

                {enteredAmount == '' ?
                    <RoundUnActiveLightButton activeOpacity={0.8} title={'Next'} onPressBtn={() => props?.navigation.navigate(routes.sendConfirmation)} />
                    :
                    <RoundLightButton activeOpacity={0.8} title={'Next'} onPressBtn={() => props?.navigation.navigate(routes.sendConfirmation)} />
                }
                <Spacer />
                <CustomKeyBoard
                    enteKey={enterkey}
                    setenteKey={setEnterkey}
                    setenterAmount={(res) => {
                        setEnteredAmount(res)

                        seterrormsg('')
                        if (selectedToken?.chainName == "bitcoin") {

                            if (Number(res) == 0) {
                                seterrormsg('')
                            }
                            if (isDolorValue && Number(res) < 1 && Number(res) > 0) {
                                seterrormsg('The minimum amount should not be less than $1')

                            } else {
                                let curuntPrice = selectedToken?.current_price

                                const minimumbtcammount = 1.2 / Number(curuntPrice)

                                let minimumPrice = Number(res) * Number(curuntPrice)

                                if (Number(res) == 0 && minimumPrice >= 1 || minimumPrice == 0) {
                                    seterrormsg('')
                                }

                                else if (minimumPrice < 1) {
                                    seterrormsg(`The minimum amount should not be less than ${minimumbtcammount.toFixed(8)} BTC`)
                                }
                            }
                        }
                    }}
                    backgroundColor={'transparent'}
                    HandleKeyPress={() => { }}
                    handleRemove={() => { }}
                />

            </View>
        </MainContainerApp>
    )
}

export default SendTokensAmount
