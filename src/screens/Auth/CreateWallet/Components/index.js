import { FlatList, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import { appStyles } from '../../../../utilities/appStyles'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { createWalletDataList } from '../../../../components/dummyData'
import PoppinsText from '../../../../components/PoppinsText'
import { SimpleRBSheet } from '../../../../components/SImpleBottomSheet'
import { CustomButton } from '../../../../components/CustomButton'
import { Images } from '../../../../Images'

export const CreateWalletSetupList = () => {
    return (
        <FlatList
            data={createWalletDataList}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <View style={appStyles.rowBasic}>
                        <Image source={item?.logo} resizeMode='contain' style={styles.logo} />
                        <View>
                            <PoppinsText style={styles.title}>{item?.title}</PoppinsText>
                            <Spacer customHeight={hp(0.5)} />
                            <PoppinsText style={styles.desc}>{item?.desc}</PoppinsText>
                        </View>
                    </View>
                )
            }}
        />
    )
}

export const CreateWalletEmailBottomSheet = ({ emailBottomSheet, onPressBtn1, onPressBtn2 }) => {
    return (
        <SimpleRBSheet refRBSheet={emailBottomSheet} backgroundColor={colors.black} height={hp(30)}>
            <PoppinsText style={styles.bottomSheetTitle}>Select Your Email</PoppinsText>
            <Spacer customHeight={hp(1)} />
            <PoppinsText style={styles.bottomSheetDesc}>Add a wallet with your Apple or Google account</PoppinsText>
            <Spacer />
            <CustomButton leftImage={Images.apple} title={'Continue with Apple'} btnSyles={styles.btnStyles1} titleStyles={styles.btnTitleStyles} onPressBtn={onPressBtn1} />
            <Spacer customHeight={hp(1)} />
            <CustomButton leftImage={Images.google} title={'Continue with Google'} btnSyles={styles.btnStyles2} titleStyles={styles.btnTitleStyles} onPressBtn={onPressBtn2} />
        </SimpleRBSheet>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: wp(5.5),
        height: wp(5.5),
        marginRight: wp(4),
        alignSelf: 'flex-start'
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray7
    },
    desc: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8,
        width: wp(72)
    },
    // CreateWalletEmailBottomSheet
    bottomSheetTitle: {
        fontSize: 18,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.white,
        textAlign: 'center'
    },
    bottomSheetDesc: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray10,
        textAlign: 'center'
    },
    btnStyles1: {
        width: wp(92),
        height: hp(5.5),
        alignSelf: 'center',
        borderRadius: 12,
        justifyContent: 'center',
        backgroundColor: colors.btnDisableColor,
    },
    btnStyles2: {
        width: wp(92),
        height: hp(5.5),
        alignSelf: 'center',
        borderRadius: 12,
        justifyContent: 'center',
        backgroundColor: colors.btnDisableColor,
    },
    btnTitleStyles: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center',
    }
})