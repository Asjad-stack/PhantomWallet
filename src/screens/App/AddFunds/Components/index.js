import { StyleSheet } from 'react-native'
import React from 'react'
import { SimpleRBSheet } from "../../../../components/SImpleBottomSheet"
import Spacer from '../../../../components/Spacer'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { CustomTextInput6 } from '../../../../components/CustomTextInput'
import { CustomButton } from '../../../../components/CustomButton'
import { hp } from '../../../../components/ResponsiveComponent'

export const FeeBottomSheet = ({ InfoBottomSheet, onPressDone }) => {
    return (
        <SimpleRBSheet refRBSheet={InfoBottomSheet}>
            <PoppinsText style={styles.feeText}>Estimated fee</PoppinsText>
            <Spacer />
            <CustomTextInput6 placeholder={'Network Fee'} dollarAmount={'$0.09'} />
            <Spacer customHeight={hp(3)} />
            <CustomButton title={'Done'} onPressBtn={onPressDone} />
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