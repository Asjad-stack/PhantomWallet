import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { notificationTimes } from '../../../components/dummyData'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'

const RequireAuthentication = (props) => {
    const [notificationTime, setNotificationTime] = useState(notificationTimes[0])
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader title='Require Authentication' leftImage={Images.backArrow} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <View style={{ paddingHorizontal: wp(4) }}>
                    <FlatList
                        data={notificationTimes}
                        showsVerticalScrollIndicator={false}
                        removeClippedSubviews={false}
                        ItemSeparatorComponent={() => <Spacer customHeight={hp(0.2)} />}
                        renderItem={({ item, index }) => {

                            const isFirst = index === 0;
                            const isLast = index === notificationTimes?.length - 1;

                            return (
                                <TouchableOpacity activeOpacity={0.8}
                                    style={[
                                        styles.container,
                                        isFirst && styles.container1,
                                        isLast && styles.container2,
                                        appStyles.row
                                    ]} onPress={() => setNotificationTime(item)}>
                                    <PoppinsText style={styles.title}>{item?.label}</PoppinsText>
                                    <Image source={notificationTime?.id === item?.id ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.toggleBtn} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </View>
        </AppContainer>
    )
}

export default RequireAuthentication
