import { Image, ImageBackground, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import useHistoryDetails from './Hooks'
import PoppinsText from '../../../components/PoppinsText'
import { TokenDetails } from './Components'
import { appStyles } from '../../../utilities/appStyles'

const HistoryDetails = (props) => {
    const { previousToken } = useHistoryDetails(props)

    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader title={"Received SOL"} leftImage={Images.backArrow} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer />
                <Image source={previousToken?.statusLogo} resizeMode='contain' style={styles.statusLogo} />
                <Spacer />
                <PoppinsText style={styles.amount}>{previousToken?.amount}</PoppinsText>
                <Spacer customHeight={hp(0.5)} />
                <PoppinsText style={styles.usdValue}>{previousToken?.usdValue}</PoppinsText>
                <Spacer />

                <View style={{}}>
                    {/* <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}> */}
                    <TokenDetails />
                    {/* </ImageBackground> */}
                </View>

                <View style={{ flex: 1 }}>
                    <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={{ ...styles.authMainRoundBox1 }}>
                        <View style={{ ...appStyles.row, paddingHorizontal: wp(3), }}>
                            <PoppinsText style={styles.networkFee}>{"Network Fee"}</PoppinsText>
                            <View style={appStyles.rowBasic}>
                                <PoppinsText style={styles.tokenAmount}>{"3.0365 SOL ($4.65)"}</PoppinsText>
                                <Image source={Images.solana} resizeMode='contain' style={styles.tokenLogo} />
                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </View>
        </MainContainerApp>
    )
}

export default HistoryDetails
