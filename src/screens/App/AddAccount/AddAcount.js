import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AddAccountHeader, RowTabs } from './Components'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'

const AddAcount = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer />
                <AddAccountHeader />
                <Spacer />
                <RowTabs />
                <Spacer />
                <PoppinsText style={styles.title}>Your Accounts</PoppinsText>
            </View>
        </AppContainer>
    )
}

export default AddAcount
