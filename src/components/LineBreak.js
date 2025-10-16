import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const LineBreak = ({ style }) => {
    return (
        <View style={[styles.view, style]} />
    )
}

export const VerticalLineBreak = (props) => {
    return (
        <View style={[styles.view, props.style]} />
    )
}

export default LineBreak

const styles = StyleSheet.create({
    view: {
        borderWidth: 0.7,
        borderColor: colors.lineColor,
        backgroundColor: colors.lineColor
    },
})