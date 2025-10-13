import { FlatList, ImageBackground, StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import { settingListData } from '../../../../components/dummyData'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Images } from '../../../../Images'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'

export const SettingList = ({ onPress }) => {
    return (
        <FlatList
            data={settingListData}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(1)} />}
            renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(item)}>
                    <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                        <View style={appStyles.row}>
                            <View style={appStyles.rowBasic}>
                                <Image source={item?.logo} resizeMode='contain' style={styles.logo} />
                                <PoppinsText style={styles.title}>{item?.title}</PoppinsText>
                            </View>
                            <Image source={Images.rightArrow} resizeMode='contain' style={styles.rightArrow} />

                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            )}
        />


    )
}

const styles = StyleSheet.create({
    authMainRoundBox: {
        height: hp(8),
        paddingHorizontal: wp(4),
        justifyContent: 'center',
    },
    logo: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(3)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    rightArrow: {
        width: wp(6),
        height: wp(6)
    }
})