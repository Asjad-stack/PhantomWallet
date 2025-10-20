import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { Images } from '../../../../Images'
import Spacer from '../../../../components/Spacer'

export const RowView = ({ leftImage, title }) => {
    return (
        <View style={appStyles.row}>
            <Image source={leftImage} resizeMode='contain' style={styles.leftImage} />
            <PoppinsText style={styles.title}>{title}</PoppinsText>
        </View>
    )
}

export const SeedPhraseCard = ({ seedPhrase, onPressCopy, isCopy }) => {

    const seedWords = seedPhrase.split(' ');
    const firstSection = seedWords.slice(0, 8);
    const secondSection = seedWords.slice(8, 15);

    return (
        <View>
            <View style={styles.seedPhraseContainer}>
                <View style={styles.section}>
                    {firstSection.map((word, index) => (
                        <TouchableOpacity activeOpacity={0.8} style={styles.seedWordOuterView}>
                            <PoppinsText key={index} style={styles.seedWord}>{index + 1}. {word}</PoppinsText>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.section}>
                    {secondSection.map((word, index) => (
                        <TouchableOpacity activeOpacity={0.8} style={styles.seedWordOuterView}>
                            <PoppinsText key={index + 8} style={styles.seedWord}>{index + 9}. {word}</PoppinsText>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <Spacer height={hp(1)} />

            <TouchableOpacity onPress={() => onPressCopy()} style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                {isCopy ? null : <Image
                    source={Images.copy}
                    style={styles.copyimg}
                    resizeMode='contain'
                />}
                <PoppinsText style={styles.copyTextStyle}>{isCopy ? 'Copied' : "Copy to clipboard"}</PoppinsText>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    // RowView
    leftImage: {
        width: wp(5),
        height: wp(5),
        marginRight: wp(3),
        alignSelf: 'flex-start'
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray100,
        width: wp(80)
    },
    // SeedPhraseCard
    seedPhraseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        padding: wp(5),
        width: wp(92),
        borderRadius: 16,
        alignSelf: 'center'
    },
    section: {
        flex: 1,
    },
    seedWordOuterView: {
        width: wp(38),
        borderRadius: 16,
        padding: wp(2),
        backgroundColor: colors.bottomSheetBgColor,
        marginBottom: wp(2),
        borderWidth: 1,
        borderColor: colors.lineColor
    },
    seedWord: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray65,
        textAlign: 'center'
    },
    copyimg: {
        width: wp(3.5),
        height: wp(3.5),
        marginRight: wp(2.5)
    },
    copyTextStyle: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray105,
    }

})