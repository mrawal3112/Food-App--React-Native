import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BookmarkPage = () => {
    return (
        <View style={styles.container}>
            <Text>BookmarkPage</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BookmarkPage