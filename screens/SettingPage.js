import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SettingPage = () => {
    return (
        <View style={styles.conatiner}>
            <Text>SettingPage</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SettingPage