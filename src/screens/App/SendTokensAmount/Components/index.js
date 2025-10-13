import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { appStyles } from "../../../../utilities/appStyles";
import { hp, wp } from "../../../../components/ResponsiveComponent";
import PoppinsText from "../../../../components/PoppinsText";
import { colors } from "../../../../constants/colors";
import { Fonts } from "../../../../constants/fonts";
import Spacer from "../../../../components/Spacer";
import { Images } from "../../../../Images";



export const EnterAmountView = ({
    enterAmount,
    symbol,
    onPressToken,
    isMax,
    onSwitchDolor,
    isDolorValue,
    selectedToken,
}) => {
    return (
        <View style={appStyles.center}>
            <View style={{ alignItems: 'center' }}>
                <View style={{ ...appStyles.rowBasic, }}>
                    <PoppinsText numberOfLines={1} style={[styles.enterAmount, { maxWidth: wp(70), fontSize: enterAmount > 10000000 ? 20 : enterAmount > 10000 ? 22 : 25 }]}>
                        {isDolorValue ? `$${enterAmount}` : `${enterAmount}`}
                    </PoppinsText>
                    {isDolorValue ? null : (
                        <PoppinsText style={[styles.enterAmount, { fontSize: enterAmount > 10000000 ? 20 : enterAmount > 10000 ? 22 : 25 }]}>
                            {' '}
                            {symbol}
                        </PoppinsText>
                    )}
                </View>
                {!isDolorValue ? (
                    <PoppinsText
                        style={{
                            color: colors.gray7, // Fixed "balckText" typo to "blackText"
                            fontSize: 15,
                            fontFamily: Fonts.Poppins.Regular,
                        }}>
                        {`~ $ ${(
                            (parseFloat(enterAmount) || 0) *
                            (parseFloat(selectedToken?.current_price) || 0)
                        ).toFixed(4)}`}
                    </PoppinsText>
                ) : (

                    <PoppinsText
                        style={{
                            color: colors.balckText,
                            fontSize: 15,
                            fontFamily: Fonts.Poppins.Regular,
                        }}
                    >
                        {`${(
                            parseFloat(
                                enterAmount === '.' ? '0.' : enterAmount
                            ) / parseFloat(selectedToken?.current_price ?? 1)
                        ).toFixed(4)} ${symbol}`}
                    </PoppinsText>
                )}

                <Spacer />
                {/* {isMax && isDolorValue == false ? (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={onPressMax}
                        style={styles.maxView}>
                        <PoppinsText style={styles.max}>Max</PoppinsText>
                    </TouchableOpacity>
                ) : (
                    <View style={{ ...styles.maxView, backgroundColor: 'transparent' }} />
                )} */}

                <TouchableOpacity activeOpacity={0.8} onPress={onPressToken} style={{}}>
                    <ImageBackground source={Images.sendTokenRound} resizeMode='contain' style={styles.authMainRoundBox}>
                        <View style={{ ...appStyles.row, padding: wp(2), }}>
                            <Image source={Images.solana} resizeMode='contain' style={styles.tokenLogo} />
                            <PoppinsText style={styles.tokenNameAndAmount}>10,000 SOL available</PoppinsText>
                            <Image resizeMode='contain' style={styles.tokenLogo} />
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            {/* <TouchableOpacity
                activeOpacity={0.9}
                onPress={onSwitchDolor}
                style={styles.SwitchValue}>
                <Image style={styles.switchimg} source={Images.SwapDolor} />
            </TouchableOpacity> */}
        </View>
    );
};


const styles = StyleSheet.create({
    // EnterAmountView
    enterAmount: {
        fontSize: 32,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center',
    },
    symbol: {
        fontSize: 32,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        paddingLeft: wp(3),
    },
    maxView: {
        backgroundColor: colors.textInputBG,
        paddingHorizontal: wp(4),
        paddingVertical: wp(1.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },

    SwitchValue: {

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        position: 'absolute',
        right: 0,
    },
    switchimg: {
        width: wp(8.3),
        height: wp(8.3),
    },
    max: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray1,
    },
    authMainRoundBox: {},
    tokenLogo: {
        width: wp(8),
        height: wp(8),
    },
    tokenNameAndAmount: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        marginLeft: wp(3),
    }
});