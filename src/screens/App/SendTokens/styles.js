import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    inputStyle: {
        paddingVertical: hp(2),
        alignSelf: 'center'
    }
})