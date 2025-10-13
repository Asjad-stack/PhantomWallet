import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { sendConfirmDetailsData } from '../../../../components/dummyData'
import Spacer from '../../../../components/Spacer'
import { colors } from '../../../../constants/colors'
import PoppinsText from '../../../../components/PoppinsText'
import { appStyles } from '../../../../utilities/appStyles'
import { Fonts } from '../../../../constants/fonts'

export const SendConfirmDetailCard = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={sendConfirmDetailsData}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <Spacer customHeight={hp(3)} />}
                removeClippedSubviews={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={appStyles.row}>
                            <PoppinsText style={styles.title}>{item.title}</PoppinsText>
                            <PoppinsText style={styles.desc}>{item.desc}</PoppinsText>
                        </View>
                    )
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderColor: colors.borderColor1,
        backgroundColor: colors.blueBgColor,
        padding: wp(5),
        borderRadius: 16
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
    },
    desc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    }
})

