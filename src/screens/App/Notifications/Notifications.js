import { Image, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { Images } from '../../../Images'
import { MainHeader } from '../../../components/MainHeader'
import PoppinsText from '../../../components/PoppinsText'

const Notifications = (props) => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} onPressLeftImage={() => props.navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={Images.notificationLogoWithNumber} resizeMode='cover' style={styles.notificationLogoWithNumber} />
                    <Spacer />
                    <PoppinsText style={styles.comingSoonText}>{'Coming Soon'}</PoppinsText>
                    <Spacer />
                    <PoppinsText style={styles.comingSoonDesc}>{'Notifications will appear soon...'}</PoppinsText>
                </View>
            </View>
        </MainContainerApp>
    )
}

export default Notifications
