import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { appStyles } from '../../../utilities/appStyles'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import { hp } from '../../../components/ResponsiveComponent'
import { CustomButton } from '../../../components/CustomButton'
import { styles } from './styles'
import { RowTabs } from './Components'
import useFollowersScreen from './Hooks'

const FollowersScreen = (props) => {
    const { selectedTab, setSelectedTab } = useFollowersScreen()
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer />
                <View style={appStyles.row}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.goBack()}>
                        <Image source={Images.backArrow} resizeMode='contain' style={styles.backArrow} />
                    </TouchableOpacity>
                    <PoppinsText style={styles.userName}>{'@oldbanana1997'}</PoppinsText>
                    <Image style={styles.backArrow} />
                </View>
                <Spacer customHeight={hp(3)} />
                <RowTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </View>

        </AppContainer>
    )
}

export default FollowersScreen
