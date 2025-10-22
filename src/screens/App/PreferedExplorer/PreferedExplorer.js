import { ScrollView, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { PreferedExplorerCard, TokenSelectionCard } from './Components'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { AppHeader } from '../../../components/AppHeader'

const PreferedExplorer = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Prefered Explorer'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <PreferedExplorerCard tokenLogo={Images.solanaLogo} title={'Solana Beach'} />
                    <Spacer />
                    <View style={{ paddingHorizontal: wp(4) }}>
                        <TokenSelectionCard />
                    </View>
                    <Spacer customHeight={hp(5)} />
                </ScrollView>
            </View>
        </AppContainer>
    )
}

export default PreferedExplorer
