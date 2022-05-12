import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SearchPage = () => {
    return (
        <View style={styles.conatiner}>
            <Text>SearchPage</Text>
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
export default SearchPage