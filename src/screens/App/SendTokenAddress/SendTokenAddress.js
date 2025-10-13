import { View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { CustomTextInput2 } from '../../../components/CustomTextInput'
import { RoundLightButton } from '../../../components/RoundLightButton'
import { RoundUnActiveLightButton } from '../../../components/RoundUnActiveLightButton'
import useSendTokenAddress from './Hooks'
import { routes } from '../../../constants/routes'

const SendTokenAddress = (props) => {
    const { tokenAddress, setTokenAddress, } = useSendTokenAddress(props)
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Send SOL'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer />
                <CustomTextInput2 value={tokenAddress} onChangeText={(text) => setTokenAddress(text)} placeholder={'Wallet address or domain'} rightImage={!tokenAddress ? Images.pasteText : null} rightImage1={Images.simpleScanner} inputStyle={!tokenAddress ? { width: wp(60) } : { width: wp(75) }} />
            </View>
            <View style={{ paddingBottom: hp(3) }}>
                {tokenAddress == '' ?
                    <RoundUnActiveLightButton activeOpacity={!tokenAddress ? 1 : 0.8} title={'Continue'} onPressBtn={() => { }} />
                    :
                    <RoundLightButton title={'Continue'} onPressBtn={() => props?.navigation.navigate(routes.sendTokensAmont)} />
                }
            </View>
        </MainContainerApp>
    )
}

export default SendTokenAddress
