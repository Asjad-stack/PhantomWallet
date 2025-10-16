import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import { wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'
import PoppinsText from '../../../../components/PoppinsText'

export const RowTabs = ({ selectedTab, setSelectedTab }) => {
    return (
        <View style={{ ...appStyles.row, width: wp(55) }}>
            <TouchableOpacity
                style={[
                    styles.tab,
                    selectedTab === 'followers' ? styles.activeTab : styles.inactiveTab,
                ]}
                onPress={() => setSelectedTab('followers')}>
                <PoppinsText
                    style={[
                        styles.text,
                        selectedTab === 'followers' ? styles.activeText : styles.inactiveText,
                    ]}>
                    Followers <PoppinsText style={selectedTab === 'followers' ? styles.count : styles.countInactive}>(0)</PoppinsText>
                </PoppinsText>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.tab,
                    selectedTab === 'following' ? styles.activeTab : styles.inactiveTab,
                ]}
                onPress={() => setSelectedTab('following')}>
                <PoppinsText
                    style={[
                        styles.text,
                        selectedTab === 'following' ? styles.activeText : styles.inactiveText,
                    ]}>
                    Following <PoppinsText style={selectedTab === 'following' ? styles.count : styles.countInactive}>(0)</PoppinsText>
                </PoppinsText>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    tab: {
        width: wp(22.75),
        borderRadius: 9,
        padding: wp(2)
    },
    activeTab: {
        width: wp(22.75),
        backgroundColor: colors.lightPurple3
    },
    inactiveTab: {
        width: wp(22.75),
        backgroundColor: colors.gray56
    },
    activeText: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray57,
        textAlign: 'center'
    },
    inactiveText: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray25,
        textAlign: 'center'
    },
    count: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray57,
        textAlign: 'center'
    },
    countInactive: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray25,
        textAlign: 'center'
    }
})