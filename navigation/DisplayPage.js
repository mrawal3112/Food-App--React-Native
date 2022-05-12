import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import BookmarkPage from '../screens/BookmarkPage';
import SearchPage from '../screens/SearchPage';
import SettingPage from '../screens/SettingPage';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import TabIcon from '../components/TabIcon';
const Tab = createBottomTabNavigator();

const DisplayPage = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                left: 20,
                right: 20,
                bottom: 40,
                elevation: 0,
                backgroundColor: 'white',
                borderTopColor: 'transparent',
                height: 60,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOpacity: 0.06,
                shadowOffset: {
                    width: 10,
                    height: 10
                }
            },
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomePage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ position: 'absolute', top: '50%' }}>
                        <FontAwesome5 name="home" size={24} color={focused ? "#32CD32" : 'black'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Search" component={SearchPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ position: 'absolute', top: '50%' }}>
                        <FontAwesome5 name="search" size={24} color={focused ? "#32CD32" : 'black'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Bookmark" component={BookmarkPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ position: 'absolute', top: '50%' }}>
                        <FontAwesome5 name="bookmark" size={24} color={focused ? "#32CD32" : 'black'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Setting" component={SettingPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ position: 'absolute', top: '50%' }}>
                        <AntDesign name="setting" size={24} color={focused ? "#32CD32" : 'black'} />
                    </View>
                )
            }} />
        </Tab.Navigator>
    );

}

export default DisplayPage;