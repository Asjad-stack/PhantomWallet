import { FlatList, StyleSheet, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Images } from '../../../../Images'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles'

export const ConfirmRecoveryCard = ({ seedPhraseData, onWordInput, currentActiveIndex }) => {
    const [inputValues, setInputValues] = useState({});
    const inputRefs = useRef({});

    // Reset input values when data changes (new random indices generated)
    useEffect(() => {
        setInputValues({});
        console.log('🔄 Reset input values for new verification round');
    }, [seedPhraseData]);


    // const handleSubmitEditing = (originalIndex) => {
    //     const word = inputValues[originalIndex]?.trim();
    //     console.log('Submit editing:', word, 'for index:', originalIndex);
    //     if (word) {
    //         onWordInput(word, originalIndex);

    //     }
    // };

    const handleSubmitEditing = (originalIndex) => {
        const word = inputValues[originalIndex]?.trim();
        if (word) {
            onWordInput(word, originalIndex);
        }
    };

    // Handle when user finishes typing (on blur)
    // const handleBlur = (originalIndex) => {
    //     const word = inputValues[originalIndex]?.trim();
    //     console.log('Input blur:', word, 'for index:', originalIndex);
    //     if (word) {
    //         onWordInput(word, originalIndex);
    //     }
    // };

    const handleBlur = (originalIndex) => {
        const word = inputValues[originalIndex]?.trim();
        if (word) {
            onWordInput(word, originalIndex);
        }
    };

    // Handle input change - only update local state, don't trigger verification yet
    const handleInputChange = (text, originalIndex) => {
        console.log('Input change:', text, 'for index:', originalIndex);
        const newInputs = { ...inputValues, [originalIndex]: text };
        setInputValues(newInputs);

        // // Also call onWordInput to sync with hook state
        // if (text.trim().length > 0) {
        //     onWordInput(text, originalIndex);
        // }

        // Don't call onWordInput here - wait for submit/blur to avoid premature verification
    };

    return (
        <FlatList
            data={seedPhraseData}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item, index }) => {

                console.log(item, 'itemitemitemitem');

                const hasValue = item.word && item.word.length > 0;

                return (
                    <TouchableOpacity
                        style={{ alignSelf: 'center', paddingHorizontal: wp(1) }}
                        onPress={() => {
                            // Focus on the input when card is tapped
                            if (inputRefs.current[item.originalIndex]) {
                                inputRefs.current[item.originalIndex].focus();
                            }
                        }}
                        activeOpacity={0.8}>

                        <ImageBackground
                            source={hasValue ? Images.activeCardBox : Images.unActiveCardBox}
                            resizeMode='contain'
                            style={hasValue ? styles.seedCard : styles.seedCard1}>
                            <View style={{ ...appStyles.row }}>
                                <PoppinsText style={styles.cardNumber}>
                                    {item.number}
                                </PoppinsText>
                                <View style={[appStyles.row, { flex: 1 }]}>
                                    {hasValue ? (
                                        <PoppinsText style={styles.activeWord}>
                                            {item.word}
                                        </PoppinsText>
                                    ) : (
                                        // <TextInput
                                        //     ref={(ref) => {
                                        //         if (ref) {
                                        //             inputRefs.current[item.originalIndex] = ref;
                                        //         }
                                        //     }}
                                        //     style={styles.textInput}
                                        //     placeholder="..."
                                        //     placeholderTextColor={colors.gray6}
                                        //     // value={inputValues[item.originalIndex] || ''}

                                        //     // value={inputValues[item?.word] || ''}
                                        //     // onChangeText={(text) => handleInputChange(text, item.originalIndex)}
                                        //     // onSubmitEditing={() => handleSubmitEditing(item.originalIndex)}

                                        //     value={inputValues[item.originalIndex] || ''}
                                        //     onChangeText={(text) => handleInputChange(text, item.originalIndex)}
                                        //     onSubmitEditing={() => handleSubmitEditing(item.originalIndex)}

                                        //     onBlur={() => handleBlur(item.originalIndex)}
                                        //     autoCapitalize="none"
                                        //     autoCorrect={false}
                                        //     // returnKeyType="done"
                                        //     selectTextOnFocus={true}
                                        // />


                                        <TextInput
                                            ref={(ref) => {
                                                if (ref) inputRefs.current[item.originalIndex] = ref;
                                            }}
                                            style={styles.textInput}
                                            placeholder="..."
                                            placeholderTextColor={colors.gray6}
                                            value={inputValues[item.originalIndex] || ''}
                                            onChangeText={(text) => handleInputChange(text, item.originalIndex)}
                                            onSubmitEditing={() => handleSubmitEditing(item.originalIndex)}
                                            onBlur={() => handleBlur(item.originalIndex)}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                        // selectTextOnFocus={true}
                                        />
                                    )}
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                );
            }}
        />
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(2),
        alignSelf: 'center'
    },
    seedCard: {
        width: wp(41),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        justifyContent: 'center',
    },
    seedCard1: {
        width: wp(41),
        paddingHorizontal: wp(3),
        justifyContent: 'center',
    },
    cardNumber: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        marginLeft: wp(3)
    },
    activeWord: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        marginLeft: wp(3)
    },
    dot: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6,
    },
    textInput: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        marginLeft: wp(3)
        // flex: 1,
        // textAlign: 'left',
        // paddingVertical: 0,
        // paddingHorizontal: 8,
        // minWidth: wp(20),
        // backgroundColor: 'red'
    },
})