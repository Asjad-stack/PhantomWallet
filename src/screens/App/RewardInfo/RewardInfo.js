import { Image, ImageBackground, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import useRewardInfo from './Hooks'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { styles } from './styles'
import PoppinsText from '../../../components/PoppinsText'
import { hp } from '../../../components/ResponsiveComponent'
import { RewardDetails } from './Components'

const RewardInfo = (props) => {
    const { previousItem } = useRewardInfo(props)
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader title={"Reward Info"} leftImage={Images.backArrow} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer />
                <Image source={Images.giftWithCircle} resizeMode='contain' style={styles.giftWithCircle} />
                <Spacer />
                <PoppinsText style={styles.dollarAmont}>{previousItem?.dollarAmont}</PoppinsText>
                <Spacer customHeight={hp(0.5)} />
                <PoppinsText style={styles.desc}>{previousItem?.desc}</PoppinsText>
                <Spacer />
                {/* <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}> */}
                <RewardDetails />
                {/* </ImageBackground> */}
            </View>
        </MainContainerApp>
    )
}

export default RewardInfo
