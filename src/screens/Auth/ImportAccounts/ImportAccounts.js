import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import useImportAccounts from './Hooks'


const ImportAccounts = (props) => {
    const { } = useImportAccounts(props)
    return (
        <MainContainer>
            <View style={styles.mainView}>
            </View>
        </MainContainer>
    )
}

export default ImportAccounts
