import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SimpleRBSheet } from "../../../../components/SImpleBottomSheet"
import Spacer from '../../../../components/Spacer'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { CustomTextInput3, CustomTextInput5, CustomTextInput6 } from '../../../../components/CustomTextInput'

export const FeeBottomSheet = ({ InfoBottomSheet }) => {
    return (
        <SimpleRBSheet refRBSheet={InfoBottomSheet}>
            <PoppinsText style={styles.feeText}>Estimated fee</PoppinsText>
            <Spacer />
            <CustomTextInput6 placeholder={'Network Fee'} />
        </SimpleRBSheet>
    )
}


const styles = StyleSheet.create({
    feeText: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray89
    }
})