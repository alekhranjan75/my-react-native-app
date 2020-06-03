import React, {Component} from 'react';
import Menu from './Menu';
import DishDetails from './Dish/DishDetails';
import { View, Platform } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './Home';
import About from './About'
import Contact from './Contact'

const MenuNavigator = createStackNavigator({
    Menu: {screen : Menu},
    DishDetails: {screen: DishDetails}
}, {
    initialRouteName: 'Menu'
})

const HomeNavigator = createStackNavigator({
    Home: {screen: Home}
}, {})

const AboutNavigator = createStackNavigator({
    About: {screen: About}  
})
const ContactNavigator = createStackNavigator({
    Contact: {screen: Contact}  
})

const NavigatorMenu = createAppContainer(MenuNavigator)
const NavigatorHome = createAppContainer(HomeNavigator)
const NavigatorAbout = createAppContainer(AboutNavigator)
const NavigatorContact = createAppContainer(ContactNavigator)


const MainNavigator = createDrawerNavigator({
    Home: {
        screen: NavigatorHome,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: NavigatorMenu,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    },
    About: {
        screen: NavigatorAbout,
        navigationOptions: {
            title: 'About us',
            drawerLabel: 'About us'
        }
    },
    Contact: {
        screen: NavigatorContact,
        navigationOptions: {
            title: 'Contact us',
            drawerLabel: 'Contact us'
        }
    },

},{
    drawerBackgroundColor: 'white'
})

const NavigatorMain = createAppContainer(MainNavigator)

class Main extends Component {
    
    render() {
        
        return (
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
                <NavigatorMain />
            </View>
        )
    }
}
export default Main;