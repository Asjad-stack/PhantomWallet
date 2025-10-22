import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { PreferencesCard, RowView } from './Components'
import { routes } from '../../../constants/routes'

const Preferences = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Preferences'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(4)} />
                <PreferencesCard
                    title1={'Preferences'} rightText1={'Preferences'} onPress1={() => { }}
                    tittle2={'Currency'} rightText2={'United States Dollar'} onPress2={() => { }}
                />
                <Spacer />
                <View style={{ paddingHorizontal: wp(4) }}>
                    <RowView title={'Notifications'} rightImage={Images.arrowRight} onPress={() => props?.navigation.navigate(routes.notifications)} />
                    <Spacer />
                    <RowView title={'Preferred Explorer'} rightImage={Images.arrowRight} onPress={() => props?.navigation.navigate(routes.preferedExplorer)} />
                    <Spacer />
                    <RowView title={'App Icon'} rightImage={Images.arrowRight} onPress={() => props?.navigation.navigate(routes.appIcon)} />
                    <Spacer />
                    <RowView title={'Preferred Bitcoin Address'} rightImage={Images.arrowRight} onPress={() => props?.navigation.navigate(routes.preferedBitcoinAddress)} />
                    <Spacer />
                    <RowView title={'Motion Level'} rightText={'Auto (Full)'} rightImage={Images.arrowRight} onPress={() => props?.navigation.navigate(routes.motionLevel)} />
                    <Spacer />
                </View>
            </View>
        </AppContainer>
    )
}

export default Preferences
