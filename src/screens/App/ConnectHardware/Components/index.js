import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import { walletConnectOptions } from '../../../../components/dummyData'
import { appStyles } from '../../../../utilities/appStyles'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import PoppinsText from '../../../../components/PoppinsText'

export const WalletConnetOptions = () => {
    return (
        <FlatList
            data={walletConnectOptions}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(3)} />}
            removeClippedSubviews={false}
            renderItem={({ item }) => {
                return (
                    <View style={{ ...appStyles.rowBasic, paddingHorizontal: wp(4) }}>
                        <Image source={item?.logo} resizeMode='contain' style={styles.logo} />
                        <View>
                            <PoppinsText style={styles.title}>{item?.title}</PoppinsText>
                            <PoppinsText style={styles.description}>{item?.description}</PoppinsText>
                        </View>
                    </View>
                )
            }}
        />
    )
}


const styles = StyleSheet.create({
    logo: {
        width: wp(8),
        height: wp(8),
        marginRight: wp(3)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray87
    },
    description: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8
    }
})