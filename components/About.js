import React, { Component } from 'react'
import { View, Text } from 'react-native'

class About extends Component {
    static navigationOptions = {
        title: 'About us',
        headerStyle: {
            backgroundColor: '#8956fe'
        },
        headerTitleStyle: {
            color: 'black'
        }
    }
    render() {
        return (
            <View><Text>About us</Text></View>
        )
    }
}

export default About