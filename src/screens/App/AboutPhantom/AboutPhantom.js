import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { AboutRowCard } from './Components'

const AboutPhantom = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader title='About Phantom' leftImage={Images.backArrow} onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <View style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                    <Image source={Images.phantomWhiteLogo} resizeMode='contain' style={styles.phantomWhiteLogo} />
                    <View>
                        <PoppinsText style={styles.phantomText}>{'phantom'}</PoppinsText>
                        <PoppinsText style={styles.versionText}>{'Version 25.36.0(37329)'}</PoppinsText>
                    </View>
                </View>
                <Spacer />
                <View style={{ paddingHorizontal: wp(4) }}>
                    <AboutRowCard title={'Terms of Service'} rightImage={Images.shareWithArrow} onPress={() => { }} />
                    <Spacer />
                    <AboutRowCard title={'Privacy Policy'} rightImage={Images.shareWithArrow} onPress={() => { }} />
                    <Spacer />
                    <AboutRowCard title={'Visit Website'} rightImage={Images.shareWithArrow} onPress={() => { }} />
                </View>
            </View>
        </AppContainer>
    )
}

export default AboutPhantom
