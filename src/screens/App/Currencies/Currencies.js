import { FlatList, Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { currencies, languages } from '../../../components/dummyData'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import { CustomTextInput5 } from '../../../components/CustomTextInput'

const Currencies = (props) => {
    const [selectedCurrency, setSelectedCurrency] = useState({ id: 1, name: 'USD - United States Dollar ($)', code: 'USD', symbol: '$' });
    const [searchText, setSearchText] = useState('');

    return (
        <AppContainer>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    <View style={styles.container}>
                        <View style={[appStyles.row,]}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.goBack()}>
                                <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
                            </TouchableOpacity>
                            <PoppinsText style={styles.title}>{'Currency'}</PoppinsText>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Image resizeMode='contain' style={styles.cross} />
                            </TouchableOpacity>
                        </View>
                        <Spacer />
                        <CustomTextInput5 value={searchText} onChangeText={(text) => setSearchText(text)} leftImage={Images.searchWhite} placeholder={'Search'} inputStyle={styles.inputStyle} containerStyle={styles.inputContainer} />
                    </View>
                    <Spacer />
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={currencies?.filter((item) => item?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <Spacer customHeight={hp(0.2)} />}
                            removeClippedSubviews={false}
                            contentContainerStyle={{ paddingBottom: hp(20) }}
                            renderItem={({ item, index }) => {

                                const isFirst = index === 0;
                                const isLast = index === languages?.length - 1;

                                return (
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedCurrency(item)} style={[styles.languageCard, isFirst && styles.firstCard, isLast && styles.lastCard, appStyles.row]}>
                                        <PoppinsText style={styles.languageText}>{item?.name}</PoppinsText>
                                        <Image source={selectedCurrency?.id === item?.id ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </AppContainer>
    )
}

export default Currencies
