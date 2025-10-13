import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import PoppinsText from '../../../../components/PoppinsText'

export const SeedPhraseHeader = ({ centerImage, onPressLeftImage }) => {
    return (
        <View style={{ ...appStyles.row, width: wp(92) }}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPressLeftImage}>
                <Image source={Images.backArrow} resizeMode='contain' style={styles.backArrow} />
            </TouchableOpacity>
            <Image source={centerImage} resizeMode='contain' style={styles.centerImage} />
            <TouchableOpacity style={styles.centerImage}>
            </TouchableOpacity>
        </View>
    )
}

export const AlertView = ({ image }) => {
    return (
        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
            <View style={appStyles.rowBasic}>
                <Image source={Images.info} resizeMode='contain' style={styles.info} />
                <View>
                    <PoppinsText style={styles.alertText}>Make sure no one is watching your screen right now</PoppinsText>
                </View>
            </View>
        </ImageBackground>
    )
}

export const SeedPhraseCard = ({ mnemonic }) => {
    return (
        <>
            <View style={styles.mnemonicBoard}>
                {mnemonic?.map((item, index) => {
                    return (
                        <ImageBackground
                            key={'mnemonic_' + index}
                            source={Images.seedPhraseBgCard}
                            resizeMode='contain'
                            style={styles.mnemonicItem}>

                            <View style={{ ...appStyles.row }}>
                                <PoppinsText style={styles.mnemonicNumber}>
                                    {index + 1}
                                </PoppinsText>
                                <PoppinsText style={styles.mnemonicWord}>
                                    {item}
                                </PoppinsText>
                                <PoppinsText style={styles.mnemonicWord}>
                                </PoppinsText>
                            </View>

                        </ImageBackground>
                    );
                })}
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    backArrow: {
        width: wp(6),
        height: wp(6)
    },
    centerImage: {
        width: wp(14),
        height: 8
    },
    authMainRoundBox: {
        width: wp(86),
        padding: wp(4),
        paddingVertical: hp(3),
        alignSelf: 'center'
    },
    info: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(3)
    },
    alertText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        width: wp(68)
    },
    // SeedPhraseCard
    mnemonicBoard: {
        width: wp(92),
        // height: hp(6),

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingHorizontal: wp(1),
        // paddingVertical: hp(2)
    },
    mnemonicItem: {
        width: wp(43),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        justifyContent: 'center',
    },
    mnemonicNumber: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
    },
    mnemonicWord: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center',
    },
    copyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    copyIcon: {
        width: wp(5),
        height: wp(5),
        marginRight: wp(2),
    },
    copyText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.white,
    },
})