import { View, Text, ImageBackground, TouchableOpacity, StatusBar, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import DefaultImage from '../assets/images/HomePage.jpg'
import React from 'react'

const windowHeight = Dimensions.get('window').height;
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const Home = ({ navigation }) => {

    function onPress() {
        return navigation.navigate('DisplayPage');
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar barStyle='light-content' />
            <View style={{ height: windowHeight > 700 ? '70%' : '60%' }}>
                <ImageBackground source={{ uri: DEFAULT_IMAGE }} style={{ flex: 1, justifyContent: 'flex-end' }} resizeMode='cover' >
                    <LinearGradient colors={['transparent', 'black']} style={{ height: 200, justifyContent: 'flex-end', paddingHorizontal: 10 }}>
                        <Text style={{ color: 'white', fontSize: 40, paddingTop: 20, textAlign: 'center' }}>Cooking Experience Like a Chef! </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={{ marginTop: 20, color: 'gray', fontSize: 17, textAlign: 'center', paddingHorizontal: 10 }}>Discover more than 1200 food receipes in your hand and cooking it easily!</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                    <TouchableOpacity style={{ paddingHorizontal: 60, backgroundColor: '#A1C935', paddingVertical: 20, borderRadius: 20 }} onPress={onPress}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Home