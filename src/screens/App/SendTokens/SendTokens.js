import { View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import { CustomTextInput1 } from '../../../components/CustomTextInput'
import { SendTokensList } from './Components'
import { routes } from '../../../constants/routes'

const SendTokens = (props) => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Send Crypto'} onPressLeftImage={() => props?.navigation.goBack()} />
                <CustomTextInput1 leftImage={Images.search} placeholder={'Search tokens'} inputStyle={styles.inputStyle} />
                <SendTokensList onPressToken={() => props?.navigation.navigate(routes.sendTokensAddress)} />
            </View>
        </MainContainerApp>
    )
}

export default SendTokens
