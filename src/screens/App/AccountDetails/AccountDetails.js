import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AccountsCard, AddAccountHeader, RowTabs } from './Components'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'
import { routes } from '../../../constants/routes'
import { hp } from '../../../components/ResponsiveComponent'
import { CustomButton } from '../../../components/CustomButton'

const AccountDetails = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer />
                <AddAccountHeader onPressCross={() => props?.navigation.goBack()} />
                <Spacer />
                <RowTabs onPressProfile={() => props?.navigation.navigate(routes.editProfile)} onPressSettings={() => { }} />
                <Spacer />
                <PoppinsText style={styles.title}>Your Accounts</PoppinsText>
                <Spacer />
                <AccountsCard onPressEdit={() => { }} />
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Add Account'} onPressBtn={() => props?.navigation.navigate(routes.addAccounts)} />
            </View>
        </AppContainer>
    )
}

export default AccountDetails
