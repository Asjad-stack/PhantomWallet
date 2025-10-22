import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import PoppinsText from '../../../../components/PoppinsText'
import { appStyles } from '../../../../utilities/appStyles'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { Images } from '../../../../Images'
import Spacer from '../../../../components/Spacer'


export const PreferedExplorerCard = ({ tokenLogo, title }) => {

    const [selectedExplorer, setSelectedExplorer] = useState('');

    const explorers = [
        { id: 'Solana Beach', value: 'solana_beach' },
        { id: 'Solscan', value: 'solscan' },
        { id: 'Solana Explorer', value: 'solana_explorer' },
        { id: 'Solana FM', value: 'solana_fm' },
        { id: 'XRAY', value: 'xray' },
    ];

    return (
        <View>
            <View style={{ ...appStyles.rowBasic, paddingHorizontal: wp(4) }}>
                <Image source={tokenLogo} resizeMode="contain" style={styles.tokenLogo} />
                <PoppinsText style={styles.title}>{title}</PoppinsText>
            </View>

            <Spacer />
            {explorers.map((item, index) => {

                const isFirst = index === 0;
                const isLast = index === explorers.length - 1;

                return (
                    <React.Fragment key={item.value}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setSelectedExplorer(item.value)}
                            style={[
                                appStyles.row,
                                styles.cardContainer,
                                !isFirst && !isLast && styles.cardContainer2,
                                isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
                                isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                            ]}>
                            <PoppinsText style={styles.leftText}>{item?.id}</PoppinsText>
                            <Image
                                source={
                                    selectedExplorer === item?.value
                                        ? Images.radioCheckRound
                                        : Images.radioUnFill
                                }
                                resizeMode="contain"
                                style={styles.radioBtn} />
                        </TouchableOpacity>
                        {index !== explorers.length - 1 && <Spacer customHeight={hp(0.2)} />}
                    </React.Fragment>
                );
            })}
        </View>
    );
};

export const TokenSelectionCard = ({ }) => {

    const [selectedBlockExplorer, setSelectedBlockExplorer] = useState('');

    const blockExplorers = [
        { id: 'Ethereum', value: 'ethereum', title: 'Ethereum', logo: Images.ethereumLogo },
        { id: 'Polygon', value: 'polygon', title: 'Polygon', logo: Images.polygonLogo },
        { id: 'Solana', value: 'solana', title: 'Solana', logo: Images.solanaLogo },
        { id: 'Ethereum', value: 'ethereum', title: 'Ethereum', logo: Images.ethereumLogo },
        { id: 'Solana', value: 'solana', title: 'Solana', logo: Images.solanaLogo },
    ];

    return (
        <View>
            {blockExplorers.map((item, index) => {
                return (
                    <>
                        <Spacer />
                        <View style={{ ...appStyles.rowBasic }}>
                            <Image source={item?.logo} resizeMode="contain" style={styles.tokenLogo} />
                            <PoppinsText style={styles.title}>{item?.title}</PoppinsText>
                        </View>
                        <Spacer customHeight={hp(2)} />
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedBlockExplorer(item.value)} style={[styles.tokenBgView, appStyles.row]}>
                            <PoppinsText style={styles.blockExplorerText}>{item?.id}</PoppinsText>
                            <Image source={
                                selectedBlockExplorer === item?.value
                                    ? Images.radioCheckRound
                                    : Images.radioUnFill
                            } resizeMode="contain" style={styles.radioBtn} />
                        </TouchableOpacity>
                    </>
                )
            })}

        </View>
    )
}


const styles = StyleSheet.create({
    // PreferedExplorerCard
    tokenLogo: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(2),
        borderRadius: 100
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray42
    },
    cardContainer: {
        width: wp(92),
        alignSelf: 'center',
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    cardContainer2: {
        width: wp(92),
        alignSelf: 'center',
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray53
    },
    leftText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray26
    },
    radioBtn: {
        width: wp(4),
        height: wp(4),
    },
    // TokenSelectionCard
    tokenBgView: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23,
    },
    blockExplorerText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray12
    },
})