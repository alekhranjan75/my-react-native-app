import React, {Component} from 'react';
import Menu from './Menu';
import DishDetails from './Dish/DishDetails';
import { View, Platform } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: {screen : Menu},
    DishDetails: {screen: DishDetails}
}, {
    initialRouteName: 'Menu'
})

const Navigator = createAppContainer(MenuNavigator)

class Main extends Component {
    
    render() {
        
        return (
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
                <Navigator />
            </View>
        )
    }
}
export default Main;