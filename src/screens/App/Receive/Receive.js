import { View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { Images } from '../../../Images'
import { CustomTextInput1 } from '../../../components/CustomTextInput'
import { ReceiveTokensList } from './Components'
import { routes } from '../../../constants/routes'

const Receive = (props) => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Receive'} onPressLeftImage={() => props?.navigation.goBack()} />
                <CustomTextInput1 leftImage={Images.search} placeholder={'Search tokens'} inputStyle={styles.inputStyle} />
                <ReceiveTokensList onPressToken={() => props?.navigation.navigate(routes.tokenAddress)} />
            </View>
        </MainContainerApp>
    )
}

export default Receive
