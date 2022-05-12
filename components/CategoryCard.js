import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ categoryItem, onPress }) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            marginVertical: 5,
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: '#f3f3f3',
        }} onPress={onPress}>
            <Image source={categoryItem.image} resizeMode="cover" style={{ width: 100, height: 100, borderRadius: 10 }} />
            <View style={{ width: '65%', paddingHorizontal: 20 }}>
                <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold' }}>{categoryItem.name}</Text>
                <Text style={{ color: 'gray' }}>{categoryItem.prep_time} | {categoryItem.servings} servings</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard