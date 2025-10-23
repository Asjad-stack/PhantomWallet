import { View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { RowDevSettingView } from './Components'
import useDeveloperSettings from './Hooks'

const DeveloperSettings = (props) => {
    const { developerMode, webViewDebugging, autoConfirmOnLocalhost, setDeveloperMode, setWebViewDebugging, setAutoConfirmOnLocalhost } = useDeveloperSettings()
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title='Developer Settings' onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <View style={{ paddingHorizontal: wp(4) }}>
                    <RowDevSettingView title='Developer Mode' desc='Enable developer mode to access advanced settings and tools' toggleLogo={developerMode ? Images.checkBox : Images.unCheckBox} onPress={() => setDeveloperMode(!developerMode)} />
                    <Spacer />
                    <RowDevSettingView title='Web View Debugging' desc='Allows you to inspect and debug the in-app browser web views.' toggleLogo={webViewDebugging ? Images.checkBox : Images.unCheckBox} onPress={() => setWebViewDebugging(!webViewDebugging)} />
                    <Spacer />
                    <RowDevSettingView title='Auto-Confirm on localhost' desc='Allows using auto-confirm on localhost websites.' toggleLogo={autoConfirmOnLocalhost ? Images.checkBox : Images.unCheckBox} onPress={() => setAutoConfirmOnLocalhost(!autoConfirmOnLocalhost)} />
                </View>
            </View>
        </AppContainer>
    )
}

export default DeveloperSettings
