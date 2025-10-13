import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { Fonts } from '../../../constants/fonts';
import { hp, wp } from '../../../components/ResponsiveComponent';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  pinTitle: {
    fontSize: 22,
    fontFamily: Fonts.Poppins.SemiBold,
    color: colors.white,
    textAlign: 'center',
  },
  pinDesc: {
    fontSize: 14,
    fontFamily: Fonts.Poppins.Regular,
    color: colors.white + '80',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 14,
    fontFamily: Fonts.Poppins.Regular,
    color: colors.red || '#FF4444',
    textAlign: 'center',
  },
  biometricText: {
    fontSize: 14,
    fontFamily: Fonts.Poppins.Medium,
    color: colors.lightBlue || '#4A90E2',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

