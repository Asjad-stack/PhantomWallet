import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import { AppContainer } from '../../../components/MainContainer'
import PoppinsText from '../../../components/PoppinsText'
import { hp, wp } from '../../../components/ResponsiveComponent'
import Spacer from '../../../components/Spacer'

const AddressBook = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title='Address Book' rightImage={Images.simplePlus} onPressBack={() => props?.navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: wp(4) }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                        <Image source={Images.plusWithBlackRound} resizeMode='contain' style={styles.plusWithBlackRound} />
                    </TouchableOpacity>
                    <Spacer />
                    <PoppinsText style={styles.title}>Your Address Book is empty</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.description}>Click the "+" or "Add Address" buttons to add your
                        favorite addresses</PoppinsText>
                </View>
            </View>
        </AppContainer>
    )
}

export default AddressBook
