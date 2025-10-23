import { Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { CustomTextInput5 } from '../../../components/CustomTextInput'
import { Images } from '../../../Images'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import { SearchList, TrendingTokens } from './Components'
import { trendingTokensData } from '../../../components/dummyData'

const AllSearchTokenList = (props) => {
    const [searchText, setSearchText] = useState('')
    const filteredTrendingTokens = trendingTokensData.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(7)} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    <View style={{ ...appStyles.row, paddingHorizontal: wp(4) }}>
                        <CustomTextInput5 value={searchText} onChangeText={(text) => setSearchText(text)} leftImage={Images.searchWhite} placeholder={'Sites, tokens, URL'} inputStyle={styles.inputStyle} containerStyle={styles.containerInputStyle} />
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                            <PoppinsText style={styles.cancelText}>Cancel</PoppinsText>
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <View style={{ ...appStyles.row, paddingHorizontal: wp(4) }}>
                        <PoppinsText style={styles.listsText}>Lists</PoppinsText>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                            <PoppinsText style={styles.seeMoreText}>See More</PoppinsText>
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <View style={{ paddingHorizontal: wp(4) }}>
                        <SearchList />
                        <Spacer />
                        <PoppinsText style={styles.trendingTokensText}>Trending Tokens</PoppinsText>
                    </View>
                    <Spacer />
                    <TrendingTokens data={filteredTrendingTokens} />
                </View>
            </TouchableWithoutFeedback>

        </MainContainerApp>
    )
}

export default AllSearchTokenList
