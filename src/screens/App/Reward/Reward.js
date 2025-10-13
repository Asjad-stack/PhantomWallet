import { View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer';
import { hp } from '../../../components/ResponsiveComponent';
import { MainHeader } from '../../../components/MainHeader';
import { Images } from '../../../Images';
import { RewardsList } from './Components';
import { routes } from '../../../constants/routes';

const Reward = (props) => {
  return (
    <MainContainerApp>
      <Spacer customHeight={hp(6)} />
      <View style={styles.mainView}>
        <MainHeader title="Rewards" leftImage={Images.backArrow} onPressLeftImage={() => props?.navigation.goBack()} />
        <Spacer />
        <RewardsList onPressReward={(item) => props?.navigation.navigate(routes.rewardInfoScreen, { item: item })} />
      </View>
    </MainContainerApp>
  )
};

export default Reward;
