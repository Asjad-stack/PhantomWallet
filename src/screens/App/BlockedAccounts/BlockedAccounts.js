import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'

const BlockedAccounts = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader title='Blocked' leftImage={Images.backArrow} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <PoppinsText style={styles.title}>No blocked accounts.</PoppinsText>
            </View>
        </AppContainer>
    )
}

export default BlockedAccounts
