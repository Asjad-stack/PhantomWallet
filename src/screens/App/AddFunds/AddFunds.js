import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import { Images } from '../../../Images'
import EnterAmount from '../../../components/EnterAmount/EnterAmount'
import useAddFunds from './Hooks'
import { FeeBottomSheet } from './Components'
import { routes } from '../../../constants/routes'

const AddFunds = (props) => {
    const { InfoBottomSheet } = useAddFunds()
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <Spacer />
                <View style={appStyles.row}>
                    <PoppinsText style={styles.fundsText}>Add Funds</PoppinsText>
                    <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
                </View>
                <Spacer />
                <EnterAmount tokenLogo={Images.solanaLogo} tokenName={'Pay SOL'} dollarAmount={'$2.48 available'} feeDollarAmmount={'$0.00'} infoLogo={Images.infoLogo} onPressInfo={() => InfoBottomSheet?.current?.open()} />
            </View>
            <FeeBottomSheet InfoBottomSheet={InfoBottomSheet} onPressDone={() => {
                InfoBottomSheet?.current?.close()
                setTimeout(() => {
                    props?.navigation.navigate(routes.masterPerpetualFuture)
                }, 500);
            }} />
        </AppContainer>
    )
}

export default AddFunds
