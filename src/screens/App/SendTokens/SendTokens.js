import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { styles } from './styles'
import { Images } from '../../../Images'
import { CustomTextInput5 } from '../../../components/CustomTextInput'
import { SendTokensList } from './Components'
import { routes } from '../../../constants/routes'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import useSendTokens from './Hooks'

const SendTokens = (props) => {
    const { searchText, setSearchText } = useSendTokens()
    return (
        <AppContainer>
            <View style={styles.container}>
                <View style={[appStyles.row,]}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                        <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
                    </TouchableOpacity>
                    <PoppinsText style={styles.title}>{'Select Token'}</PoppinsText>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image resizeMode='contain' style={styles.rightImage} />
                    </TouchableOpacity>
                </View>
                <Spacer />
                <CustomTextInput5 value={searchText} onChangeText={(text) => setSearchText(text)} leftImage={Images.searchWhite} placeholder={'Search tokens'} inputStyle={styles.inputStyle} containerStyle={styles.inputContainer} />
            </View>
            <Spacer />
            <SendTokensList onPressToken={() => props?.navigation.navigate(routes.sendTokensAddress)} searchText={searchText} />
        </AppContainer>
    )
}

export default SendTokens
