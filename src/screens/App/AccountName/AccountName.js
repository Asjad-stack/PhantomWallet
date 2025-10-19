import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { AppHeader } from '../../../components/AppHeader'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { CustomTextInput5 } from '../../../components/CustomTextInput'
import { Images } from '../../../Images'
import { styles } from './styles'

const AccountName = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Account Name'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(2.5)} />
                <CustomTextInput5 placeholder={'Account 1'} inputStyle={styles.textInputStyle} rightImage={Images.crossWithBox} rightImageStyle={styles.crossWithBox} />
            </View>
        </AppContainer>
    )
}

export default AccountName
