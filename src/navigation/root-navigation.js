import React from 'react';
import {View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {DetailScreen, HomeScreen, ProfileScreen, StreamScreen } from "../screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenName } from '../utils/constant';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../themes/styles';
import {createNavigationContainerRef} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
    if(navigationRef.isReady()){
        navigationRef.navigate(name, params);
    }
}
const screenOptions = ({route}) => {
    return{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) =>{
            let iconName;
            if(route.name === ScreenName.home){
                iconName = 'home';
            } else if(route.name === ScreenName.stream){
                iconName = 'game-controller';
            } else {
                iconName='user';
            }
            return (
                <View style={{backgroundColor: focused ? COLORS.lightPurple : 'transparent', width:'50%', height:'80%', justifyContent: 'center', alignItems: 'center', borderRadius:20}}>
                    <EntypoIcon name={iconName} color={COLORS.white} size={22}/>
                </View>
            )

        },
        tabBarStyle:{backgroundColor: COLORS.lightBlack, borderTopColor: COLORS.lightBlack,},
        
    }
}

const RootTab = () => {
    return(
        <Tab.Navigator screenOptions={screenOptions} >
            <Tab.Screen  name={ScreenName.home} component={HomeScreen}/>
            <Tab.Screen  name={ScreenName.stream} component={StreamScreen}/>
            <Tab.Screen  name={ScreenName.profile} component={ProfileScreen}/>
        </Tab.Navigator>
    )
}

const RootStack = () =>{
    return (
         <Stack.Navigator screenOptions={{headerShown: false, presentation: 'modal'}}>
        <Stack.Screen name={'Root'} component={RootTab}/>
        <Stack.Screen name={ScreenName.detail} component={DetailScreen}/>
         </Stack.Navigator> 
    )
}

const RootNavigation = () =>{
    return (
        <RootStack/>
    )
}
export default RootNavigation;