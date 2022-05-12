import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react';
import { dummyData } from '../constants/dummyData';
import CategoryCard from '../components/CategoryCard';
import UserImage from '../assets/images/man.png';
import RecipeImage from '../assets/images/recipe.png';
import { AntDesign } from '@expo/vector-icons';
import TrendingCard from '../components/TrendingCard';

const DEFAULT_IMAGE = Image.resolveAssetSource(UserImage).uri;
const Recipe_Image = Image.resolveAssetSource(RecipeImage).uri;

const HomePage = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', height: 80 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 24, color: '#32CD32', fontWeight: 'bold' }}>Hello Programmers</Text>
                    <Text style={{ marginTop: 3, fontSize: 16, color: 'gray' }}>What do you want to cook today?</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('User Logged In')}>
                    <Image source={{ uri: DEFAULT_IMAGE }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                </TouchableOpacity>
            </View >
        )
    }

    function renderSearchBar() {
        return (
            <View style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                marginHorizontal: 20,
                paddingHorizontal: 20,
                marginVertical: 10,
                borderRadius: 10,
                backgroundColor: '#f3f3f3'
            }}>
                <AntDesign name="search1" size={16} color='gray' />
                <TextInput style={{ marginLeft: 15, fontSize: 16 }} placeholderTextColor='gray' placeholder='Search Recipes' />
            </View>
        )
    }

    function renderRecipeCard() {
        return (
            <View style={{
                flexDirection: 'row', marginTop: 10, marginHorizontal: 20, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, backgroundColor: '#90ee9054'
            }}>
                <View style={{ width: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: Recipe_Image }} style={{ width: 70, height: 70, }} />
                </View>
                <View style={{ flex: 1, paddingVertical: 10, marginLeft: 10 }}>
                    <Text style={{ width: '80%', fontSize: 15 }}>
                        You have 12 Recipes you haven't tried yet
                    </Text>
                    <TouchableOpacity style={{ marginTop: 5 }} onPress={() => console.log('New Recipes')}>
                        <Text style={{ color: '#32CD32', textDecorationLine: 'underline', fontSize: 14 }}>See Recipes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderTrending() {
        return (
            <View style={{ marginTop: 10 }}>
                <Text style={{ marginHorizontal: 20, fontSize: 20, fontWeight: 'bold', marginVertical: 5 }}>Trending Recipe</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={dummyData.trending} keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TrendingCard recipeItem={item} onPress={() => navigation.navigate('Recipe')} />
                        )
                    }} />
            </View>
        )
    }

    function renderCategory() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Category</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, color: 'gray', marginVertical: 10, marginTop: 15 }}>View All</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList data={dummyData.categories} keyExtractor={item => `${item.id}`} keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false} ListHeaderComponent={
                    <View>
                        {renderHeader()}
                        {renderSearchBar()}
                        {renderRecipeCard()}
                        {renderTrending()}
                        {renderCategory()}
                    </View>
                } renderItem={({ item }) => {
                    return (
                        <CategoryCard categoryItem={item} onPress={() => navigation.navigate('Recipe')} />
                    )
                }}
                ListFooterComponent={
                    <View style={{ marginBottom: 100 }}>
                    </View>
                } />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default HomePage