import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { appStyles } from '../../../utilities/appStyles'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import { ExplorePerps, TradePerpCard } from './Components'

const PrepMain = (props) => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(7)} />
            <View style={styles.mainView}>
                <View style={appStyles.row}>
                    <View style={appStyles.rowBasic}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.goBack()}>
                            <Image source={Images.backArrow} resizeMode='contain' style={styles.backArrow} />
                        </TouchableOpacity>
                        <PoppinsText style={styles.text}>Perps</PoppinsText>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.goBack()}>
                        <Image source={Images.searchWhite} resizeMode='contain' style={styles.searchWhite} />
                    </TouchableOpacity>
                </View>
                <Spacer />
                <TradePerpCard onPressBtn1={() => { }} onPressBtn2={() => { }} />
                <Spacer />
                <View style={appStyles.row}>
                    <PoppinsText style={styles.exploreText}>Explore Perps</PoppinsText>
                    <TouchableOpacity activeOpacity={0.8}>
                        <PoppinsText style={styles.seerMore}>See More</PoppinsText>
                    </TouchableOpacity>
                </View>
                <Spacer />
                <View style={styles.tokenCardView}>
                    <ExplorePerps />
                </View>
            </View>
        </MainContainerApp>
    )
}

export default PrepMain
