import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { BlurView } from 'expo-blur';

const Recipe = ({ navigation, route }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const scrollY = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        let { recipe } = route.params;
        setSelectedRecipe(recipe)
    }, [])
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Animated.FlatList data={selectedRecipe?.ingredients} keyExtractor={() => Math.random()} showsVerticalScrollIndicator={false} ListHeaderComponent={
                <View>

                </View>
            }
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', marginVertical: 5, paddingHorizontal: 30 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 5, backgroundColor: '#f3f3f3' }}>
                            <Image source={item.icon} style={{ width: 40, height: 40 }} />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16 }}>{item.name}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14 }}>{item.quantity}</Text>
                        </View>
                    </View>
                )} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Recipe