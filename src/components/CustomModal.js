// import { ImageBackground, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import { Images } from '../Images'
// import { hp, wp } from './ResponsiveComponent'
// import { Fonts } from '../constants/fonts'
// import { colors } from '../constants/colors'
// import PoppinsText from './PoppinsText'
// import Spacer from './Spacer'
// import { RoundLightButton } from './RoundLightButton'

// const CustomModal = ({ visible, onClose, onViewSolscan }) => {
//     if (!visible) return null;

//     return (
//         <View style={styles.modalOverlay}>
//             <ImageBackground source={Images.modalBgView} resizeMode='contain' style={styles.imageBackground}>
//                 <View style={styles.modalContent}>

//                     <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//                         <Image source={Images.crossCircle} resizeMode='contain' style={styles.crossCircle} />
//                     </TouchableOpacity>


//                     <View style={styles.iconContainer}>
//                         <Image source={Images.badge} resizeMode='contain' style={styles.successIcon} />
//                     </View>


//                     <PoppinsText style={styles.title}>Transaction Successful</PoppinsText>


//                     <PoppinsText style={styles.description}>
//                         Your transaction is being processed! It is currently being validated on the blockchain. This may take a few minutes.
//                     </PoppinsText>

//                     <Spacer />


//                     {/* <RoundLightButton
//                         title="View on Solscan"
//                         onPressBtn={onViewSolscan}
//                         btnContainerStyles={{ width: wp(78) }}
//                     /> */}
//                 </View>
//                 <Spacer customHeight={hp(10)} />
//             </ImageBackground>
//         </View>
//     )
// }

// export default CustomModal

// const styles = StyleSheet.create({
//     modalOverlay: {
//         width: wp(100),
//         // height: hp(60),
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'center',
//         zIndex: 1,
//     },
//     imageBackground: {
//         width: wp(90),
//         height: hp(100),
//         padding: wp(4),
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'center',
//         // backgroundColor: 'green',
//         // height: hp(60)
//     },
//     modalContent: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: 'red'
//         // paddingHorizontal: wp(6),
//         // paddingVertical: hp(4),
//         // position: 'relative',
//     },
//     closeButton: {
//         position: 'absolute',
//         top: hp(2),
//         right: wp(4),
//         width: wp(8),
//         height: wp(8),
//         borderRadius: wp(4),
//         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     crossCircle: {
//         width: wp(7.5),
//         height: wp(7.5),
//     },

//     iconContainer: {
//         // backgroundColor: 'red',
//         alignSelf: 'center',
//         flex: 1,
//         justifyContent: 'center',
//         alignContent: 'center',
//         // marginBottom: hp(2),
//     },
//     successIcon: {
//         width: wp(50),
//         height: wp(50),
//     },
//     title: {
//         fontSize: 20,
//         fontFamily: Fonts.Poppins.Regular,
//         color: colors.white,
//         textAlign: 'center',
//     },
//     description: {
//         fontSize: 14,
//         fontFamily: Fonts.Poppins.Regular,
//         color: colors.gray8,
//         textAlign: 'center',
//     },
// })






import { ImageBackground, StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'
import { hp, wp } from './ResponsiveComponent'
import { Fonts } from '../constants/fonts'
import { colors } from '../constants/colors'
import { Images } from '../Images'
import { RoundLightButton } from './RoundLightButton'
import Spacer from './Spacer'
import PoppinsText from './PoppinsText'

const CustomModal = ({ visible, onClose, onViewSolscan, logo, title, description }) => {
    if (!visible) return null;

    return (
        <View style={styles.modalOverlay}>
            <ImageBackground
                source={Images.modalBgView}
                resizeMode="contain"
                style={styles.imageBackground}>
                <View style={styles.modalContent}>
                    {/* <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Image
                            source={Images.crossCircle}
                            resizeMode="contain"
                            style={styles.closeIcon}
                        />
                    </TouchableOpacity> */}

                    <Spacer />
                    <View style={styles.iconContainer}>
                        <Image
                            source={logo}
                            resizeMode="contain"
                            style={styles.successIcon}
                        />
                    </View>

                    <PoppinsText style={styles.title}>{title}</PoppinsText>

                    <PoppinsText style={styles.description}>
                        {description}
                    </PoppinsText>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={onViewSolscan}
                    >
                        <RoundLightButton title="View on Solscan" onPressBtn={onViewSolscan} btnContainerStyles={{ width: wp(78) }} />
                    </TouchableOpacity>
                </View>
                <Spacer customHeight={hp(5)} />
            </ImageBackground>
        </View>
    );
};

export default CustomModal;

const styles = StyleSheet.create({
    modalOverlay: {
        width: wp(100),
        // height: hp(100),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 1,
    },
    imageBackground: {
        width: wp(90),
        height: hp(150),
        padding: wp(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
    },
    closeButton: {
        // position: 'absolute',
        // top: hp(2),
        // right: 0,
        width: wp(8),
        height: wp(8),
        borderRadius: wp(4),
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        width: wp(7.5),
        height: wp(7.5),
        position: 'absolute',
        top: 0,
        right: 0
    },
    iconContainer: {
        marginTop: hp(5)
    },
    successIcon: {
        width: wp(25), // Adjusted to make it smaller and more aligned
        height: wp(25),
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center',
        marginTop: hp(2),
    },
    description: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8,
        textAlign: 'center',
        marginTop: hp(2),
    },
    buttonContainer: {
        backgroundColor: 'linear-gradient(45deg, #00C6FF, #0072FF)', // Apply gradient background here
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(10),
        // marginTop: hp(3),
        borderRadius: wp(6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: Fonts.Poppins.Bold,
    },
});


