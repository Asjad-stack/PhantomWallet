import React, { useState, useRef } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, Dimensions, PanResponder, Animated } from 'react-native';
import { wp } from './ResponsiveComponent';
import { Images } from '../Images';
import { routes } from '../constants/routes';
import { colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = width * 0.88;
const BUTTON_HEIGHT = 60;
const SLIDER_SIZE = 50;
const SLIDE_THRESHOLD = BUTTON_WIDTH - SLIDER_SIZE - 20; // Distance needed to unlock

export default function SwipeUnlock({ onUnlock, navigation, seedPhrase }) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const pan = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(1)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return !isUnlocked && Math.abs(gestureState.dx) > 5;
            },
            onPanResponderGrant: () => {
                pan.setOffset(pan._value);
            },
            onPanResponderMove: (evt, gestureState) => {
                if (!isUnlocked) {
                    const newValue = Math.max(0, Math.min(gestureState.dx, SLIDE_THRESHOLD));
                    pan.setValue(newValue);

                    // Fade out text as slider moves
                    const opacity = 1 - (newValue / SLIDE_THRESHOLD);
                    textOpacity.setValue(opacity);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                pan.flattenOffset();

                if (gestureState.dx >= SLIDE_THRESHOLD && !isUnlocked) {
                    // Unlock!
                    setIsUnlocked(true);
                    onUnlock && onUnlock();
                    console.log('✅ Seeds revealed - slide completed');
                } else {
                    // Reset to original position
                    Animated.parallel([
                        Animated.spring(pan, {
                            toValue: 0,
                            useNativeDriver: false,
                        }),
                        Animated.spring(textOpacity, {
                            toValue: 1,
                            useNativeDriver: false,
                        })
                    ]).start();
                }
            },
        })
    ).current;

    const handleConfirmPress = () => {
        console.log('Confirm pressed, navigating to confirmSeedPhrase');
        console.log('Passing seed phrase:', seedPhrase);
        navigation?.navigate(routes.confirmSeedPhrase, { seedPhrase });
    };


    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <ImageBackground
                    source={Images.roundLightButton}
                    resizeMode='contain'
                    style={styles.lockContainer}
                >
                    {!isUnlocked && (
                        <Animated.View
                            style={[
                                styles.slider,
                                { transform: [{ translateX: pan }] }
                            ]}
                            {...panResponder.panHandlers}
                        >
                            <Image
                                source={Images.tickWithCircle}
                                resizeMode='contain'
                                style={styles.tickImage}
                            />
                        </Animated.View>
                    )}

                    <View style={styles.contentContainer}>
                        {isUnlocked ? (
                            <View style={styles.confirmButton}>
                                <Text
                                    style={[styles.txt, styles.confirmText]}
                                    onPress={handleConfirmPress}
                                >
                                    Yes, I've written it down
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.textContainer}>
                                <Animated.Text style={[
                                    styles.txt,
                                    { opacity: textOpacity }
                                ]}>
                                    Slide to Reveal
                                </Animated.Text>
                                <Image
                                    source={Images.twoRightArrows}
                                    resizeMode='contain'
                                    style={styles.twoRightArrows}
                                />
                            </View>
                        )}
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lockContainer: {
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        borderRadius: BUTTON_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        height: BUTTON_HEIGHT,
        flex: 1,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1,
        paddingHorizontal: SLIDER_SIZE + 10, // Add padding to account for slider
    },
    slider: {
        position: 'absolute',
        left: 5,
        top: 5,
        width: SLIDER_SIZE,
        height: SLIDER_SIZE,
        borderRadius: SLIDER_SIZE / 2,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 10,
    },
    txt: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        // letterSpacing: 2,
        textAlign: 'center',
    },
    tickImage: {
        width: wp(4),
        height: wp(4),
    },
    twoRightArrows: {
        width: wp(4),
        height: wp(3),
        position: 'absolute',
        right: 15,
    },
    confirmButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 8,
    },
    confirmText: {
        color: colors.white,
        fontFamily: Fonts.Poppins.Medium,
        textAlign: 'center',
        fontSize: 16,
        letterSpacing: 1,
    }
})