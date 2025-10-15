import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { CustomModal } from '../../../../components/CustomModal'
import { Images } from '../../../../Images'
import { networkListData } from '../../../../components/dummyData'
import Spacer from '../../../../components/Spacer'

export const NetworkCard = ({ title, network, rightArrow, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.networkCardBgView, appStyles.row]}>
            <PoppinsText style={styles.title}>{title}</PoppinsText>
            <View style={appStyles.rowBasic}>
                <PoppinsText style={styles.network}>{network}</PoppinsText>
                <Image source={rightArrow} resizeMode='contain' style={styles.rightArrow} />
            </View>
        </TouchableOpacity>
    )
}

export const NetworkModal = ({ showModal, setShowModal, selectedNetwork, setSelectedNetwork }) => {
    console.log(selectedNetwork, 'selectedNetworkselectedNetwork');

    return (
        <CustomModal visible={showModal} setShowModal={setShowModal} onRequestClose={() => setShowModal(false)}>
            <FlatList
                data={networkListData}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <Spacer customHeight={hp(0.2)} />}
                removeClippedSubviews={false}
                renderItem={({ item, index }) => {
                    const isFirstItem = index === 0;
                    const isLastItem = index === networkListData.length - 1;

                    return (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                setSelectedNetwork(item)
                                setShowModal(false)
                            }}
                            style={[
                                styles.modalView,
                                isFirstItem && { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
                                isLastItem && { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }
                            ]}>
                            <View style={[styles.modalContent, appStyles.row]}>
                                <View style={appStyles.rowBasic}>
                                    <Image source={item?.logo} resizeMode='contain' style={styles.tokenLogo} />
                                    <PoppinsText style={styles.modalTitle}>{item?.title}</PoppinsText>
                                </View>
                                <Image source={selectedNetwork?.id == item?.id ? Images.checkBox : Images.unCheckBox} resizeMode='contain' style={styles.checkBox} />
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </CustomModal>
    );
};

const styles = StyleSheet.create({
    networkCardBgView: {
        width: wp(92),
        borderRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(4),
        alignSelf: 'center'
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray31
    },
    network: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.gray32
    },
    rightArrow: {
        width: wp(3),
        height: wp(3),
        marginLeft: wp(3)
    },
    // NetworkModal
    modalView: {
        backgroundColor: colors.gray23,

    },
    tokenLogo: {
        width: wp(5.5),
        height: wp(5.5),
        marginRight: wp(3)
    },
    modalTitle: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray36
    },
    modalContent: {
        backgroundColor: colors.gray23,
        padding: wp(5),
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    checkBox: {
        width: wp(4.5),
        height: wp(4.5)
    }

})