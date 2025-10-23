import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { RowButtons } from '../../../components/RowButtons'
import { colors } from '../../../constants/colors'
import { styles } from './styles'

const ResetApp = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader title='Delete Wallet' leftImage={Images.backArrow} onPressBack={() => props?.navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: wp(4) }}>
                    <Image source={Images.deleteWithRedRound} resizeMode='contain' style={styles.deleteWithRedRound} />
                    <Spacer />
                    <PoppinsText style={styles.title}>Reset & wipe app</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.description}>This will remove all existing accounts and data.
                        Make sure you have your recovery phrase and
                        private keys backed up.</PoppinsText>
                </View>
            </View>
            <View style={{ paddingBottom: hp(4), alignSelf: 'center' }}>
                <RowButtons
                    titleColor1={colors.gray28} titleColor2={colors.gray131}
                    style={styles.btn1Style} styleBtn={styles.btn2Style}
                    titlebtn1='Cancel' titlebtn2='Continue'
                    onPressBtn1={() => { }} onPressBtn2={() => { }}
                />
            </View>
        </AppContainer>
    )
}

export default ResetApp
