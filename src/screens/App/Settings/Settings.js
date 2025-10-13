import { View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { MainContainerApp } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { SettingList } from './Components'
import { routes } from '../../../constants/routes'

const Settings = (props) => {
  return (
    <MainContainerApp>
      <Spacer customHeight={hp(8)} />
      <View style={styles.mainView}>
        <SettingList onPress={(item) => {
          console.log(item, 'item')
          if (item?.title === 'Security') {
            props?.navigation.navigate(routes.security)
          } else if (item?.title === 'Terms of Service') {
            props?.navigation.navigate(routes.termsOfService)
          } else if (item?.title === 'Delete Account') {
            props?.navigation.navigate(routes.deleteAccount)
          } else if (item?.title === 'Wallet Connect') {
            props?.navigation.navigate(routes.walletConnect)
          }
        }} />
      </View>
    </MainContainerApp>
  )
}

export default Settings
