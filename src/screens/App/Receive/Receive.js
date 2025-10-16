import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { Images } from '../../../Images'
import { ReceiveTokensList } from './Components'
import { routes } from '../../../constants/routes'
import { AppHeader } from '../../../components/AppHeader'

const Receive = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.cross} title={'Receive'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <ReceiveTokensList onPressToken={() => props?.navigation.navigate('')} onPressScanner={() => props?.navigation.navigate(routes.tokenAddress)} onPressCopy={() => { }} />
            </View>
        </AppContainer>
    )
}

export default Receive
