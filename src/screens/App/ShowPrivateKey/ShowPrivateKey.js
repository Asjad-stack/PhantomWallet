import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
import { RowView, SelectTokenList } from './Components'
import LineBreak from '../../../components/LineBreak'
import { appStyles } from '../../../utilities/appStyles'
import { CustomButton } from '../../../components/CustomButton'
import useShowPrivateKey from './Hooks'

const ShowPrivateKey = (props) => {
    const { isChecked, setIsChecked, showPrivateKey, setShowPrivateKey } = useShowPrivateKey()
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Show Private Key'} onPressBack={() => props?.navigation.goBack()} />

                {showPrivateKey ?
                    <>
                        <Spacer />
                        <View style={styles.alertView}>
                            <PoppinsText style={styles.alertText}>Do not share your Private Key!</PoppinsText>
                            <Spacer customHeight={hp(1)} />
                            <PoppinsText style={styles.alertDesc}>lf someone has your Private Key they will have full control of your wallet.</PoppinsText>
                        </View>
                        <Spacer />
                        <View style={{ paddingHorizontal: wp(4) }}>
                            <PoppinsText style={styles.selectAccountText}>Select your account</PoppinsText>
                            <Spacer />
                            <SelectTokenList />
                        </View>
                    </>
                    :
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image source={Images.infoWithRedCircle} resizeMode='contain' style={styles.infoWithRedCircle} />
                        <Spacer />
                        <PoppinsText style={styles.title}>Keep Your Private Key Secret</PoppinsText>
                        <Spacer />
                        <View style={{ paddingHorizontal: wp(4) }}>
                            <RowView leftImage={Images.keyWithRound} title={'Your private key is like a password for your account.'} />
                            <Spacer />
                            <RowView leftImage={Images.eyeSlashWithRound} title={'If someone gets it, they can drain your wallet. Theres is no way to recover lost funds.'} />
                            <Spacer />
                            <RowView leftImage={Images.infoWithRound} title={'Never share it with anyone—no person,website, or app.'} />
                        </View>
                    </View>
                }
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                {showPrivateKey ?
                    <CustomButton title={showPrivateKey ? 'Done' : 'Continue'} disabled={!isChecked} titleStyles={!isChecked ? styles.disabledTitle : styles.btnEnableTitle} onPressBtn={() => setShowPrivateKey(true)} />
                    :
                    <>
                        <LineBreak />
                        <Spacer />
                        <TouchableOpacity activeOpacity={0.8} style={{ ...appStyles.rowBasic, paddingHorizontal: wp(4) }} onPress={() => { setIsChecked(!isChecked) }}>
                            <Image source={isChecked ? Images.checkBox : Images.unCheckBox} resizeMode='contain' style={styles.checkBox} />
                            <PoppinsText style={styles.bottomText}>I understand that sharing my private key could result in permanent loss of funds</PoppinsText>
                        </TouchableOpacity>
                        <Spacer />
                        <CustomButton title={showPrivateKey ? 'Done' : 'Continue'} disabled={!isChecked} titleStyles={!isChecked ? styles.disabledTitle : styles.btnEnableTitle} onPressBtn={() => setShowPrivateKey(true)} />
                    </>
                }
            </View>
        </AppContainer>
    )
}

export default ShowPrivateKey
