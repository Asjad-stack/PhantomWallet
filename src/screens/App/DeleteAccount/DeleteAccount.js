import { Image, ImageBackground, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import { RoundButtons } from '../../../components/RoundButton'

const DeleteAccount = (props) => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Delete Account'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer />
                <Image source={Images.profile} resizeMode='contain' style={styles.profile} />
                <Spacer cusomHeight={hp(1)} />
                <PoppinsText style={styles.accountName}>Account 1</PoppinsText>
                <Spacer cusomHeight={hp(1)} />
                <PoppinsText style={styles.address}>TTBJhV...P8tPkG1p5</PoppinsText>
                <Spacer cusomHeight={hp(3)} />
                <PoppinsText style={styles.desc}>Before proceeding, make sure you have securely stored your recovery phrase in a safe place. Without it, there is no way to restore access to your wallet.</PoppinsText>
                <Spacer />
                <PoppinsText style={styles.desc}>All associated funds will be irretrievable without your saved seed phrase or backup key.</PoppinsText>
                <Spacer customHeight={hp(3)} />
                <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                    <View style={appStyles.rowBasic}>
                        <Image source={Images.alertTriangle} resizeMode='contain' style={styles.alertTriangle} />
                        <PoppinsText style={styles.alertText}>{'Deleting this account will permanently remove your access to this wallet'}</PoppinsText>
                    </View>
                </ImageBackground>
                <Spacer />
                <PoppinsText style={styles.deletedText}>Once deleted, you will no longer be able to view balances, send or receive assets, or recover transaction history. </PoppinsText>
            </View>
            <View style={{ paddingBottom: hp(3) }}>
                <RoundButtons text={'Delete Account'} styleView={styles.btnView} onPress={() => { }} />
            </View>
        </MainContainerApp>
    )
}

export default DeleteAccount
