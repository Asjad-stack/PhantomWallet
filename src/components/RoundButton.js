import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View, } from "react-native"
import { wp } from "./ResponsiveComponent";
import { appStyles } from "../utilities/appStyles";
import PoppinsText from "./PoppinsText";
import { colors } from "../constants/colors";
import { Fonts } from "../constants/fonts";


export const RoundButtons = ({
    onPress,
    text,
    loading,
    backgroundColor,
    textColor,
    buttonWidth,
    styleView,
    disabled,
    borderWidth,
    borderColor,
    alignSelf,
    borderRadius,
    btnImage,

}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            disabled={disabled}
            style={styleView ? styleView :
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: alignSelf,
                    paddingVertical: 8,
                    borderRadius: borderRadius ?? 8,
                    width: buttonWidth ? buttonWidth : wp(43),
                    height: wp(11),
                    backgroundColor: backgroundColor,
                    borderWidth: borderWidth,
                    borderColor: borderColor
                }
            }
            onPress={onPress}>
            {loading ?

                <ActivityIndicator size={'large'} color={colors.darkBlue} /> :
                <View style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                    {btnImage ?
                        <Image source={btnImage} resizeMode="contain" style={styles.btnImage} />
                        : null}
                    <PoppinsText
                        style={{
                            fontSize: 20,
                            fontFamily: Fonts.Poppins.Medium,
                            color: textColor ? textColor : colors.white,
                            textAlign: 'center'
                        }}>
                        {text}
                    </PoppinsText>
                </View>



            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnImage: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(2)
    }
})