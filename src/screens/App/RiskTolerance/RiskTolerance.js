import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { Images } from '../../../Images'
import { hp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
import { CustomButton } from '../../../components/CustomButton'
import { RiskToleranceOptions } from './Components'

const RiskTolerance = () => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer />
                <Image source={Images.horizontallySlider6} style={styles.horizontallySlider6} />
                <Spacer customHeight={hp(3)} />
                <PoppinsText style={styles.riskToleranceText}>What Is Your Risk Tolerance?</PoppinsText>
                <Spacer customHeight={hp(1)} />
                <PoppinsText style={styles.riskToleranceDesc}>Your leverage will be set based on your risk
                    tolerance, but you can always adjust it when
                    opening a position.</PoppinsText>
                <Spacer />
                <RiskToleranceOptions />
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Start Trading'} onPressBtn={() => { }} />
            </View>
        </AppContainer>
    )
}

export default RiskTolerance
