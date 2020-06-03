import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {DrawerItems} from 'react-navigation-drawer';
const CustomDrawerContent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
            <View style={{flex:1}}>
            <Image source={require('../assets/images/logo.png')} style={styles.drawerImage} />
            </View>
            <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
            </View>
        </View>
        <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});


export default CustomDrawerContent