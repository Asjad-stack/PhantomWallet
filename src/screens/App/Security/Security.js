import { View } from 'react-native'
import React, { useState } from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import { SecurityCard } from './Components'

const Security = (props) => {
    const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false)
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Security'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer />
                <SecurityCard activeOpacity={0.8} logo={Images.unlock} title={'Change PIN code'} onPress={() => { }} />
                <Spacer customHeight={hp(1)} />
                <SecurityCard activeOpacity={1} logo={Images.face} title={'Enable Face ID/Biometric'} toggleLogo={isFaceIdEnabled ? Images.toggleOn : Images.toggleOff} onPressToggle={() => setIsFaceIdEnabled(!isFaceIdEnabled)} />
            </View>
        </MainContainerApp>
    )
}

export default Security
