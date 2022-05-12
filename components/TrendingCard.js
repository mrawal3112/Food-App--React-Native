import { View, Text, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native'
import React from 'react';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';

const TrendingCard = ({ recipeItem, onPress }) => {
    return (
        <TouchableOpacity style={{
            height: 300, width: 250, borderRadius: 10, marginLeft: 20, marginTop: 10
        }} onPress={onPress}>
            <Image source={recipeItem.image} style={{ width: 250, height: 300, borderRadius: 10 }} />
            <View style={{ position: 'absolute', top: 20, left: 15, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#f3f3f3' }}>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>{recipeItem.category}</Text>
            </View>

            <BlurView tint='dark' style={styles.blurConatiner}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ width: '70%', color: 'white', fontSize: 15, fontWeight: 'bold' }}>{recipeItem.name}</Text>
                        <FontAwesome name="bookmark" size={24} color="#32CD32" />
                    </View>
                    <Text style={{ color: '#90ee90b3' }}>{recipeItem.prep_time} | {recipeItem.servings} Serving</Text>
                </View>
            </BlurView>

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    blurConatiner: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        overflow: 'hidden'
    }
})

export default TrendingCard