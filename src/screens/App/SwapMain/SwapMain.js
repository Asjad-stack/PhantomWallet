import { Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { AmountDetails, InputView, LeaderBoardList, RowTabs, TrendingRowTabs } from './Components'
import useSwapMain from './Hooks'
import { formatBalance } from '../../../constants/commonHelperFunctions/commonHelperFunction'
import { routes } from '../../../constants/routes'
import { CustomButton } from '../../../components/CustomButton'


const SwapMain = (props) => {
    const { handleAmmount, selectedTokenPay, enterAmountPay, selectedChainFrom, FromtokenBalance, PriceButton, setPriceButton, setTypePayOrReceive, fromstateCurentPrice,
        selectedChainTo, selectedTokenReceive, Recivetokenbalance, enterAmountReceive, FeatchLoading, tostateCurentPrice
    } = useSwapMain()
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(7)} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    <View style={appStyles.row}>
                        <PoppinsText style={styles.title}>Swap</PoppinsText>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate(routes.tokenDetailSettings)}>
                            <Image source={Images.slippage} resizeMode='contain' style={styles.slippage} />
                        </TouchableOpacity>
                    </View>
                    <Spacer customHeight={hp(1)} />

                    <InputView
                        title={'You Pay'}
                        TitleChain={'From'}
                        balance={
                            selectedTokenPay?.symbol
                                ? `${formatBalance(FromtokenBalance > 0 ? FromtokenBalance : 0) +
                                ' ' +
                                selectedTokenPay?.symbol
                                }`
                                : 0
                        }
                        selectedToken={selectedTokenPay}
                        value={enterAmountPay}
                        selectedChainName={selectedChainFrom?.name ?? 'Select Chain'}
                        selectedChain={selectedChainFrom}
                        isMaxrow={true}

                        disable={selectedChainFrom?.name ? false : true}
                        onChangeText={amt => {

                            if (/^\d*\.?\d*$/.test(amt)) {
                                handleAmmount(amt);
                            }
                        }}
                        onpresPriceButton={response => {

                            console.log('FromtokenBalance', response);
                            if (FromtokenBalance > 0) {
                                console.log('FromtokenBalance', FromtokenBalance);
                                let calculatedAmount = (FromtokenBalance * response) / 100;
                                console.log('calculatedAmount', calculatedAmount);

                                let balanceString;
                                // If calculatedAmount is less than 1, keep up to 6 decimals, else 2 decimals
                                if (calculatedAmount < 1) {
                                    balanceString = calculatedAmount.toFixed(6).replace(/\.?0+$/, '');
                                } else {
                                    balanceString = calculatedAmount.toFixed(2).replace(/\.?0+$/, '');
                                }

                                setPriceButton(response);
                                handleAmmount(balanceString);
                            }
                        }}
                        priceButton={PriceButton}
                        onPressChangeToken={() => {
                            setTypePayOrReceive('From');

                        }}
                        dolorValue={fromstateCurentPrice}
                        onPressSelectChain={() => {
                            setTypePayOrReceive('From');

                        }}
                    />

                    <TouchableOpacity activeOpacity={0.8} style={{}}>
                        <Image source={Images.swapLogo} resizeMode='contain' style={styles.swapLogo} />
                    </TouchableOpacity>

                    <InputView
                        title={'You Receive'}
                        TitleChain={'To'}
                        selectedChainName={selectedChainTo?.name ?? 'Select Chain'}
                        selectedChain={selectedChainTo}
                        balance={
                            selectedTokenReceive?.symbol
                                ? `${formatBalance(
                                    Recivetokenbalance > 0 ? Recivetokenbalance : 0,
                                ) +
                                ' ' +
                                selectedTokenReceive?.symbol
                                }`
                                : 0
                        }
                        selectedToken={selectedTokenReceive}
                        value={
                            enterAmountReceive
                                ? parseFloat(enterAmountReceive ?? 0).toFixed(5)
                                : 0.0
                        }
                        Loading={FeatchLoading}
                        disable={selectedChainTo?.name ? false : true}
                        editable={false}
                        dolorValue={tostateCurentPrice}
                        onPressChangeToken={() => {
                            setTypePayOrReceive('To');
                        }}
                        onPressSelectChain={() => {
                            setTypePayOrReceive('To');
                        }}
                    />

                    <Spacer customHeight={hp(3)} />
                    <RowTabs />
                    <Spacer />
                    <TrendingRowTabs />
                    {!enterAmountPay ?
                        <>
                            <Spacer />
                            <LeaderBoardList />
                        </>
                        :
                        <>
                            <Spacer />
                            <AmountDetails />
                        </>
                    }
                </View>
            </TouchableWithoutFeedback>

            {enterAmountPay ?
                <View style={{ paddingBottom: hp(2) }}>
                    <CustomButton title='Swap Now' onPressBtn={() => props.navigation.navigate(routes.sendSuccess, { screenName: 'Swap' })} />
                </View>
                : null}
        </MainContainerApp>
    )
}

export default SwapMain
