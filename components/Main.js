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
import { Icon } from 'react-native-elements';
import CustomDrawerContent from './CustomDrawerContent';

const MenuNavigator = createStackNavigator({
    Menu: {
        screen : Menu,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon 
                name = 'menu' 
                size = {24} 
                color = 'black' 
                onPress = {() => navigation.toggleDrawer()}
                />
        })
    },
    DishDetails: {screen: DishDetails}
}, {
    initialRouteName: 'Menu'
})

const HomeNavigator = createStackNavigator({
    Home: {
        screen : Home,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon 
                name = 'menu' 
                size = {24} 
                color = 'black' 
                onPress = {() => navigation.toggleDrawer()}
                />
        })
    }
})

const AboutNavigator = createStackNavigator({
    About: {
        screen : About,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon 
                name = 'menu' 
                size = {24} 
                color = 'black' 
                onPress = {() => navigation.toggleDrawer()}
                />
        })
    }
})
const ContactNavigator = createStackNavigator({
    Contact: {
        screen : Contact,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon 
                name = 'menu' 
                size = {24} 
                color = 'black' 
                onPress = {() => navigation.toggleDrawer()}
                />
        })
    } 
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
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name = 'home'
                    type = 'font-awesome' 
                    size = {24}
                    color = {tintColor}
                />
            )
        }
    },
    Menu: {
        screen: NavigatorMenu,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name = 'list'
                    type = 'font-awesome'
                    size = {24}
                    color = {tintColor}
                />
            )
        }
    },
    About: {
        screen: NavigatorAbout,
        navigationOptions: {
            title: 'About us',
            drawerLabel: 'About us',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name = 'info-circle'
                    type = 'font-awesome'
                    size = {24}
                    color = {tintColor}
                />
            )
        }
    },
    Contact: {
        screen: NavigatorContact,
        navigationOptions: {
            title: 'Contact us',
            drawerLabel: 'Contact us',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name = 'address-card'
                    type = 'font-awesome'
                    size = {24}
                    color = {tintColor}
                />
            )
        }
    },

},{
    drawerBackgroundColor: 'white',
    contentComponent: CustomDrawerContent
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