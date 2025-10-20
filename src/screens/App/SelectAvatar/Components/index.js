import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { wp } from '../../../../components/ResponsiveComponent'

export const RowTabs = ({ selectedTab, setSelectedTab }) => {
    return (
        <View style={{ ...appStyles.row, paddingHorizontal: wp(5), width: wp(60) }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedTab('Emojis')}>
                <PoppinsText style={{
                    ...styles.tabText,
                    color: selectedTab === 'Emojis' ? colors.lightPurple8 : colors.gray28
                }}>Emojis</PoppinsText>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedTab('Collectibles')}>
                <PoppinsText style={{
                    ...styles.tabText,
                    color: selectedTab === 'Collectibles' ? colors.lightPurple8 : colors.gray28
                }}>Collectibles</PoppinsText>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    tabText: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.SemiBold,
    }
})