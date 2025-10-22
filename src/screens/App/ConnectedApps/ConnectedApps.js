import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'

const ConnectedApps = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title='Connected Apps' rightImage={Images.horizontallyDots} onPressBack={() => props?.navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <PoppinsText style={styles.title}>No trusted apps</PoppinsText>
                </View>
            </View>
        </AppContainer>
    )
}

export default ConnectedApps
