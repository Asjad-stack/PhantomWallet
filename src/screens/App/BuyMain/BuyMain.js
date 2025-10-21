import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { BuyAndSellHeader } from '../../../components/BuyAndSellHeader'
import { Images } from '../../../Images'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import EnterAmount from '../../../components/EnterAmount/EnterAmount'
import useBuyMain from './Hooks'
import { BuyTokenDetailsBottomSheet } from './Components'

const BuyMain = (props) => {
    const { buyTokenDetailsBottomSheetRef } = useBuyMain()
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer customHeight={hp(1)} />
                <BuyAndSellHeader leftImage={Images.backArrow} tokenLogo={Images.tokenLogo} tokenName={'Solana'} status={'421 people here'} rightImage={Images.slippage} onPressBackArrow={() => props?.navigation.goBack()} />
                <Spacer />
                <EnterAmount
                    tokenLogo={Images.tokenLogo} chainLogo={Images.solanaRound}
                    tokenName={'Pay USDC'} dropDown={Images.arrowDown}
                    dollarAmount={'$0.00 ↑↓'}
                    feeDollarAmmount={'$0.03 +0.85%'}
                    details={'Details'}
                    arrowDown={Images.arrowDown}
                    customCenterButton={true}
                    btnTitle={'Buy now'}
                    onPressDetails={() => buyTokenDetailsBottomSheetRef.current?.open()}
                />
            </View>
            <BuyTokenDetailsBottomSheet buyTokenDetailsBottomSheetRef={buyTokenDetailsBottomSheetRef} />
        </AppContainer>
    )
}

export default BuyMain
