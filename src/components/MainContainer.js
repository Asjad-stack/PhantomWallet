import React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { colors } from "../constants/colors"

export const MainContainer = ({ style, children }) => {
    return (
        <View style={[{
            ...styles.mainContainer,
        }, style]}>
            <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
            {children}
        </View>
    )
}

export const MainContainerApp = ({ style, children }) => {
    return (
        <View style={[{
            ...styles.mainContainer1,
        }, style]}>
            <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgColor
    },
    mainContainer1: {
        flex: 1,
        backgroundColor: colors.bgColor
    }
})