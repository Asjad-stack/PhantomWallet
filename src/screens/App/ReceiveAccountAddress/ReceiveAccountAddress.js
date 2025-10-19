import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { ReceiveTokensList } from './Components'

const ReceiveAccountAddress = (props) => {
    return (
        <AppContainer>
            <View>
                <AppHeader leftImage={Images.backArrow} title={'Receive Account Address'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <ReceiveTokensList onPressToken={() => { }} onPressScanner={() => { }} onPressCopy={() => { }} />
            </View>
        </AppContainer>
    )
}

export default ReceiveAccountAddress
