import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PoppinsText from '../../../../components/PoppinsText'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'

export const PrivacyCard = ({ leftImage1, leftImage2, leftImage3, title1, title2, title3, desc1, desc2, desc3,

    isPublic, setIsPublic, isPrivate, setIsPrivate, isInvisible, setIsInvisible
}) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setIsPublic(!isPublic)} style={styles.cardContainer1}>
                <View style={appStyles.row}>
                    <View style={appStyles.rowBasic}>
                        <Image source={leftImage1} resizeMode='contain' style={styles.leftImage} />
                        <View>
                            <PoppinsText style={styles.title}>{title1}</PoppinsText>
                            <PoppinsText style={styles.desc}>{desc1}</PoppinsText>
                        </View>
                    </View>
                    <Image source={isPublic ? Images.radioCheckRound : Images.radioUncheckRound} resizeMode='contain' style={styles.radioBtn} />
                </View>
            </TouchableOpacity>

            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => setIsPrivate(!isPrivate)} style={styles.cardContainer2}>
                <View style={appStyles.row}>
                    <View style={appStyles.rowBasic}>
                        <Image source={leftImage2} resizeMode='contain' style={styles.leftImage} />
                        <View>
                            <PoppinsText style={styles.title}>{title2}</PoppinsText>
                            <PoppinsText style={styles.desc}>{desc2}</PoppinsText>
                        </View>
                    </View>
                    <Image source={isPrivate ? Images.radioCheckRound : Images.radioUncheckRound} resizeMode='contain' style={styles.radioBtn} />
                </View>
            </TouchableOpacity>

            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => setIsInvisible(!isInvisible)} style={styles.cardContainer3}>
                <View style={appStyles.row}>
                    <View style={appStyles.rowBasic}>
                        <Image source={leftImage3} resizeMode='contain' style={styles.leftImage} />
                        <View>
                            <PoppinsText style={styles.title}>{title3}</PoppinsText>
                            <PoppinsText style={styles.desc}>{desc3}</PoppinsText>
                        </View>
                    </View>
                    <Image source={isInvisible ? Images.radioCheckRound : Images.radioUncheckRound} resizeMode='contain' style={styles.radioBtn} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer1: {
        width: wp(92),
        alignSelf: 'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    cardContainer2: {
        width: wp(92),
        alignSelf: 'center',
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    cardContainer3: {
        width: wp(92),
        alignSelf: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    radioBtn: {
        width: wp(4),
        height: wp(4)
    },
    leftImage: {
        width: wp(4),
        height: wp(4),
        marginRight: wp(3),
        alignSelf: 'flex-start'
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray58
    },
    desc: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray59,
        width: wp(72)
    }

})