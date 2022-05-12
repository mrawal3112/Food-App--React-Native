import React from 'react'
import { View, Text, Image } from 'react-native'


const TabIcon = ({ focused, icon }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', height: 80, width: 50 }}>
            <Image source={icon} style={{ width: 30, height: 30, color: focused ? '	#023020' : '#32CD32' }} />
            {focused && <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 5,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                backgroundColor: '#023020'
            }} />}
        </View>
    )
}

export default TabIcon