import { View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'

const TermsAndServices = (props) => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Terms and Services'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(4)} />
                <PoppinsText style={styles.title}>Lorem Ipsum</PoppinsText>
                <Spacer customHeight={hp(1)} />
                <PoppinsText style={styles.desc}>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</PoppinsText>
            </View>
        </MainContainerApp>
    )
}

export default TermsAndServices


