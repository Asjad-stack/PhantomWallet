import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import { tokenDetailsData } from '../../../../components/dummyData'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { hp, wp } from '../../../../components/ResponsiveComponent'

export const TokenDetails = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tokenDetailsData}
                keyExtractor={(item) => item?.id.toString()}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                ItemSeparatorComponent={() => <Spacer />}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.detailItem}>
                            <View style={appStyles.row}>
                                <PoppinsText style={styles.title}>{item?.title}</PoppinsText>
                                <PoppinsText style={styles.desc}>{item?.desc}</PoppinsText>
                            </View>
                        </View>
                    )
                }}
            />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.borderColor1,
        backgroundColor: colors.blueBgColor,
        padding: wp(3),
        borderRadius: 16
    },
    flatListContainer: {
        flexGrow: 1,
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
    },
    detailItem: {
        minHeight: hp(2),
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
    },
    desc: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    },
})