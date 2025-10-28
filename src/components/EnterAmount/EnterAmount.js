import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomKeyboard from '../CustomKeyBoard'
import { MainContainerApp } from '../MainContainer'
import { hp, wp } from '../ResponsiveComponent'
import { CustomButton } from '../CustomButton'
import useEnterAmount from './Hooks'
import PoppinsText from '../PoppinsText'
import { styles } from './styles'
import { RowTabsView } from './Components'
import { appStyles } from '../../utilities/appStyles'
import { Images } from '../../Images'
import Spacer from '../Spacer'


const EnterAmount = ({ props, tokenLogo, chainLogo, tokenName, dropDown, dollarAmount, infoLogo,
    feeDollarAmmount, details, arrowDown, btnTitle, onPressInfo, customCenterButton, onPressBtn, customButton, onPressDetails }) => {
    const {
        selectedToken,
        enteredAmount, setEnteredAmount,
        errormsg, seterrormsg,
        enterkey, setEnterKey,
        isDolorValue, setisDolorValue,
        handleKeyPress, handleRemove,
        selectedTab, setSelectedTab
    } = useEnterAmount(props)
    return (

        <MainContainerApp>


            <View style={{ flex: 1 }}>
                {/* <EnterAmountView
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
                /> */}

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.displayWrapper}>
                        <View style={styles.amountRow}>
                            <PoppinsText style={styles.dollarSign}>$</PoppinsText>

                            <View style={styles.amountWrapper}>
                                <PoppinsText
                                    numberOfLines={1}
                                    adjustsFontSizeToFit
                                    minimumFontScale={0.5}
                                    style={[
                                        styles.amountText,
                                        enteredAmount.length > 6 && { fontSize: 50 },
                                        enteredAmount.length > 10 && { fontSize: 35 },
                                    ]}
                                >
                                    {enteredAmount}
                                </PoppinsText>
                            </View>
                        </View>
                        <PoppinsText style={styles.dollarCurrentAmoun}>0 SOL</PoppinsText>
                    </View>
                </View>
            </View>

            <View style={{ paddingBottom: hp(3) }}>

                {tokenLogo ?
                    <View style={{ ...appStyles.row, }}>
                        <TouchableOpacity activeOpacity={0.8} style={appStyles.rowBasic}>
                            <View style={{ marginRight: wp(1) }}>
                                <Image source={tokenLogo} resizeMode='contain' style={styles.tokenLogo} />
                                <Image source={chainLogo} resizeMode='contain' style={styles.chainLogo} />
                            </View>
                            <View style={appStyles.rowBasic}>
                                <PoppinsText style={styles.tokenName}>{tokenName}</PoppinsText>
                                {dropDown ?
                                    <Image source={dropDown} resizeMode='contain' style={styles.dropDown} />
                                    : null}

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                            <PoppinsText style={styles.dollarAmount}>{dollarAmount}</PoppinsText>
                        </TouchableOpacity>
                    </View>
                    :
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={{ ...appStyles.rowBasic, }}>
                        <Image source={Images.cardWithRound} resizeMode='contain' style={styles.cardWithRound} />
                        <PoppinsText style={styles.cardText}>Debit/Credit Card via Paybis</PoppinsText>
                        <Image source={Images.arrowDown} resizeMode='contain' style={styles.arrowDown} />
                    </TouchableOpacity>

                }

                <Spacer />
                {enteredAmount <= 0 ?
                    <RowTabsView selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    :
                    customCenterButton ?
                        <CustomButton title={btnTitle ? btnTitle : 'Continue'} onPressBtn={onPressBtn} />
                        : null
                }

                <CustomKeyboard
                    enteKey={enterkey}
                    setenteKey={setEnterKey}
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
                    HandleKeyPress={(key) => handleKeyPress(key)}
                    handleRemove={handleRemove}
                />

                {feeDollarAmmount ?
                    <>
                        <TouchableOpacity activeOpacity={0.8} onPress={onPressInfo} style={{ ...appStyles.rowBasic, justifyContent: 'center' }}>
                            <PoppinsText style={styles.feeDollarAmmount}>{feeDollarAmmount} fee</PoppinsText>
                            <Image source={infoLogo} resizeMode='contain' style={styles.infoLogo} />
                            {details ?
                                <TouchableOpacity activeOpacity={0.8} onPress={onPressDetails} style={appStyles.rowBasic}>
                                    <PoppinsText style={styles.feeDollarAmmount}>{details}</PoppinsText>
                                    <Image source={arrowDown} resizeMode='contain' style={styles.arrowDown} />
                                </TouchableOpacity>
                                : null}
                        </TouchableOpacity>
                        <Spacer customHeight={hp(1)} />

                    </>
                    :
                    customButton && enteredAmount > 0 ?
                        <CustomButton title={btnTitle ? btnTitle : 'Continue'} onPress={() => { }} />
                        : null
                }

            </View>
        </MainContainerApp>

    )
}

export default EnterAmount
