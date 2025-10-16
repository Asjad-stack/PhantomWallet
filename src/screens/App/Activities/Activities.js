import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { ActivitiesList } from './Components'

const Activities = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Activities'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <ActivitiesList />
            </View>
        </AppContainer>
    )
}

export default Activities
