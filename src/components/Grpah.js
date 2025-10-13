import React from 'react';
import { StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { colors } from '../constants/colors';
import { Images } from '../Images';

const { width } = Dimensions.get('window');

export const Graph = () => {

    const data = [
        // { value: 10, label: '0' },
        // { value: 20, label: '1' },
        // { value: 30, label: '2' },
        // { value: 40, label: '3' },
        // { value: 30, label: '4' },
        // { value: 50, label: '5' },
        // { value: 40, label: '6' },

        { value: 10, },
        { value: 20, },
        { value: 30, },
        { value: 40, },
        { value: 30, },
        { value: 50, },
        { value: 40, },
    ];

    return (
        <ImageBackground source={Images.chartBgImage} resizeMode='contain' style={styles.container}>
            <LineChart
                data={data}
                width={width - 40}
                // height={150}
                verticalLabelRotation={30}
                isAnimated
                color={colors.green}
                strokeWidth={3}
                hideRules={true}
                yAxisLabelSuffix={'k'}
                // xAxisLabelTextStyle={styles.labelStyle}
                // yAxisLabelTextStyle={styles.labelStyle}
                lineWidth={3} // Set the width of the line
                hideDataPoint={false}
                dataPointsColor={'#FFFFFF'}
                lineStyle={{ borderRadius: 10 }}
                hideYAxisText     // 👈 hides the left numbers
                hideAxesAndRules
            />
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: colors.borderClor,
        // backgroundColor: colors.blueBgColor,
        borderRadius: 20
    },
    header: {
        // color: 'white',
        // fontSize: 24,
        // marginBottom: 20,
    },
    labelStyle: {
        color: colors.white,
    },
})