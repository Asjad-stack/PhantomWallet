import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import { AppHeader } from '../../../components/AppHeader'
import useNotifications from './Hooks'
import { BalanceAndTradingCard, NotificationPreferencesCard } from './Components'

const Notifications = (props) => {
    const { allowNotificationToggle, setAllowNotificationToggle, socialTradesToggle, setSocialTradesToggle, sentTokensToggle, setSentTokensToggle, receivedTokensToggle, setReceivedTokensToggle, swapToggle, setSwapToggle, balanceChangesToggle, setBalanceChangesToggle, generalUpdateToggle, setGeneralUpdateToggle } = useNotifications()
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Notification Preferences'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <View style={{ paddingHorizontal: wp(4) }}>
                    <NotificationPreferencesCard
                        title={'Allow Notifications'}
                        onPressToggle={() => setAllowNotificationToggle(!allowNotificationToggle)}
                        toggleLOgo={allowNotificationToggle ? Images.toggleOn : Images.toggleOff}
                    />

                    <Spacer />
                    <PoppinsText style={styles.title}>Social</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <NotificationPreferencesCard
                        title={'Social Trades'}
                        subTitle={'Trading activity from people you follow.'}
                        onPressToggle={() => setSocialTradesToggle(!socialTradesToggle)}
                        toggleLOgo={socialTradesToggle ? Images.toggleOn : Images.toggleOff}
                    />

                    <Spacer />
                    <PoppinsText style={styles.title}>Balances and Trading</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <BalanceAndTradingCard
                        title1={'Sent Tokens'}
                        description1={'Outbound transfers of tokens and NFTs.'}
                        onPressSentTokenToggle={() => setSentTokensToggle(!sentTokensToggle)}
                        sentTokenLogo={sentTokensToggle ? Images.toggleOn : Images.toggleOff}
                        title2={'Received Tokens'}
                        description2={'Inbound transfers of tokens and NFTs.'}
                        onPressReceivedTokenToggle={() => setReceivedTokensToggle(!receivedTokensToggle)}
                        receivedTokenLogo={receivedTokensToggle ? Images.toggleOn : Images.toggleOff}
                        title3={'Swaps'}
                        description3={'Swap activity from people you follow.'}
                        onPressSwapToggle={() => setSwapToggle(!swapToggle)}
                        swapToggleLogo={swapToggle ? Images.toggleOn : Images.toggleOff}
                        title4={'Balance Changes'}
                        description4={'Balance changes from people you follow.'}
                        onPressBalanceChangesToggle={() => setBalanceChangesToggle(!balanceChangesToggle)}
                        balanceChangesToggleLogo={balanceChangesToggle ? Images.toggleOn : Images.toggleOff}
                    />

                    <Spacer />
                    <PoppinsText style={styles.title}>General</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <NotificationPreferencesCard
                        title={'Updates From Phantom'}
                        subTitle={'Feature announcements and general updates.'}
                        onPressToggle={() => setGeneralUpdateToggle(!generalUpdateToggle)}
                        toggleLOgo={generalUpdateToggle ? Images.toggleOn : Images.toggleOff}
                    />
                </View>


            </View>
        </AppContainer>
    )
}

export default Notifications
