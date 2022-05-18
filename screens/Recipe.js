import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Recipe = ({ navigation, route }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(route.params.recipe);
    const scrollY = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        let { recipe } = route.params;
        setSelectedRecipe(recipe)
    }, [])
    const headerHeight = 300;
    console.log(selectedRecipe.name);
    function renderRecipeCardHeader() {
        return (
            <View style={{ alignItems: 'center', overflow: 'hidden', marginTop: -1000, paddingTop: 1000 }}>
                <Animated.Image source={selectedRecipe.image} resizeMode='contain' style={{
                    height: 400, width: '300%', transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [-headerHeight, 0, headerHeight],
                                outputRange: [-headerHeight / 2, 0, headerHeight * 0.75]
                            })
                        },
                        {
                            scale: scrollY.interpolate({
                                inputRange: [-headerHeight, 0, headerHeight],
                                outputRange: [2, 1, 0.75]
                            })
                        }

                    ]
                }} />
                <Animated.View style={{
                    position: 'absolute', bottom: 10, left: 30, right: 30, height: 80, transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [0, 170, 250],
                                outputRange: [0, 0, 100],
                                extrapolate: 'clamp'
                            })
                        }
                    ]
                }}>
                    <BlurView style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }} tint='dark'>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 40, height: 40, marginLeft: 20 }}>
                                <Image source={selectedRecipe.authorImage} style={{ width: 40, height: 40, borderRadius: 20 }} />
                            </View>
                            <View style={{ flex: 1, marginHorizontal: 20 }}>
                                <Text style={{ color: 'lightgray', fontSize: 15 }}>Recipe By: </Text>
                                <Text style={{ color: 'white', fontSize: 18 }}>{selectedRecipe?.authorName}</Text>
                            </View>
                            <TouchableOpacity style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', marginRight: 20, borderRadius: 5, borderWidth: 1, borderColor: '#32CD32' }}>
                                <AntDesign name="arrowright" size={18} color="#32CD32" />
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Animated.View>
            </View>
        )
    }

    function renderRecipeInfo() {
        return (
            <View style={{ flexDirection: 'row', height: 130, width: 400, paddingHorizontal: 30, paddingVertical: 20, alignItems: 'center' }}>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{selectedRecipe?.name}</Text>
                    <Text style={{ marginTop: 5, color: 'lightgray', fontSize: 16 }}>{selectedRecipe?.prep_time} | {selectedRecipe?.servings} Servings</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>

                </View>
            </View>
        )
    }

    function renderIngredientsHeader() {
        return (
            <View style={{ flexDirection: 'row', paddingHorizontal: 30, marginTop: 10, marginBottom: 10, justifyContent: 'space-between' }}>
                <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold' }}> Ingredients</Text>
                <Text style={{ color: 'lightgray' }}>{selectedRecipe?.ingredients.length} Items</Text>
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Animated.FlatList data={selectedRecipe?.ingredients} keyExtractor={() => Math.random()} showsVerticalScrollIndicator={false} ListHeaderComponent={
                <View>
                    {renderRecipeCardHeader()}
                    {renderRecipeInfo()}
                    {renderIngredientsHeader()}
                </View>
            }
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10, backgroundColor: '#f9f9f9', paddingVertical: 10, marginHorizontal: 20, borderRadius: 10 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 5 }}>
                            <Image source={item.icon} style={{ width: 40, height: 40 }} />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16 }}>{item.name}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14 }}>{item.quantity}</Text>
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    <View style={{ marginBottom: 100 }}>
                    </View>
                }
            />
            <View style={{ position: 'absolute', top: 0, left: 0, height: 90, right: 0, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 10 }}>
                <Animated.View style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#000000ba', opacity: scrollY.interpolate({
                        inputRange: [headerHeight - 100, headerHeight - 70],
                        outputRange: [0, 1]
                    })
                }}>

                </Animated.View>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 35, width: 35, borderRadius: 20, borderWidth: 1, borderColor: 'white', backgroundColor: '#00000078' }} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="less-than" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 35, height: 35 }}>
                    <FontAwesome name="bookmark" size={24} color="#32CD32" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Recipe