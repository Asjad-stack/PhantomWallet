import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { transactionData } from '../../../../components/dummyData'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'

export const ActivitiesList = ({ onPress }) => {

    const flatData = transactionData.flatMap(section =>
        section.data.map(item => ({ ...item, date: section.date }))
    );

    return (
        <FlatList
            data={flatData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(2)} />}
            renderItem={({ item, index }) => {
                const showDate =
                    index === 0 || flatData[index - 1].date !== item.date;

                return (
                    <View style={{ paddingHorizontal: wp(4) }}>
                        {showDate && (
                            <>
                                <PoppinsText style={styles.date}>{item.date}</PoppinsText>
                                <Spacer customHeight={hp(1.5)} />
                            </>
                        )}

                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => onPress(item)}
                                style={[appStyles.row, styles.activityItem]}>
                                <View style={appStyles.rowBasic}>
                                    <Image
                                        source={item.icon}
                                        resizeMode="contain"
                                        style={styles.icon}
                                    />
                                    <View>
                                        <PoppinsText style={styles.title}>{item.title}</PoppinsText>
                                        <PoppinsText style={styles.subtitle}>{item.subtitle}</PoppinsText>
                                    </View>
                                </View>

                                {item.amount && (
                                    <PoppinsText style={[styles.amount, { color: item.amountColor }]}>
                                        {item.amount}
                                    </PoppinsText>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }}
        />
    )
}


const styles = StyleSheet.create({
    date: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray62,
    },
    activityItem: {
        borderRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3)

    },
    icon: {
        width: wp(10.5),
        height: wp(10.5),
        marginRight: wp(3)
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray60,
    },
    subtitle: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray61,
    },
    amount: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.green1,
        textAlign: 'right'
    }
})