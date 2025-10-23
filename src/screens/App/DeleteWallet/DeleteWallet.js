import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { RowButtons } from '../../../components/RowButtons'
import { colors } from '../../../constants/colors'

const DeleteWallet = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader title='Delete Wallet' leftImage={Images.backArrow} onPressBack={() => props?.navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: wp(4) }}>
                    <Image source={Images.deleteWithRedRound} resizeMode='contain' style={styles.deleteWithRedRound} />
                    <Spacer />
                    <PoppinsText style={styles.title}>Delete Wallet</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.description}>Deleting this wallet will permanently remove its
                        connection to your email address. You'll no
                        longer be able to access it using your email.
                        Before proceeding, make sure you've exported
                        your recovery phrase to avoid permanently
                        losing access to your funds. After deletion, you
                        can create a new wallet with your email and will
                        still retain your Phantom username.</PoppinsText>
                </View>
            </View>
            <View style={{ paddingBottom: hp(4), alignSelf: 'center' }}>
                <RowButtons
                    titleColor1={colors.gray28} titleColor2={colors.gray130}
                    style={styles.btn1Style} styleBtn={styles.btn2Style}
                    titlebtn1='Cancel' titlebtn2='Continue'
                    onPressBtn1={() => { }} onPressBtn2={() => { }}
                />
            </View>
        </AppContainer>
    )
}

export default DeleteWallet
