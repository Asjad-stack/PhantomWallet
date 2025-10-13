import { ImageBackground, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
import { CustomTokenList, ImportTokensList, RowTabs } from './Components'
import { CustomTextInput, CustomTextInput1 } from '../../../components/CustomTextInput'
import { appStyles } from '../../../utilities/appStyles'
import { RoundLightButton } from '../../../components/RoundLightButton'
import useImportTokens from './Hooks'

const ImportTokens = (props) => {
    const { selectedTab, setSelectedTab } = useImportTokens(props);
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Import Tokens'} onPressLeftImage={() => props?.navigation.goBack()} />

                <Spacer />
                <RowTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

                {selectedTab == 'search' ?

                    <>
                        <Spacer />
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={{ paddingVertical: hp(0.6) }}>
                            <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                                <View>
                                    <PoppinsText style={styles.networkText}>Network</PoppinsText>
                                    <PoppinsText style={styles.solanaText}>Solana</PoppinsText>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <CustomTextInput1 leftImage={Images.search} placeholder={'Search Token by Name or address'} inputStyle={styles.inputStyle1} />
                        <ImportTokensList onPressToken={() => { }} />
                    </>
                    :

                    <>

                        <CustomTextInput title={'Token Address'} placeholder={'Enter Token Address'} inputStyle={styles.inputStyle} />
                        <CustomTokenList />
                        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                            <Spacer customHeight={hp(0.5)} />
                            <View style={appStyles.rowBasic}>
                                <Image source={Images.alertTriangle} resizeMode='contain' style={styles.alertTriangle} />
                                <PoppinsText style={styles.alertText}>{'Anyone can create a token, including fake versions of existing tokens. Please be careful'}</PoppinsText>
                            </View>
                        </ImageBackground>
                        <Spacer />
                    </>
                }

            </View>
            <View style={{ paddingBottom: hp(3) }}>
                <RoundLightButton title={'Add Token'} onPressBtn={() => { }} />
            </View>
        </MainContainerApp>
    )
}

export default ImportTokens
