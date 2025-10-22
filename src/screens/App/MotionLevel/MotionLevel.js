import { Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'

const MotionLevel = (props) => {
    const [motionLevel, setMotionLevel] = useState('Auto (Full)')

    const handleMotionLevel = (level) => {
        setMotionLevel(level)
    }
    const handleReduced = () => {
        setMotionLevel('Reduced')
    }
    const handleFull = () => {
        setMotionLevel('Full')
    }
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title='Motion Level' onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <View style={{ paddingHorizontal: wp(4) }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => handleMotionLevel('Auto (Full)')} style={[styles.container, appStyles.row]}>
                        <View>
                            <PoppinsText style={styles.title}>Auto (Full)</PoppinsText>
                            <PoppinsText style={styles.description}>Follows device performance and OS settings.</PoppinsText>
                        </View>
                        <Image source={motionLevel === 'Auto (Full)' ? Images.checkBox : Images.unCheckBox} resizeMode='contain' style={styles.checkbox} />
                    </TouchableOpacity>
                    <Spacer customHeight={hp(0.2)} />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => handleMotionLevel('Reduced')} style={[styles.container2, appStyles.row]}>
                        <View>
                            <PoppinsText style={styles.title}>Reduced</PoppinsText>
                            <PoppinsText style={styles.description}>Minimizes animations and visual effects.</PoppinsText>
                        </View>
                        <Image source={motionLevel === 'Reduced' ? Images.checkBox : Images.unCheckBox} resizeMode='contain' style={styles.checkbox} />
                    </TouchableOpacity>
                    <Spacer customHeight={hp(0.2)} />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => handleMotionLevel('Full')} style={[styles.container1, appStyles.row]}>
                        <View>
                            <PoppinsText style={styles.title}>Full</PoppinsText>
                            <PoppinsText style={styles.description}>Displays all animations and visual effects.</PoppinsText>
                        </View>
                        <Image source={motionLevel === 'Full' ? Images.checkBox : Images.unCheckBox} resizeMode='contain' style={styles.checkbox} />
                    </TouchableOpacity>
                </View>

            </View>
        </AppContainer>
    )
}

export default MotionLevel
