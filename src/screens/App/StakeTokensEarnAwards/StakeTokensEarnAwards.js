import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { styles } from './styles'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import { hp } from '../../../components/ResponsiveComponent'

const StakeTokensEarnAwards = (props) => {
    return (
        <AppContainer>
            <View>
                <AppHeader leftImage={Images.cross} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <Image source={Images.stakeStartWithRound} resizeMode='contain' style={styles.stakeStartWithRound} />
                <Spacer />
                <PoppinsText style={styles.stakeTitle}>Stake tokens and earn
                    rewards</PoppinsText>
                <Spacer />
                <PoppinsText style={styles.stakeDesc}>Earn interest by using your SOL tokens to help
                    Solana scale.</PoppinsText>
                <Spacer />
                <View style={[styles.bgView, appStyles.rowBasic]}>
                    <Image source={Images.suiWithGreenRound} resizeMode='contain' style={styles.suiWithGreenRound} />
                    <View>
                        <View style={appStyles.rowBasic}>
                            <PoppinsText style={styles.liquidStakingTitle}>Liquid Staking</PoppinsText>
                            <Image source={Images.recomended} resizeMode='contain' style={styles.recomended} />
                        </View>
                        <PoppinsText style={styles.liquidStakingDesc}>Stake SOL to earn higher rewards, help secure
                            Solana & receive PsOL to earn additional
                            rewards.</PoppinsText>
                        <Spacer customHeight={hp(1)} />
                        <PoppinsText style={styles.apyText}>Est.APY:~7.10%</PoppinsText>
                    </View>
                </View>
                <Spacer />
                <View style={[styles.bgView, appStyles.rowBasic]}>
                    <Image source={Images.suiWithGreenRound} resizeMode='contain' style={styles.suiWithGreenRound} />
                    <View>
                        <PoppinsText style={styles.liquidStakingTitle}>Native Staking</PoppinsText>
                        <PoppinsText style={styles.liquidStakingDesc}>Stake SOL to receive rewards while helping
                            secure Solana.</PoppinsText>
                        <Spacer customHeight={hp(1)} />
                        <PoppinsText style={styles.apyText}>Est.APY:~7.10%</PoppinsText>
                    </View>
                </View>
            </View>
        </AppContainer>
    )
}

export default StakeTokensEarnAwards
