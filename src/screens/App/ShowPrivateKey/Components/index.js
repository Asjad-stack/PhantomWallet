import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { appStyles } from "../../../../utilities/appStyles"
import PoppinsText from "../../../../components/PoppinsText"
import { hp, wp } from "../../../../components/ResponsiveComponent"
import { Fonts } from "../../../../constants/fonts"
import { colors } from "../../../../constants/colors"
import Spacer from "../../../../components/Spacer"
import { tokensData } from "../../../../components/dummyData"


export const RowView = ({ leftImage, title }) => {
    return (
        <View style={appStyles.rowBasic}>
            <Image source={leftImage} resizeMode='contain' style={styles.leftImage} />
            <PoppinsText style={styles.title}>{title}</PoppinsText>
        </View>
    )
}

export const SelectTokenList = ({ }) => {
    return (
        <FlatList
            data={tokensData}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(1)} />}
            contentContainerStyle={{ paddingBottom: hp(40) }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} style={[styles.tokensDataBgView, appStyles.rowBasic]}>
                        <Image source={item?.tokenLogo} resizeMode="contain" style={styles.tokenLogo} />
                        <View>
                            <PoppinsText style={styles.tokenName}>{item?.tokenName}</PoppinsText>
                            <PoppinsText style={styles.tokenAddress}>{item?.tokenAddress}</PoppinsText>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
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
    // SelectTokenList
    tokensDataBgView: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23
    },
    tokenLogo: {
        width: wp(11),
        height: wp(11),
        borderRadius: 100,
        marginRight: wp(3)
    },
    tokenName: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray31
    },
    tokenAddress: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6
    },

})