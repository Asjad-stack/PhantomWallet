import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { AppIconCard } from './Components'

const AppIcon = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'App Icon'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <AppIconCard />
            </View>
        </AppContainer>
    )
}

export default AppIcon
