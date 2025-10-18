import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { Images } from '../../../Images'
import { hp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
import { CustomButton } from '../../../components/CustomButton'
import { routes } from '../../../constants/routes'

const GoShort = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer />
                <Image source={Images.horzontallySlider2} style={styles.horizontallySlider2} />
                <Spacer customHeight={hp(3)} />
                <PoppinsText style={styles.goShortText}>Go Short</PoppinsText>
                <Spacer customHeight={hp(1)} />
                <PoppinsText style={styles.thinkPriceWillGoUpText}>You think the price will go down. If you're right, you
                    can earn. If it goes up, you lose.</PoppinsText>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={Images.goShort} resizeMode='contain' style={styles.goLongImage} />
                </View>
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Next'} onPressBtn={() => props.navigation.navigate(routes.adjustingLeverage)} />
            </View>
        </AppContainer>
    )
}

export default GoShort
