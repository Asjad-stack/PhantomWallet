import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AccountsCard, AddAccountHeader, RowTabs } from './Components'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'
import { routes } from '../../../constants/routes'

const AddAcount = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer />
                <AddAccountHeader onPressCross={() => props?.navigation.goBack()} />
                <Spacer />
                <RowTabs />
                <Spacer />
                <PoppinsText style={styles.title}>Your Accounts</PoppinsText>
                <Spacer />
                <AccountsCard onPressEdit={() => props?.navigation.navigate(routes.editProfile)} />
            </View>
        </AppContainer>
    )
}

export default AddAcount
