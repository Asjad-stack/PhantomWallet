


import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { appStyles } from '../../../utilities/appStyles'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import Spacer from '../../../components/Spacer'
import EnterAmount from '../../../components/EnterAmount/EnterAmount'

const BuyTokenAmount = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer />
                <View style={appStyles.row}>
                    <View style={appStyles.rowBasic}>
                        <Image source={Images.solanaLogo} resizeMode='contain' style={styles.tokenLogo} />
                        <PoppinsText style={styles.headerText}>Buy SOL</PoppinsText>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.goBack()}>
                        <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
                    </TouchableOpacity>
                </View>
                <Spacer />
                <EnterAmount customButton={true} />
            </View>
        </AppContainer>
    )
}

export default BuyTokenAmount
