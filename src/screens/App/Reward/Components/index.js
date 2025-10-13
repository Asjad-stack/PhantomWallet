import { FlatList, ImageBackground, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import { rewardsData } from '../../../../components/dummyData'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Images } from '../../../../Images'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'

export const RewardsList = ({ onPressReward }) => {
    return (
        <FlatList
            data={rewardsData}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(1)} />}
            contentContainerStyle={{ paddingBottom: hp(10) }}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPressReward(item)} style={{}}>
                        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                            <View style={appStyles.row}>
                                <View style={appStyles.rowBasic}>
                                    <Image source={item?.statusLogo} resizeMode='contain' style={styles.statusLogo} />
                                    <View>
                                        <PoppinsText style={styles.title}>{item?.title}</PoppinsText>
                                        <Spacer customHeight={hp(0.2)} />
                                        <PoppinsText style={styles.cryptoAmount}>{item?.cryptoAmount}</PoppinsText>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <PoppinsText style={{
                                        ...styles.amount,
                                        color: colors.white
                                    }}>
                                        {item?.dollarAmont}
                                    </PoppinsText>
                                    <Spacer customHeight={hp(0.2)} />
                                    <PoppinsText style={{
                                        ...styles.desc,
                                        color: colors.gray7
                                    }}>
                                        {item?.desc}
                                    </PoppinsText>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )
            }}
        />
    )
}


const styles = StyleSheet.create({
    authMainRoundBox: {
        height: hp(8),
        paddingHorizontal: wp(4),
        justifyContent: 'center',
    },
    statusLogo: {
        width: wp(8),
        height: wp(8),
        marginRight: wp(3)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    cryptoAmount: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7
    },
    amount: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
    },
    desc: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7
    }
})