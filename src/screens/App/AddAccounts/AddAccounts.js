import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { AddAccountsList } from './Components'
import { routes } from '../../../constants/routes'

const AddAccounts = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Add Account'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <AddAccountsList leftImage={Images.plusWithRound} title={'Create New Account'} description={'Add a new multi-chain account'} onPress={() => props?.navigation.navigate(routes.createAccount)} />
                <Spacer customHeight={hp(1)} />

                <AddAccountsList leftImage={Images.connectWithRound} title={'Connect Hardware Wallet'} description={'Use your Ledger hardware wallet'} />
                <Spacer customHeight={hp(1)} />

                <AddAccountsList leftImage={Images.importWithRound} title={'Import Recovery Phrase'} description={'Import accounts from another wallet'} onPress={() => props?.navigation.navigate(routes.seedPhrase, { isAddAccountFlow: true })} />
                <Spacer customHeight={hp(1)} />

                <AddAccountsList leftImage={Images.arrowWithRound} title={'Import Private Key'} description={'Import a single-chain account'} onPress={() => props?.navigation.navigate(routes.importPrivateKey)} />
                <Spacer customHeight={hp(1)} />

                <AddAccountsList leftImage={Images.eyeWithRound} title={'Watch Address'} description={'Track any public wallet address'} onPress={() => props?.navigation.navigate(routes.watchAddress)} />
            </View>
        </AppContainer>
    )
}

export default AddAccounts
