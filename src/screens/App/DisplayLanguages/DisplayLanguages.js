import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { languages } from '../../../components/dummyData'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'

const DisplayLanguages = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState({ id: 1, name: 'English', code: 'en' });
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader title='Display Languages' leftImage={Images.backArrow} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={languages}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <Spacer customHeight={hp(0.2)} />}
                        removeClippedSubviews={false}
                        contentContainerStyle={{ paddingBottom: hp(20) }}
                        renderItem={({ item, index }) => {

                            const isFirst = index === 0;
                            const isLast = index === languages?.length - 1;

                            return (
                                <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedLanguage(item)} style={[styles.languageCard, isFirst && styles.firstCard, isLast && styles.lastCard, appStyles.row]}>
                                    <PoppinsText style={styles.languageText}>{item?.name}</PoppinsText>
                                    <Image source={selectedLanguage?.id === item?.id ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </AppContainer>
    )
}

export default DisplayLanguages
