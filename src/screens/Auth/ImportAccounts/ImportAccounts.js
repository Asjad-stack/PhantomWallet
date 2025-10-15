import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import useImportAccounts from './Hooks'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { SeedPhraseCustomHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import { CustomButton } from '../../../components/CustomButton'
import { colors } from '../../../constants/colors'
import { FindAccountsCard, SelectedAccountCard } from './Components'


const ImportAccounts = (props) => {
    const { checkedAccounts, setCheckedAccounts, accountSelection, setAccountSelection } = useImportAccounts(props)
    return (
        <MainContainer>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <SeedPhraseCustomHeader leftImage={Images.goBackArrow} centerImage={Images.slideLine2} rightText={'Next'} onPressLeftImage={() => props?.navigation.goBack()} />
                {/* <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={Images.importAccountCircle} resizeMode='contain' style={styles.importAccountCircle} />
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.importAccountsText}>Import Accounts</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.importAccountsDesc}>Finding accounts with activity</PoppinsText>
                </View> */}
                <Spacer customHeight={hp(4)} />
                <Image source={Images.tickGreenCircle} resizeMode='contain' style={styles.tickGreenCircle} />
                <Spacer />
                <PoppinsText style={styles.importAccountsText}>Import Accounts</PoppinsText>
                <Spacer customHeight={hp(1)} />
                <PoppinsText style={styles.importAccountsDesc}>We found 1 account with activity</PoppinsText>
                <Spacer />
                <SelectedAccountCard checkedAccounts={checkedAccounts} setCheckedAccounts={setCheckedAccounts} />
                <Spacer />
                <FindAccountsCard accountSelection={accountSelection} setAccountSelection={setAccountSelection} />
                <Spacer />
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                    <PoppinsText style={styles.centerText}>Find more accounts</PoppinsText>
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title='View Accounts' btnSyles={{ backgroundColor: colors.gray21 }} titleStyles={{ color: colors.gray22 }} />
                <Spacer customHeight={hp(1)} />
                <CustomButton title='Continue' />
            </View>
        </MainContainer>
    )
}

export default ImportAccounts
